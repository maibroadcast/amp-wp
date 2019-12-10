/**
 * External dependencies
 */
import styled from 'styled-components';

/**
 * WordPress dependencies
 */
import { useCallback, useEffect, useRef, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useStory } from '../../app';
import { getComponentForType } from '../../elements';
import useCanvas from './useCanvas';
import Movable from './../movable';

const Background = styled.div.attrs( { className: 'container' } )`
	background-color: ${ ( { theme } ) => theme.colors.fg.v1 };
	position: relative;
	width: 100%;
	height: 100%;
`;

const Element = styled.div`
	cursor: pointer;
	user-select: none;
`;

function Page() {
	const {
		actions: { setBackgroundClickHandler },
	} = useCanvas();

	const {
		state: { currentPage, selectedElements },
		actions: { clearSelection, selectElementById, toggleElementIdInSelection },
	} = useStory();

	const [ targetEl, setTargetEl ] = useState( false );

	useEffect( () => {
		setBackgroundClickHandler( () => clearSelection() );
	}, [ setBackgroundClickHandler, clearSelection ] );

	const handleSelectElement = useCallback( ( elId, evt ) => {
		console.log('handleSelectElement:', elId, evt);
		if ( evt.metaKey ) {
			toggleElementIdInSelection( elId );
		} else {
			selectElementById( elId );
		}
		setTargetEl(evt.currentTarget);
		evt.stopPropagation();
	}, [ toggleElementIdInSelection, selectElementById ] );

	return (
		<Background>
			{ currentPage && currentPage.elements.map( ( { type, id, ...rest } ) => {
				const comp = getComponentForType( type );
				const Comp = comp; // why u do dis, eslint?

				// Ignore multi-selection for now.
				const isSelected = selectedElements.length ? selectedElements[ 0 ].id === id : false;
				return (
					<Element
						key={ id }
						draggable={ false }
						onClick={ ( evt ) => handleSelectElement( id, evt ) }
						onPointerDown={ ( evt ) => {
							if ( ! isSelected ) {
								handleSelectElement( id, evt );
								// Setting target directly works, however, it doesn't get updated information from the selected elements state.
								// setTargetEl( evt.currentTarget );
							}
						} }
					>
						<Comp
							{ ...rest }
							forwardedRef={ null }
						/>
					</Element>
				);
			} ) }
				<Movable
					rotationAngle={ 1 === selectedElements.length ? selectedElements[ 0 ].rotationAngle : 0 }
					targetEl={ targetEl }
					type={ 1 === selectedElements.length ? selectedElements[ 0 ].type : null }
					x={ 1 === selectedElements.length ? selectedElements[ 0 ].x : 0 }
					y={ 1 === selectedElements.length ? selectedElements[ 0 ].y : 0 }
				/>
		</Background>
	);
}

export default Page;

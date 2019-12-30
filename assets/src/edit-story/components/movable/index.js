/**
 * External dependencies
 */
import Moveable from 'react-moveable';
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { forwardRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import InOverlay from '../overlay';

const DEFAULT_Z_INDEX = 10;

function MovableWithRef( { zIndex, ...moveableProps }, ref ) {
	return (
		<InOverlay
			zIndex={ zIndex || DEFAULT_Z_INDEX }
			render={ ( { container } ) => {
				return (
					<Moveable
						ref={ ref }
						container={ container }
						{ ...moveableProps }
					/>
				);
			} } />
	);
}

MovableWithRef.propTypes = {
	zIndex: PropTypes.number,
};

MovableWithRef.defaultProps = {
	zIndex: DEFAULT_Z_INDEX,
};

const Movable = forwardRef( MovableWithRef );

export default Movable;

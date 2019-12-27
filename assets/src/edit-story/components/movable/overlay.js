/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * WordPress dependencies
 */
import { useContext, createPortal } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Context from './context';

// DO NOT SUBMIT: discuss this concept and move this module into its own package.
const DEFAULT_Z_INDEX = 10;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${ ( { zIndex } ) => `${ zIndex }` };
`;

function Overlay( { zIndex, children } ) {
	const { container, layer } = useContext( Context );
	if ( ! container || ! layer ) {
		return null;
	}
	const slot = (
		<Wrapper zIndex={ zIndex || DEFAULT_Z_INDEX }>
			{ children }
		</Wrapper>
	);
	return createPortal( slot, layer );
}

Overlay.propTypes = {
	zIndex: PropTypes.number,
	children: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.node ),
		PropTypes.node,
	] ).isRequired,
};

Overlay.defaultProps = {
	zIndex: DEFAULT_Z_INDEX,
};

export default Overlay;

/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { ElementFillContent } from '../shared';
import { getImgProps, ImageWithScale } from './util';

const Element = styled.div`
	${ ElementFillContent }
`;

const ActualBox = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border: 1px solid ${ ( { theme } ) => theme.colors.mg.v1 }70;
		pointer-events: none;
	}
`;

const FadedImg = styled.img`
	position: absolute;
	opacity: 0.4;
	pointer-events: none;
	${ ImageWithScale }
`;

const ActualImg = styled.img`
	position: absolute;
	${ ImageWithScale }
`;

function ImageEdit( { src, origRatio, width, height, scale, focalX, focalY } ) {
	const imgProps = getImgProps( width, height, scale, focalX, focalY, origRatio );
	return (
		<Element>
			<FadedImg src={ src } { ...imgProps } />
			<ActualBox>
				<ActualImg src={ src } { ...imgProps } />
			</ActualBox>
		</Element>
	);
}

ImageEdit.propTypes = {
	src: PropTypes.string.isRequired,
	origRatio: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	scale: PropTypes.number,
	focalX: PropTypes.number,
	focalY: PropTypes.number,
};

ImageEdit.defaultProps = {
	scale: null,
	focalX: null,
	focalY: null,
};

export default ImageEdit;

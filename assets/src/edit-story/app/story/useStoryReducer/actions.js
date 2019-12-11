/**
 * Internal dependencies
 */
import * as types from './types';

const addPage = ( dispatch ) => ( { properties } ) =>
	dispatch( { type: types.ADD_PAGE, payload: { properties, position: null } } );

const addPageAt = ( dispatch ) => ( { properties, position } ) =>
	dispatch( { type: types.ADD_PAGE, payload: { properties, position } } );

const deletePage = ( dispatch ) => ( { pageId } ) =>
	dispatch( { type: types.DELETE_PAGE, payload: { pageId } } );

const deleteCurrentPage = ( dispatch ) => () =>
	dispatch( { type: types.DELETE_PAGE, payload: { pageId: null } } );

const updatePageProperties = ( dispatch ) => ( { pageId, properties } ) =>
	dispatch( { type: types.UPDATE_PAGE, payload: { pageId, properties } } );

const updateCurrentPageProperties = ( dispatch ) => ( { properties } ) =>
	dispatch( { type: types.UPDATE_PAGE, payload: { pageId: null, properties } } );

const arrangePage = ( dispatch ) => ( { pageId, position } ) =>
	dispatch( { type: types.ARRANGE_PAGE, payload: { pageId, position } } );

const setCurrentPage = ( dispatch ) => ( { pageId } ) =>
	dispatch( { type: types.SET_CURRENT_PAGE, payload: { pageId } } );

const addElements = ( dispatch ) => ( { elements } ) =>
	dispatch( { type: types.ADD_ELEMENTS, payload: { elements } } );

const addElement = ( dispatch ) => ( { element } ) =>
	dispatch( { type: types.ADD_ELEMENTS, payload: { elements: [ element ] } } );

const deleteElementsById = ( dispatch ) => ( { elementIds } ) =>
	dispatch( { type: types.DELETE_ELEMENTS, payload: { elementIds } } );

const deleteSelectedElements = ( dispatch ) => () =>
	dispatch( { type: types.DELETE_ELEMENTS, payload: { elementIds: null } } );

const deleteElementById = ( dispatch ) => ( { elementId } ) =>
	dispatch( { type: types.DELETE_ELEMENTS, payload: { elementIds: [ elementId ] } } );

const updateElementsById = ( dispatch ) => ( { elementIds, properties } ) =>
	dispatch( { type: types.UPDATE_ELEMENTS, payload: { elementIds, properties } } );

const updateElementById = ( dispatch ) => ( { elementId, properties } ) =>
	dispatch( { type: types.UPDATE_ELEMENTS, payload: { elementIds: [ elementId ], properties } } );

const updateSelectedElements = ( dispatch ) => ( { properties } ) =>
	dispatch( { type: types.UPDATE_ELEMENTS, payload: { elementIds: null, properties } } );

const arrangeElement = ( dispatch ) => ( { elementId, position } ) =>
	dispatch( { type: types.ARRANGE_ELEMENT, payload: { elementId, position } } );

const arrangeSelectedElement = ( dispatch ) => ( { position } ) =>
	dispatch( { type: types.ARRANGE_ELEMENT, payload: { elementId: null, position } } );

const setSelectedElementsById = ( dispatch ) => ( { selectedElementIds } ) =>
	dispatch( { type: types.SET_SELECTED_ELEMENTS, payload: { selectedElementIds } } );

const clearSelection = ( dispatch ) => () =>
	dispatch( { type: types.SET_SELECTED_ELEMENTS, payload: { selectedElementIds: [] } } );

const addElementToSelection = ( dispatch ) => ( { elementId } ) =>
	dispatch( { type: types.SELECT_ELEMENT, payload: { elementId } } );

const removeElementFromSelection = ( dispatch ) => ( { elementId } ) =>
	dispatch( { type: types.UNSELECT_ELEMENT, payload: { elementId } } );

const toggleElementInSelection = ( dispatch ) => ( { elementId } ) =>
	dispatch( { type: types.TOGGLE_ELEMENT_IN_SELECTION, payload: { elementId } } );

export default {
	addPage,
	addPageAt,
	deletePage,
	deleteCurrentPage,
	updatePageProperties,
	updateCurrentPageProperties,
	arrangePage,
	setCurrentPage,
	addElements,
	addElement,
	deleteElementsById,
	deleteElementById,
	deleteSelectedElements,
	updateElementsById,
	updateElementById,
	updateSelectedElements,
	arrangeElement,
	arrangeSelectedElement,
	setSelectedElementsById,
	clearSelection,
	addElementToSelection,
	removeElementFromSelection,
	toggleElementInSelection,
};
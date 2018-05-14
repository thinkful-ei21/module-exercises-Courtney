/* global store, cuid */

'use strict';

//eslint-disable-next-line no-unused-vars
const store = (function() {

	const items = [
	    { id: cuid(), name: 'apples', checked: false },
	    { id: cuid(), name: 'oranges', checked: false },
	    { id: cuid(), name: 'milk', checked: true },
	    { id: cuid(), name: 'bread', checked: false }
  	],
  	hideCheckedItems = false,
  	searchTerm = '';

  	return {
  		items: items,
  		hideCheckedItems: hideCheckedItems,
  		searchTerm: searchTerm
  	};

}());


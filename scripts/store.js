/* global store, cuid, Item */

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

  const findById = function(id) {
  	this.items.find(item => store.items.id === id);
  };

  const addItem = function(name) {
  	try {
      Item.validateName(name);
      this.items.push(Item.create(name));
      console.log('item added');
    } catch(err) {
      console.err('Cannot add item: {err.message}');
    }
  };

	return {
		items: items,
		hideCheckedItems: hideCheckedItems,
		searchTerm: searchTerm,
		findById: findById,
		addItem: addItem
	};

}());


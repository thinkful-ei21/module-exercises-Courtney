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
  	this.items.find(item => id === item.id);
  };

  const addItem = function(name) {
  	try {
      Item.validateName(name);
      this.items.push(Item.create(name));

    } catch(err) {
      console.err('Cannot add item: {err.message}');
    }
  };

  const findAndToggleChecked = function(id) {
  	const itemFound = this.findById(id);
  	itemFound.checked = !itemFound.checked;
  };

  const findAndUpdate = function(id, newName) {
  	try {
  		Item.validateName(newName);
  		this.findById(id).name = newName;

  	} catch(err) {
  		console.err('Cannot update name: {error.message}');
  	}
  };

	return {
		items: items,
		hideCheckedItems: hideCheckedItems,
		searchTerm: searchTerm,
		findById: findById,
		addItem: addItem,
		findAndToggleChecked: findAndToggleChecked,
		findAndUpdate: findAndUpdate
	};

}());


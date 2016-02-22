
define([
	//No modules needed
], function() {
	'use strict';

	var PRODUCT_ID = '4328TTY';
	var SAVED_STATUS = PRODUCT_ID + ' has been saved';
	var NON_SAVED_STATUS = PRODUCT_ID + ' has not been saved';
	var hasBeenSaved = false;
	var saveStatus = NON_SAVED_STATUS;

	//Has the product key been saved
	function isSaved() {
		return hasBeenSaved;
	}

	//Get the save status of the product key
	function getSaveStatus() {
		return saveStatus;
	}

	//Set the save status of the product key
	function setSaved(status) {
		//Truthify any value being passed in
		hasBeenSaved = !!status;

		//Set the status message based on truthy check
		if (hasBeenSaved) {
			saveStatus = SAVED_STATUS;
		} else {
			saveStatus = NON_SAVED_STATUS;
		}
		
	}

	//Revealing Module API
	return {
		getSaveStatus: getSaveStatus,
		isSaved:isSaved,
		setSaved: setSaved
	};
});
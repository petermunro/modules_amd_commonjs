/**
 *	Example of AMD
 * 	Main JavaScript Module
 **/
define([
	'app/productKey',
	'domReady!'
], function(productKey) {
	'use strict';

	//Validation button handle
	var VALIDATION_BUTTON_HANDLE = document.getElementById('validateKey');
	//Validation status handle
	var VALIDATION_STATUS_HANDLE = document.getElementById('validationStatus');

	//Validating if the product key has been saved
	function validateSaved() {
		//Getting the save status
		var status = productKey.getSaveStatus();
		//Visually displaying the save status
		VALIDATION_STATUS_HANDLE.innerHTML = status;

		//Toggling the save status
		if (productKey.isSaved()) {
			//Toggle the saved state from true to false
			productKey.setSaved(false);
		} else {
			//Toggle the saved state from false to true
			productKey.setSaved(true);
		}

	}

	//Main
	(function () {
		//Setting up event listener for the validation button handle clicking
		VALIDATION_BUTTON_HANDLE.addEventListener('click', validateSaved);
	})();

});
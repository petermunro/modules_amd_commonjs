// Configure loading modules from the root directory
require.config({
	//Location of the require.js library
    baseUrl: 'lib',
    //Location of our app files
    paths: {
        app: '../app'
    }
});

//Main module that will run the application
require(['app/main']);
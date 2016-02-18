// Configure loading modules from the root directory
require.config({
	//Location of the require.js library
    /* TODO: add the baseUrl */
    //Location of our app files
    paths: {
        app: /* TODO: specify directory containing your app files' */
    }
});

//Main module that will run the application
require(['app/main']);
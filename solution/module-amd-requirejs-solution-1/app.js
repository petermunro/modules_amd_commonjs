// Configure loading modules from the root directory
require.config({
    baseUrl: './',
    paths: {
        app: 'app'
    }
});

//Main module that will run the application
require(['app/main']);
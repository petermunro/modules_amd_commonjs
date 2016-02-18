# Lab 6

## Set up `require.js` Module Loading

The directory `exercise/module-amd-requirejs` contains a small project.
First test that it works in a browser.
Now modify it to use `require.js` using the steps below.

__Load `require.js` and Specify Main Entry Point__

1. In `index.html`, remove the two `<script>` elements at the bottom of the file.
1. Add a `<script>` element to the _head_ of `index.html` (we'll load asynchronously).
   This must load `require.js` (in the lib directory), and specify a `data-main` attribute that
   indicates the main entry point application JS file to load (without
   the '.js' ending). See http://requirejs.org/docs/start.html#add

__Specify Modules to Load__

1. In `app/app.js`, specify two things in the `require.config`:
	1. `baseUrl` - the directory containing the `require.js` library
	1. Relative path of your application files (resolved relative to app.js,
	   so `../app`)

__Define `main` Module__

1. Convert the `main` module (`app/main.js`) into AMD format:
    1. It has two dependencies: `'app/productKey'` and `'domReady!'`.
    1. Use dependency injection to inject these into the factory function.


__Define `productKey` Module__

1. Convert the `productKey` module (`app/productKey.js`) into AMD format:
	1. Remove the IIFE.
    1. It has no dependencies.

Now test the page to ensure it still works.


## Stretch Task

### Optimize using the AMD Optimizer, `r.js`

1. Install the optimizer

         npm install -g requirejs

1. 

'use strict';
/* eslint-disable no-console */
const {Datastore} = require('@google-cloud/datastore');
const errorHandler = require('./index');
const datastore = new Datastore();

// This function would be in a *Repository.js file most likely
function example() {
  return datastore.get('some weird code').catch(errorHandler());
}

// This represents the caller, something like a router or something
// that can then pass this error directly to the express-error-handler
example()
  .then(() => {
    console.log('This should not execute');
  })
  .catch((error) => {
    console.log(`This should have http compliant status code ${error.status}`);
    // express-error-handler(error)
  });

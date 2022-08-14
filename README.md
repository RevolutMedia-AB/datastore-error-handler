# Datastore Error Handler
A error handling function that takes a Datastore SDK error and returns an error with a HTTP status code

## Usage
This module is made to work with the `...Repository.js` files that we use to talk to Datastore via the SDK.

The idea is that you can pass any error that the SDK throws to this handler and it will log the error and throw a new error with 
a HTTP compliant status that can be passed directly to the [ExpressJS Error Handler](https://github.com/RevolutMedia-AB/express-error-handler)

### Example usage

```javascript
// Repository file that intracts with the Datastore SDK

const datastoreErrorHandler = require('datastore-error-handler');
const dsErrorHandler = datastoreErrorHandler(logger);
return datastore.runQuery(someQuery).then(() => true).catch(dsErrorHandler)

// File that uses the repository, like a router
const errorHandler = require('express-error-handler')(logger);
const repo = new Repository(logger, ...params);
repo.someFunction().catch(errorHandler);
```

You can run an example locally using `node example.js`

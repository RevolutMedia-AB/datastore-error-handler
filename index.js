'use strict';
/* eslint-disable no-console */
const errorMapping = require('./errorMapping');

const DEFAULT_LOGGER = {
  debug: console.log,
  info: console.log,
  warn: console.warn,
  error: console.error,
};

const DEFAULT_ERROR = {http: 500, message: 'UNKNOWN'};

/**
 *
 * @param logger {{debug: function, info: function, warn: function, error: function}}
 * @param fallbackError {{http: number, message: string}}
 * @returns {(function(error))}
 */
module.exports = function (logger = DEFAULT_LOGGER, fallbackError = DEFAULT_ERROR) {
  const _logName = '@DatastoreErrorHandler';
  const _logger = {
    debug: (msg, ...args) => logger.debug(`${_logName}: ${msg}`, ...args),
    info: (msg, ...args) => logger.info(`${_logName}: ${msg}`, ...args),
    warn: (msg, ...args) => logger.warn(`${_logName}: ${msg}`, ...args),
    error: (msg, ...args) => logger.error(`${_logName}: ${msg}`, ...args),
  };

  return function (error) {
    const mappedError = errorMapping[error?.status] || fallbackError;
    _logger.error(`Got datastore error ${JSON.stringify(mappedError)}`);
    const errorToReturn = new Error(mappedError.message);
    errorToReturn.status = mappedError.http;
    throw errorToReturn;
  };
};

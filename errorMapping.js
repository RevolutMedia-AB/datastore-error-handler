'use strict';

module.exports = {
  0: {http: 200, message: 'OK'},
  1: {http: 499, message: 'CANCELLED'},
  2: {http: 500, message: 'UNKNOWN'},
  3: {http: 400, message: 'INVALID_ARGUMENT'},
  4: {http: 504, message: 'DEADLINE_EXCEEDED'},
  5: {http: 404, message: 'NOT_FOUND'},
  6: {http: 409, message: 'ALREADY_EXISTS'},
  7: {http: 403, message: 'PERMISSION_DENIED'},
  8: {http: 429, message: 'RESOURCE_EXHAUSTED'},
  9: {http: 400, message: 'FAILED_PRECONDITION'},
  10: {http: 409, message: 'ABORTED'},
  11: {http: 400, message: 'OUT_OF_RANGE'},
  12: {http: 501, message: 'UNIMPLEMENTED'},
  13: {http: 500, message: 'INTERNAL'},
  14: {http: 503, message: 'UNAVAILABLE'},
  15: {http: 500, message: 'DATA_LOSS'},
  16: {http: 401, message: 'UNAUTHENTICATED'},
};

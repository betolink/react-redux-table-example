import fetch from 'isomorphic-fetch';
import { ACTIONS } from '../constants';

function formatErrorMessage (res) {
  return `[${res.status}]: ${res.statusText} (${res.url})`;
}

function handleResponse (response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
  throw new Error(formatErrorMessage(response));
}

// Error action that is dispatched on failed fetch requests
function errorAction (error) {
  return {
    type: ACTIONS.SET_ERROR_MESSAGE,
    error: true,
    errorMessage: error.message
  };
}

// Generic fetchDispatch utility that dispatches 3 actions:
//  Request, Receive and Error
// @param {object} opts:
//  {
//    url: {string} - url to request
//    types: {
//      request: {string} - constant when fetch begins a request,
//      receive: {string} - constant when fetch has successfully received a request
//    },
//    onReceived: {func(data)} - function to invoke when request has succeeded.
//      It must return a object associated with a successful fetch action.
//      First parameter is the json response. By default, data is return in the object
//      Default success action: {type: opts.types.receive, data: data}
//  }
export default function fetchDispatch (opts, provider) {
  return (dispatch) => {
    dispatch({ type: opts.types.request });
    // Dispatch the recevied action with type and data
    let prov = provider;
    if (typeof provider === 'undefined') {
      prov = 'NSIDCV0TST';
    }
    return fetch(`${opts.url}providers/${prov}/datasets`, { headers: opts.headers || {} })
      .then(handleResponse)
      .then((data) => {
        const obj = opts.onReceived ? opts.onReceived(data) : { data };
        return dispatch(Object.assign({ type: opts.types.receive }, obj));
      }).catch((error) => dispatch(errorAction(error)));
  };
}

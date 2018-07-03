import 'whatwg-fetch';

const postProps = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  method: 'POST',
};

/**
 * GET from an endpoint and then serialize as JSON
 * @param {string} endpoint to GET from
 */
exports.getEndpoint = endpoint => fetch(endpoint)
  .then(resp => resp.json());

/**
 * POST an endpoint
 * @param {string} endpoint To POST to
 * @param {object} payload A JSON payload to POST
 */
exports.postEndpoint = (endpoint, payload = {}) => {
  const body = JSON.stringify(payload);
  const requestInit = Object.assign(postProps, { body });
  return fetch(endpoint, requestInit).then(resp => resp.json());
};

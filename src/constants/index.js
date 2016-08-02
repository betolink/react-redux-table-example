import keymirror from 'keymirror';

export default {

  NUTRIENTS: [208, 205, 203, 204, 269, 291, 303],
  CMR_API_ENDPOINT: 'http://localhost:8080/',

  ACTIONS: keymirror({
    REQUEST_NUTRIENTS_DATA: null,
    RECEIVE_NUTRIENTS_DATA: null,
    FILTER_NUTRIENTS_DATA: null,
    SORT_NUTRIENTS_DATA: null,

    SET_ERROR_MESSAGE: null,
    RESET_ERROR_MESSAGE: null
  })
};

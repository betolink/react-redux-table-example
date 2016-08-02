import { ACTIONS } from '../constants';

export function listDatasets (data) {
  return data.datasets;
}

function handleTableActions (state, action) {
  switch (action.type) {
  case ACTIONS.REQUEST_NUTRIENTS_DATA:
    return { isFetching: true };
  case ACTIONS.RECEIVE_NUTRIENTS_DATA:
    return {
      isFetching: false,
      data: listDatasets(action.data)
    };
  case ACTIONS.FILTER_NUTRIENTS_DATA:
    return { filterString: action.filterString.toLowerCase() };
  case ACTIONS.SORT_NUTRIENTS_DATA:
    return {
      sortKey: action.sortKey,
      sortDesc: state.sortKey === action.sortKey ? !state.sortDesc : false
    };
  default:
    return state;
  }
}

function tableReducer (state = {}, action) {
  return Object.assign({}, state, handleTableActions(state, action));
}

export default tableReducer;

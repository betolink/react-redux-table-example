import React from 'react';
import ProviderTable from '../../components/ProviderTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tableActions as actions } from '../../actions';

const ProviderPage = (props) => {
  return (
    <div>
      <ProviderTable {...props} />
    </div>
  );
};

const mapStateToProps = ({table}) => table;
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProviderPage);

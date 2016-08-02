import React from 'react';
import { Column, Cell } from 'fixed-data-table';
import ResponsiveTableWrapper from '../ResponsiveTableWrapper';
import renderers from '../../modules/renderers';

// Stateless cell components for Table component
function SortHeaderCell ({children, sortBy, sortKey, sortDesc, columnKey, ...props}) {
  const clickFunc = () => sortBy(columnKey);

  return (
    <Cell {...props}>
      <a onClick={clickFunc}>
        {children} {renderers.renderSortArrow(sortKey, sortDesc, columnKey)}
      </a>
    </Cell>
  );
}

SortHeaderCell.propTypes = {
  sortBy: React.PropTypes.func.isRequired,
  sortKey: React.PropTypes.string.isRequired,
  sortDesc: React.PropTypes.bool.isRequired,
  columnKey: React.PropTypes.string,
  children: React.PropTypes.any
};

function DataCell ({data, rowIndex, columnKey, ...props}) {
  return <Cell {...props}> {data[rowIndex][columnKey]} </Cell>;
}

DataCell.propTypes = {
  data: React.PropTypes.array.isRequired,
  rowIndex: React.PropTypes.number,
  columnKey: React.PropTypes.string
};

class ProviderTable extends React.Component {

  componentWillMount () {
    console.log('Fetching data');
    this.props.fetchData(this.props.params.provider);
  }

  handleFilterStringChange (e) {
    e.preventDefault();
    this.props.filterBy(e.target.value);
  }

  handleSortClick (label, key) {
    const sortFunc = () => this.props.sortBy(key);
    return <a onClick={sortFunc}>{label}</a>;
  }

  doesMatch (str) {
    return (key) => (key + '').toLowerCase().indexOf(str) !== -1;
  }

  filterData () {
    const {data, filterString} = this.props;
    const str = filterString.toLowerCase();
    return str !== ''
      ? data.filter((r) => Object.values(r).some(this.doesMatch(str)))
      : data;
  }

  sortData () {
    const {data, sortKey, sortDesc} = this.props;
    const multiplier = sortDesc ? -1 : 1;
    data.sort((a, b) => {
      const aVal = a[sortKey] || 0;
      const bVal = b[sortKey] || 0;
      return aVal > bVal ? multiplier : (aVal < bVal ? -multiplier : 0);
    });
    return this;
  }

  render () {
    const { isFetching, filterString, sortBy, sortKey, sortDesc } = this.props;
    const headerCellProps = { sortBy, sortKey, sortDesc };

    const data = this.sortData().filterData();
    console.log(data);

    return (
      <div>
        <input className='filter-input' value={filterString}
          onChange={this.handleFilterStringChange.bind(this)}
          type='text' placeholder='Filter Rows'
          autoCorrect='off' autoCapitalize='off' spellCheck='false' />
        <br />

        {isFetching && data.length === 0 &&
          <div className='loader-box'></div>}
        {!isFetching && data.length === 0 &&
          <h3 className='center'>No Matching Results :( </h3>}

        <ResponsiveTableWrapper
          rowHeight={50}
          headerHeight={50}
          rowsCount={data.length}>
          <Column
            columnKey='dataset'
            header={<SortHeaderCell {...headerCellProps}> Dataset </SortHeaderCell>}
            cell={<DataCell data={data} />}
            flexGrow={0.1}
            width={100} />
          <Column
            columnKey='title'
            header={<SortHeaderCell {...headerCellProps}> Title </SortHeaderCell>}
            cell={<DataCell data={data} />}
            flexGrow={2}
            width={100} />
          <Column
            columnKey='currentVersion'
            header={<SortHeaderCell {...headerCellProps}> Version </SortHeaderCell>}
            cell={<DataCell data={data} />}
            flexGrow={0.1}
            width={100} />
          <Column
            columnKey='lastUpdated'
            header={<SortHeaderCell {...headerCellProps}> Last Updated </SortHeaderCell>}
            cell={<DataCell data={data} />}
            flexGrow={1}
            width={100} />
        </ResponsiveTableWrapper>
      </div>
    );
  }
}

ProviderTable.propTypes = {
  // actions
  fetchData: React.PropTypes.func.isRequired,
  sortBy: React.PropTypes.func.isRequired,
  filterBy: React.PropTypes.func.isRequired,

  // state data
  data: React.PropTypes.array.isRequired,
  filterString: React.PropTypes.string.isRequired,
  sortKey: React.PropTypes.string.isRequired,
  sortDesc: React.PropTypes.bool.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  params: React.PropTypes.object.isRequired
};

export default ProviderTable;

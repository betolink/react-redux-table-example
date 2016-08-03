import React from 'react';
import { InputGroup, FormControl, Navbar } from 'react-bootstrap';

class TableHeader extends React.Component {

  handleFilterStringChange (e) {
    e.preventDefault();
    this.props.filterBy(e.target.value);
  }

  render () {
    return (
       <Navbar fluid>
       <Navbar.Collapse>
       <Navbar.Form pullLeft>
         <InputGroup>
           <InputGroup.Addon>Search:</InputGroup.Addon>
             <FormControl type='text' value={this.props.filterString}
               onChange={this.handleFilterStringChange.bind(this)}
               type='text' placeholder='Filter Rows'
               autoCorrect='off' autoCapitalize='off' spellCheck='false' />
         </InputGroup>
       </Navbar.Form>
       <Navbar.Toggle />
       <Navbar.Text pullRight>
         Datasets: <b>{this.props.items}</b>
       </Navbar.Text>
       </Navbar.Collapse>
       </Navbar>
    );
  }
}

TableHeader.propTypes = {
  filterString: React.PropTypes.string.isRequired,
  handleFilterStringChange: React.PropTypes.func.isRequired,
  filterBy: React.PropTypes.func.isRequired,
  items: React.PropTypes.number.isRequired
};

export default TableHeader;

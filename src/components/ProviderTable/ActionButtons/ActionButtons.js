import * as React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';


class DatasetActionButtons extends React.Component {

  render () {
    return (
      <ButtonGroup>
        <Button eventKey='publish'>Publish</Button>
        <Button eventKey='validate'>Validate</Button>
        <Button eventKey='delete'>Delete</Button>
      </ButtonGroup>
    );
  }
}

export default DatasetActionButtons;

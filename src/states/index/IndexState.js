import React, {Component} from 'react'
import {Route, Link, withRouter} from 'react-router-dom'

// Bootstrap
import Row from 'react-bootstrap/es/Row'
import Grid from 'react-bootstrap/es/Grid'
import Col from 'react-bootstrap/es/Col'
import Table from 'react-bootstrap/es/Table'
import Button from 'react-bootstrap/es/Button'
import Modal from 'react-bootstrap/es/Modal'

// CSS
import './Index.scss'


class TableList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arr = [{
      id: '1',
      firstName: 'Mark',
      lastName: 'Jacob',
      username: '@mdo'
    }, {
      id: '2',
      firstName: 'John',
      lastName: 'Smith',
      username: '@joad23'
    }, {
      id: '3',
      firstName: 'Kiely',
      lastName: 'Jenner',
      username: '@kitty'
    }];

    return (
      <Table className="main-info" striped bordered condensed hover>
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
        </thead>
        <tbody>
        {arr.map((item, index) => {
          return <tr key={index} onClick={this.props.openModal}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.username}</td>
          </tr>;
        })}
        </tbody>
      </Table>
    )
  }
}

class ModalView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>User information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Info</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


@withRouter
export default class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  render() {
    return (
      <Grid id="index-wrapper">
        <div>
          <h1 className="name">App</h1>
          <TableList
            openModal={this.open.bind(this)}
            {...this.props}
          />
          <ModalView
            show={this.state.showModal}
            close={this.close.bind(this)}
            {...this.props}
          />
        </div>
      </Grid>
    );
  }
}

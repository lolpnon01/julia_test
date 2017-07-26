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

// API
import API from '../../api/api'
const api = new API();


class TableList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table className="user-list" striped bordered condensed hover>
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
        </thead>
        <tbody>
        {this.props.list.map((item, index) => {
          return <tr key={index} onClick={() => {
            this.props.openModal(item);
          }}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
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
    const item = this.props.item;
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>User information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{item ? item.id : null}</h4>
            <h4>{item ? item.phone : null}</h4>
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
      showModal: false,
      item: null,
      list: []
    };
  }

  componentDidMount() {
    api.getUserInfo().then((list) => {
      this.setState({list});
    });
  }

  close() {
    this.setState({
      showModal: false,
      item: null
    });
  }

  open(item) {
    this.setState({
      showModal: true,
      item
    });
  }

  render() {
    return (
      <Grid id="index-wrapper">
        <div>
          <h1 className="name">App</h1>
          <TableList
            list={this.state.list}
            openModal={this.open.bind(this)}
            {...this.props}
          />
          <ModalView
            show={this.state.showModal}
            item={this.state.item}
            close={this.close.bind(this)}
            {...this.props}
          />
        </div>
      </Grid>
    );
  }
}

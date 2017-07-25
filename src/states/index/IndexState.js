import React, {Component} from 'react'
import {Route, Link, withRouter} from 'react-router-dom'

// Bootstrap
import Row from 'react-bootstrap/es/Row'
import Grid from 'react-bootstrap/es/Grid'
import Col from 'react-bootstrap/es/Col'

// CSS
import './Index.scss'


@withRouter
export default class IndexComponent extends Component {
  render() {
    return (
      <Grid fluid={true} id="index-wrapper">
        <Row>
          <h1>App</h1>
        </Row>
      </Grid>
    );
  }
}

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AlbumsSearch from '../containers/albums-search.js';

export const Search = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Albums Search</h4>
      <AlbumsSearch />
    </Col>
  </Row>
)

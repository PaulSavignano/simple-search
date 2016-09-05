import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AlbumsList from '../containers/albums-list'
import { AddAlbum } from '../components/AddAlbum'

export const Albums = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Albums</h4>
      <AddAlbum />
      <AlbumsList />
    </Col>
  </Row>
)

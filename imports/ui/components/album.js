import React from 'react'
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { updateAlbum, removeAlbum } from '../../api/albums/methos'

export const Album = ({ album }) => (
  <ListGroupItem key={ album._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <FormControl
          type="text"
          defaultValue={ album.title }
          onKeyUp={ handleUpdateAlbum}
        />
      </Col>
    </Row>

  </ListGroupItem>
)

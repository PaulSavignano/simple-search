import React from 'react'
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { updateAlbum, removeAlbum } from '../../api/albums/methods'

const handleUpdateAlbum = (event) => {
  event.preventDefault()
  const albumId = event.target.getAttribute('data-id')
  const title = event.target.elements["title"].value
  const artist = event.target.elements["artist"].value
  const year = event.target.elements["year"].value
  updateAlbum.call({
    _id: albumId,
    update: { title, artist, year },
  }, (error) => {
    if (error) {
      console.log(error)
      Bert.alert(error.reason, 'danger')
    } else {
      Bert.alert('Album updated!', 'success')
    }
  })
}

const handleRemoveAlbum = (event) => {
  event.preventDefault()
  const albumId = event.target.getAttribute('data-id')
  removeAlbum.call({
    _id: albumId,
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger')
    } else {
      Bert.alert('Album removed.', 'success')
    }
  })
}

export const Album = ({ album }) => (
  <ListGroupItem key={ album._id }>
    <form onSubmit={ handleUpdateAlbum } data-id={ album._id }>
      <Button type="submit" bsStyle="success">Update</Button>
      <Button onClick={ handleRemoveAlbum } data-id={ album._id } bsStyle="danger">Remove</Button>
      <Row>
        <Col xs={ 12 }>
          <FormControl
            name="title"
            type="text"
            defaultValue={ album.title }
          />
        </Col>
        <Col xs={ 12 }>
          <FormControl
            name="artist"
            type="text"
            defaultValue={ album.artist }          />
        </Col>
        <Col xs={ 12 }>
          <FormControl
            name="year"
            type="text"
            defaultValue={ album.year }          />
        </Col>
      </Row>
    </form>
  </ListGroupItem>
)

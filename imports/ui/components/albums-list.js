import React from 'react'
import { ListGroup, Alert } from 'react-bootstrap'
import { Album } from './album'

export const AlbumsList = ({ albums }) => (
  albums.length ? <ListGroup>
    {albums.map((album) => (
      <Album key={ album._id } album={ album } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No albums yet.</Alert>
)

AlbumsList.propTypes = {
  albums: React.PropTypes.array,
}

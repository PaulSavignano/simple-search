import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Alert, FormGroup, FormControl } from 'react-bootstrap'
import { Loading } from './loading'

const search = (albums, searchQuery, event) => {
  const value = event.target.value
  if (value !== '') {
    searchQuery.set(value)
  } else if(value === '') {
    searchQuery.set(value)
  }
}

const renderSearchList = (albums) => {
  return albums.length ?
    <ListGroup>
      {albums.map((document) => (
        <ListGroupItem key={ document._id }>
          { document.title } by <strong>{ document.artist }</strong>
          <span className="pull-right">{ document.year }</span>
        </ListGroupItem>
      ))}
    </ListGroup> :
    <Alert bsStyle="warning">Nothing found</Alert>
}

const searchList = (albums, searchQuery) => {
  return searchQuery.get() ? renderSearchList(albums) : ''
}

export const AlbumsSearch = ({ albums, searchQuery }) => (
  <div>
    <form>
      <FormGroup>
        <FormControl
          type="search"
          autoFocus={focus}
          onKeyUp={ search.bind(this, albums, searchQuery) }
        />
      </FormGroup>
    </form>
    { searchList(albums, searchQuery) }
  </div>
)

AlbumsSearch.propTypes = {
  albums: React.PropTypes.array,
  searchQuery: React.PropTypes.object.isRequired,
};

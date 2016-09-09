import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Alert, FormGroup, FormControl } from 'react-bootstrap'

export class AlbumsSearch extends Component {
  search(event) {
    const value = event.target.value
    console.log(value)
    if (value !== '') {
      this.props.searchQuery.set(value)
      this.props.searching.set(true)
    } else if(value === '') {
      this.props.searchQuery.set(value)
    } else {
      this.props.searching.set(false)
    }
  }
  renderList() {
    console.log(this.props.albums)
    return (
      this.props.albums.length ?
      <ListGroup>
        {this.props.albums.map((document) => (
          <ListGroupItem key={ document._id }>
            { document.title } by <strong>{ document.artist }</strong>
            <span className="pull-right">{ document.year }</span>
          </ListGroupItem>
        ))}
      </ListGroup> :
      <Alert bsStyle="warning">Nothing found</Alert>
    )
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup>
            <FormControl
              type="search"
              autoFocus={focus}
              onKeyUp={this.search.bind(this)}
            />
          </FormGroup>
        </form>
        { this.renderList() }
      </div>
    )
  }
}

AlbumsSearch.propTypes = {
  albums: React.PropTypes.array,
};

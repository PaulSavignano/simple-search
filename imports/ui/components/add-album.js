import React from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { insertAlbum } from '../../api/albums/methods'

const handleInsertAlbum = (event) => {
  event.preventDefault()
  const title = document.querySelector('[name="title"]')
  const artist = document.querySelector('[name="artist"]')
  const year = document.querySelector('[name="year"]')
  if (title.value.trim() !== '' && artist.value.trim() !== '' && year.value.trim !== '') {
    insertAlbum.call({
      title: title.value,
      artist: artist.value,
      year: year.value,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        Bert.alert('Album added!', 'success')
      }
    })
  } else {
    Bert.alert('All fields are required.', 'danger')
  }
}

export const AddAlbum = () => (
  <form onSubmit={ handleInsertAlbum }>
    <FormGroup>
      <FormControl
        name="title"
        type="text"
        placeholder="Type a album title."
      />
    </FormGroup>
    <FormGroup>
      <FormControl
        name="artist"
        type="text"
        placeholder="Type a album artist."
      />
    </FormGroup>
    <FormGroup>
      <FormControl
        name="year"
        type="text"
        placeholder="Type a album year."
      />
    </FormGroup>
    <Button type="submit" bsStyle="success">Add Album</Button>
  </form>
)

import { createContainer } from 'meteor/react-meteor-data'
import { AlbumsSearch } from '../components/albums-search'
import { Meteor } from 'meteor/meteor'
import { Albums } from '../../api/albums/albums'
import { ReactiveVar } from 'meteor/reactive-var'

let searchQuery = new ReactiveVar('')

export default createContainer((props) => {
  const subscription = Meteor.subscribe('albumsSearch', searchQuery.get())
  const albums = Albums.find().fetch()
  return {
    searchQuery,
    albums,
  }
}, AlbumsSearch)

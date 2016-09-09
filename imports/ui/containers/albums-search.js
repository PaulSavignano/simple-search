import { createContainer } from 'meteor/react-meteor-data'
import { AlbumsSearch } from '../components/albums-search'
import { Meteor } from 'meteor/meteor'
import { Albums } from '../../api/albums/albums'
import { ReactiveVar } from 'meteor/reactive-var'

let searchQuery = new ReactiveVar("")
let searching = new ReactiveVar(false)

export default createContainer((props) => {
  const subscription = Meteor.subscribe('albumsSearch', searchQuery.get(), () => {
      setTimeout( () => {
        searching.set( false )
      }, 300 )
    })
  const loading = !subscription.ready();
  const albums = Albums.find().fetch()
  return {
    searchQuery,
    searching,
    loading,
    albums,
  }
}, AlbumsSearch)

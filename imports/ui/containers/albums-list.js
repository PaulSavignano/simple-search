import { composeWithTracker } from 'react-komposer'
import { Albums } from '../../api/albums/albums'
import { AlbumsList } from '../components/albums-list'
import { Loading } from '../modules/loading'
import { Meteor } from 'meteor/meteor'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('albums')
  if (subscription) {
    const albums = Albums.find().fetch()
    onData(null, { albums } )
  }
}

export default composeWithTracker(composer, Loading)(AlbumsList)

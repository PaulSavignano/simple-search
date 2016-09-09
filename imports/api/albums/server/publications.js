import { Meteor } from 'meteor/meteor'
import { Albums } from '../albums'
import { check, Match } from 'meteor/check'

Meteor.publish('albums', () => Albums.find())

Meteor.publish('albumsSearch', function(search) {
  check( search, Match.OneOf( String, null, undefined ))
  let projection = { limit: 2, sort: { title: 1 }}
  if (search) {
    let regex = new RegExp(search, 'i')
    let query = {
      $or: [
        { title: regex },
        { artist: regex },
        { year: regex },
      ],
    }
    projection.limit = 100
    return Albums.find(query, projection)
  }
})

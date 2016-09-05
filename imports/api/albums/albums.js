import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const Albums = new Mongo.Collection('Albums')

if (Meteor.isServer) {
  Albums._ensureIndex({ title: 1, artist: 1, year: 1 })
}

Albums.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
})

Albums.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

Albums.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of this album.',
  },
  artist: {
    type: String,
    label: 'The artist of the album.',
  },
  year: {
    type: String,
    label: 'The year this album was released.',
  },
})

Albums.attachSchema(Albums.schema)

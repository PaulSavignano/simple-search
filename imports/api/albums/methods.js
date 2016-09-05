import { Albums } from './albums'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { rateLimit } from '../../modules/rate-limit'

export const insertAlbum = new ValidatedMethod({
  name: 'albums.insert',
  validate: new SimpleSchema({
    title: { type: String },
    artist: { type: String },
    year: { type: String },
  }).validator(),
  run(album) {
    Albums.insert(album)
  },
})

export const updateAlbum = new ValidatedMethod({
  name: 'albums.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Albums.update(_id, { $set: update })
  },
})

export const removeAlbum = new ValidatedMethod({
  name: 'albums.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Albums.remove(_id)
  },
})

rateLimit({
  methods: [
    insertAlbum,
    removeAlbum,
  ],
  limit: 1,
  timeRange: 1000,
})

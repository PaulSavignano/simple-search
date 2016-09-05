import { Meteor } from 'meteor/meteor'
import { Albums } from '../albums'

Meteor.publish('albums', () => Albums.find())

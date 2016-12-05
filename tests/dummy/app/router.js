import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('test', {path: 'test'});

  this.route('download', {path: 'download'});
});

export default Router;

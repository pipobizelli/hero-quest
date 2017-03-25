/**
 * Sessions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    has_rounds: function() {
      return Rounds.find({session_id: this.id});
    },

    total_actions: function() {
      return Actors.find({session_id: this.id}).then(function(actors) {
        return actors.length * sails.config.max_actions_per_actor;
        done();
      });
    }
  },
  schema: false,
};

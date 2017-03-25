/**
 * SessionRounds.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    has_available_actions: function() {
      Actions.find({ round_id: this.id }).then(function(actions) {
        
      })
    }
  }
};

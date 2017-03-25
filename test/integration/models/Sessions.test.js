var expect = require('expect.js');

describe('SessionModel', function() {
  beforeEach(function() {
    Sessions.destroy({}).exec(function(err) {});
    Rounds.destroy({}).exec(function(err) {});
    Actions.destroy({}).exec(function(err) {});
  })

  describe('.has_rounds', function() {
    it('should know how many rounds', function (done) {

      Sessions.create({name: "Test"}).then(function(session) {
        return session;
      }).then(function(session) {
        return [session, Rounds.create({
          session_id: session.id
        })]
      }).spread(function(session, rounds) {
        return session.has_rounds();
      }).then(function(rounds) {
        expect(rounds.length).to.be(1);
        done();
      });
    });
  });

  describe('.total_actions', function() {
    it('should know how many actions are available for the things in play', function() {

      Sessions.create({name: "Test"}).then(function(session) {
        return session;
      }).then(function(session) {
        var actor1 = Actors.create({
          session_id: session.id,
          name: "Orc"
        });
        var actor2 = Actors.create({
          session_id: session.id,
          name: "Barbarian"
        });

        return [session, actor1, actor2];
      }).spread(function(session, actor1, actor2) {
        return session.total_actions();
      }).then(function(total_actions) {
        var result = 4*sails.config.max_actions_per_actor;
        expect(total_actions).to.be(result);
        done();
        return;
      });
    })
  })
});

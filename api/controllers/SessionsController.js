/**
 * SessionsController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {

  get: function(req, res) {
    Sessions.findOneById(req.param('session_id')).then(function(session) {
      res.json(session)
    })
  },

  join: function(req, res) {
    Sessions.findOneById(req.param('session_id')).then(function(session) {

      return Promise.all([
        Accounts.findOne({email: req.param('email')}),
        session
      ]);
    }).spread(function(account,session) {

      return Promise.all([
        account,
        session,
        Players.create({
          session_id: session.id,
          account_id: account.id
        })
      ])

    }).spread(function(account, session, session_players) {

      console.log("session id", session.id);
      res.json({"action": {
        "name": "account_joined",
        "data": {
          account: account,
          session: session,
          session_players: session_players
        }
      }});
    })
  },
};

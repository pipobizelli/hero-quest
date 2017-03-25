// var expect = require('expect.js');
//
// describe('RoundsModel', function() {
//   beforeEach(function() {
//     Sessions.destroy({}).exec(function() {
//     });
//     Rounds.destroy({}).exec(function() {
//     });
//     Actions.destroy({}).exec(function() {
//     });
//   })
//
//   describe('.has_available_actions', function(){
//
//     xit("should know if there are actions available", function() {
//
//       var total_actions = 2;
//
//       Sessions.create({name: "Test"}).then(function(session) {
//         return session;
//       }).then(function(session) {
//         return [session, Rounds.create({
//           session_id: session.id
//         })]
//       }).spread(function(session, round) {
//         return [round, Actions.create({
//           round_id: round.id,
//           thing_id: 10
//         })]
//       }).spread(function(round, action) {
//         expect(round.has_available_actions()).to.be(true)
//         done();
//       });
//     })
//   })
// });

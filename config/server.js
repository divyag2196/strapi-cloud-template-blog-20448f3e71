// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      'w4Rr3G9hF0kL2zX7',
      'aP9nD8qW5sY1uV6m',
      'jB3cT7xN4eR0vH2k',
      'L8gQ5pZ2oU1tM9yR',
    ]),
  },
});

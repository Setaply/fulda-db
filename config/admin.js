module.exports = ({ env }) => ({
  auth: {
    secret: 'e24c3f8ec7e6b2cf03caaa5fdd4d2bbf7b14b5dc506c6c1921b98a645adce04d',
  },
  apiToken: {
    salt: '7387f3901742f471f2b3bf082f6e6f72fdc0e7633ec3536276408941b2d32780',
  },
  transfer: {
    token: {
      salt: '4644af1ae80531c2f8d3c06f9134c5832577e5019007ba41fd7b52c063065ee7',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

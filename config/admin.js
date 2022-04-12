module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6b454c375665bf8e96c4cff287300562'),
  },
});

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url:
    process.env.NODE_ENV !== 'development'
      ? env('SERVER_URL')
      : 'http://localhost:1337',
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});

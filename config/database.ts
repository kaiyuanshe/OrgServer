import { join } from 'path';

export default ({ env }) => {
  const client =
      process.env.NODE_ENV === 'production'
        ? env('DATABASE_CLIENT', 'sqlite')
        : 'sqlite',
    filename = join(
      __dirname,
      '..',
      '..',
      env('DATABASE_FILENAME', '.tmp/data.db'),
    ),
    connectionString = env('DATABASE_URL'),
    host = env('DATABASE_HOST', 'localhost'),
    port = env.int('DATABASE_PORT'),
    database = env('DATABASE_NAME', 'strapi'),
    schema = env('DATABASE_SCHEMA', 'public'),
    user = env('DATABASE_USERNAME', 'strapi'),
    password = env('DATABASE_PASSWORD', 'strapi'),
    ssl = env.bool('DATABASE_SSL', false) && {
      key: env('DATABASE_SSL_KEY', undefined),
      cert: env('DATABASE_SSL_CERT', undefined),
      ca: env('DATABASE_SSL_CA', undefined),
      capath: env('DATABASE_SSL_CAPATH', undefined),
      cipher: env('DATABASE_SSL_CIPHER', undefined),
      rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
    },
    pool = {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    };
  const connection = { host, database, user, password, ssl };

  const connections = {
    mysql: { connection: { ...connection, port: port || 3306 }, pool },
    postgres: {
      connection: connectionString
        ? { connectionString, schema }
        : { ...connection, port: port || 5432, schema },
      pool,
    },
    sqlite: { connection: { filename }, useNullAsDefault: true },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};

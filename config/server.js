module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "67dd2e3f2e4c1b87f5e11bd8e2967092"),
    },
  },
  url: env("BASE_URL"),
});

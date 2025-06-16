export default ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-cloudflare-r2',
      providerOptions: {
        accessKeyId: env('CLOUDFLARE_ACCESS_KEY_ID'),
        secretAccessKey: env('CLOUDFLARE_ACCESS_SECRET'),
        endpoint: env('CLOUDFLARE_ENDPOINT'),
        params: {
          Bucket: env('CLOUDFLARE_BUCKET'),
        },
        cloudflarePublicAccessUrl: env('CLOUDFLARE_PUBLIC_ACCESS_URL'),
      },
    },
  },
});

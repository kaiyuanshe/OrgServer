#!/usr/bin/env node

import { $, fs, path } from 'zx';

$.verbose = true;

const [inputFile, outputFolder] = process.argv.slice(2);

const httpServer = $`pnpm strapi develop`,
  startedAt = Date.now(),
  title = 'Swagger to Type definition';

(async () => {
  console.time(title);
  do {
    try {
      const { ok } = await fetch('http://localhost:1337/documentation/v1.0.0');

      if (ok) break;
    } catch {}

    if (Date.now() - startedAt > 120_000)
      throw new URIError(
        `Failed to generate Swagger document within 2 minutes`,
      );
  } while (true);

  await $`npx swagger-typescript-api generate -p ${inputFile} --extract-enums --modular -o ${outputFolder}`;

  await fs.copy(
    path.join(outputFolder, 'data-contracts.ts'),
    path.join(outputFolder, '../index.ts'),
    { overwrite: true },
  );
  console.timeEnd(title);

  process.exit();
})();

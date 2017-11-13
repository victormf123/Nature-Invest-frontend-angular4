// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  api: 'http://localhost:3000',
  aopi: 'http://localhost:3003/oapi',
  private_api:  'http://localhost:3003/api',
  api_upload:  'http://localhost:8003/api',
  image_save_api: 'http://localhost:8003'
};

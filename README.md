# Swastik Patel

## Deploy to Vercel

Import this repository into Vercel and keep the project root set to the repository root. Vercel uses the settings in `vercel.json` to run `npm run build` and publish the generated `dist` directory. The checked-in `package-lock.json` keeps dependency installation reproducible.

To validate a production build locally, run:

```sh
npm ci
npm run build
```

# Your Linktree Link

These files form the basis of a new custom Linktree link with React.

## Getting started

Install dependencies using your package manager of choice:

`npm install` or `yarn`

Once dependencies are installed, you can run a hot-reloaded local development server on [http://localhost:3000](http://localhost:3000) via:

`npm run dev` or `yarn dev`

Optionally, pass the `--ssl` argument to start the development server as https on [https://localhost:3000](http://localhost:3000).

## File Structure

Several files were created during generation of this code:

- `src/index.jsx` which contains the React component for the presentation of you link-type on a linktree profile
- `src/manifest.json` which contains information about your link type, and helps users to discover your link-type via the Link Marketplace
- `src/settings.json` which contains a definition of the settings available to Linktree users when configuring the link type
- `fixtures/props-data.json` which contains test data during development and testing of your link type which is provided to your `index.jsx` component during development

## Publishing a link type

Before your link-type can be made available to linktree users, it must be packaged, then published and reviewed by Linktree.

Before submitting code for review, ensure that the properties in your `manifest.json` and `settings.json` data are accurate and complete.

### Package your code

From the root of this directory, run  `npm run build` or `yarn build` to bundle the UI code.

### Publish your link type

Publishing a link type involves pushing your code to Linktree to make it available for testing on your linktree profile.

Publish your link via:

`npm run upload` or `yarn upload`

Your link-type will be published in a `DRAFT` state - the link-type will not be available for use by Linktree users, but you will be able to add this link type to your Linktree profile in order to test and validate that it functions as expected.

## Submit your link type for review

Once you are satisfied that your link-type functions as expected, you can request a review from Linktree to have your link-type submitted to the Link Types Marketplace:

Submit your link type via:

`npm run submit` or `yarn submit`

Linktree will test and review your link-type, requesting changes if required, and following approval, will make your link available in the Link Types Marketplace for use by users.

## Contact

TODO: Organise contact details specific to link-kit team

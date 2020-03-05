<p align="center">
  <a href="http://optimizely.github.io/oui/storybook/">
    <img width="200" src="https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif" title="Meet Louis, the official mascot of OUI">
  </a>
</p>

<h1 align="center">OUI Component Library</h1>

<div align="center">

A custom CSS framework and React component library that powers the Optimizely user interface.

[![Build Status](https://travis-ci.org/optimizely/oui.svg?branch=devel)](https://travis-ci.org/optimizely/oui)
[![codecov](https://codecov.io/gh/optimizely/oui/branch/devel/graph/badge.svg)](https://codecov.io/gh/optimizely/oui)
[![npm version](https://badge.fury.io/js/optimizely-oui.svg)](//npmjs.com/package/optimizely-oui)

</div>

## 🔗 Links

- [Storybook](http://optimizely.github.io/oui/storybook/)
- [Archived SASS documentation](http://design.optimizely.com/docs/oui/9.0.0/) (requires VPN access)
- [latest.css](https://s3-us-west-2.amazonaws.com/design.optimizely.com/oui/latest/styles.css)

## 📦 Install

```bash
git clone https://github.com/optimizely/oui.git
yarn install
yarn storybook
```

## ʦ TypeScript

Typescript types are generated for `src/components` from their JS files to aid consumption of this repo in Typescript.
The `optimizely-oui` declaration file (`types/templates/module-declaration.d.ts`) exports all named component exports.
To build the exported declaration file (`types/index.d.ts`), the autogenerated individual component module declarations
are merged with the main declaration file (see `yarn generate-types`).

### PropTypes

`PropTypes` can still be used for non-Typescript (`.js`) components as well as when more complex validation is needed.
The (`babel-plugin-typescript-to-proptypes`)[https://www.npmjs.com/package/babel-plugin-typescript-to-proptypes] plugin is used to ensure that all components (typed or not) are exported with `PropTypes`.

## 💪 Contribute

Read [how to contribute to OUI](CONTRIBUTING.md) for instructions on making pull requests.

## 🚢 Release

Check out the [Release a New Version section](https://github.com/optimizely/oui/blob/devel/CONTRIBUTING.md#ship-release-a-new-version) for instructions on releasing a new version of OUI

## ⚡️ React

To use an OUI component inside your React app:

```jsx
import React from 'react';
import { Button } from 'optimizely-oui';
...
return ( <Button size="tiny">Click Me</Button> );
```

## 🧪 Testing

Thanks to [Chromatic](https://www.chromaticqa.com/), OUI runs visual regression tests on every pull request and merge. These tests are snapshots of each [Storybook](https://storybook.js.org/) story within the repository. For implementation details, see the [Chromatic section](https://github.com/optimizely/oui/blob/devel/CONTRIBUTING.md#-using-chromatic-visual-regression-testing-vrt) of the contributing guidelines

## 💅 Sass

To use OUI Sass variables and mixins in your project read [how to use OUI sass](readme-sass.md).

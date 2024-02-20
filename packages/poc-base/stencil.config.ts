import type { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import {
  copyExternalLibsConfig,
  externalizeDependencyPlugin,
  getPackageConfig,
  singleBundleConfig,
} from '@sydle/ui-external-libs';
import path from 'path';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const packageJsonPath = path.resolve(__dirname, 'package.json');
const jsonDocsPath = path.resolve(__dirname, 'docs.json');
const uiConfig = getPackageConfig(packageJsonPath);
const externalLibs = uiConfig?.external ?? [];

export const config: Config = {
  namespace: 'poc-base',
  bundles: singleBundleConfig(jsonDocsPath),
  rollupPlugins: {
    before: [externalizeDependencyPlugin([...externalLibs])],
    after: [nodePolyfills()],
  },
  taskQueue: 'immediate',
  devServer: { openBrowser: false },
  hashedFileNameLength: 24,
  plugins: [sass()],
  outputTargets: [
    { type: 'docs-json', file: 'docs.json' },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [...copyExternalLibsConfig(externalLibs)],
    },
  ],
};

/**
 * @author WMXPY
 * @namespace Webpack
 * @description Development
 */

import { SudooWebpackReact } from "@sudoo/webpack-react";
import * as Path from "path";

const BUILD_DIR: string = Path.resolve(__dirname, '..', 'dist');
const APP_DIR: string = Path.resolve(__dirname, '..', 'src');
const TSCONFIG_PATH: string = Path.resolve(__dirname, '..', 'typescript', 'tsconfig.dev.json');
const COMMON_SASS_DIR: string = Path.resolve(__dirname, '..', 'style', 'common');

export default SudooWebpackReact.create({

    applicationPath: APP_DIR,
    applicationEntryFile: 'index.tsx',

    buildPath: BUILD_DIR,
    commonSassPath: COMMON_SASS_DIR,

    tsconfigPath: TSCONFIG_PATH,
}, {

    defines: {

        'process.env.RELEASE_VERSION': JSON.stringify(process.env.RELEASE_VERSION || 'LOCAL'),
        'process.env.TEST_SERVER_PATH': JSON.stringify(process.env.TEST_SERVER_PATH),
    },
    title: 'Brontosaurus',
    mobile: true,
}).development(8081);

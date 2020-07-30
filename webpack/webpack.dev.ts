/**
 * @author WMXPY
 * @namespace Webpack
 * @description Development
 */

import { SudooWebpackReact } from "@sudoo/webpack-react";
import { getBuildPath, getSourcePath, joinStylePath, joinTypeScriptPath } from "./path";

export default SudooWebpackReact.create({

    applicationPath: getSourcePath(),
    applicationEntryFile: 'index.tsx',

    buildPath: getBuildPath(),
    commonSassPath: joinStylePath('common'),

    tsconfigPath: joinTypeScriptPath('tsconfig.dev.json'),
}, {

    defines: {

        'process.env.RELEASE_VERSION': JSON.stringify(process.env.RELEASE_VERSION || 'LOCAL'),
        'process.env.TEST_SERVER_PATH': JSON.stringify(process.env.TEST_SERVER_PATH),
    },
    title: 'Brontosaurus',
    mobile: true,
}).development(8081);

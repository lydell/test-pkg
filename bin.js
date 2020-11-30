#!/usr/bin/env node

console.log("bin.js", __dirname);

const eslint = require(require.resolve("eslint", {paths: [process.cwd(), ...require.resolve.paths("eslint")]}));

console.log("eslint", eslint);

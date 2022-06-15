#!/usr/bin/env node

const openBrowser = require("react-dev-utils/openBrowser");
const chalk = require("chalk");
const argv = require("minimist")(process.argv.slice(2), { boolean: [ 'n', 'dry-run' ], alias: { 'n': 'dry-run' }});

let uri;

//Usage?
if (argv["?"] || argv.h || argv.help) {
  usage();
  return 0;
}

if (argv._.length == 0) {
  error_log("No URL specified");
  usage();
  return 1;
}

let arg = argv._.join();
if (!arg.match(/^https?:\/\//)) {
  arg = "http://" + arg;
}

//Valid inputs?
try {
  uri = new URL(arg);
} catch (e) {
  error_log(`Could not parse ${arg} as a URL`);
  usage();
  return 1;
}

//Is dry run?
if (argv.n) {
  process.env.BROWSER = "none";
}

//Let's open...
let opened = openBrowser(uri);
if (!opened && !argv.n) {
  error_log(`Could not open: "${uri}"`);
  return 1;
} else {
  console.log(chalk.blue(`${argv.n ? "Dry-run": "Launched"}: ${uri}`));
}

return 0;

function error_log(msg) {
  console.error(chalk.red(msg));
}

function usage() {
  console.log(`
Usage: 
  npx open-in-browser url

  url: Any valid URL, like http://yahoo.com
`);
}

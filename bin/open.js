#!/usr/bin/env node

const openBrowser = require("react-dev-utils/openBrowser");
const chalk = require("chalk");
const argv = require("optimist").argv;

let uri;

//Usage?
if (argv["?"] || argv.h || argv.help) {
  usage();
  return 0;
}

let arg = new String(argv._);
if (!arg.match(/^https?:\/\//)) {
  arg = 'http://' + arg;
}

//Valid inputs?
try {
  uri = new URL(arg);
} catch (e) {
  error_log(`Could not parse ${arg} as a URL`);
  usage();
  return 1;
}

//Let's open...
let opened = openBrowser(uri);
if (!opened) {
  error_log(`Could not open: ${uri}"`);
  return 1;
} else {
  console.log(chalk.blue(`Launched: ${uri}`));
}

return 0;

function error_log(msg) {
  console.error(chalk.red(msg));
}

function usage() {
  console.log(`
Usage: 
  open-in-browser url

  url: Any valid URL, like http://yahoo.com
`);
}

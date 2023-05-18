# open-in-browser

[![npm version](https://badge.fury.io/js/open-in-browser.svg)](https://badge.fury.io/js/open-in-browser)
[![Run Tests](https://github.com/Grynn/open-in-browser/actions/workflows/test.yml/badge.svg)](https://github.com/Grynn/open-in-browser/actions/workflows/test.yml)

Simple CLI tool using react-dev-tool's open in browser to open any URL in the computers default browser. If the page is already open, activate the tab instead of creating a new window.

# install (optional, use with npx instead)

`npm i -g open-in-browser`

# usage

`open-in-browser http://yahoo.com`

Works with npx too; `npx open-in-browser http://yahoo.com`

# notes

This project is a wrapper around [react-dev-utils/openBrowser](https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/openBrowser.js). If writing a node app it may be more efficient to call `require("react-dev-utils/openBrowser")(url)` instead.

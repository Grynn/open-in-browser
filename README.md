# open-in-browser

Simple CLI tool using react-dev-tool's open in browser to open any URL in the computers default browser. If the page is already open, activate the tab instead of creating a new window.

# install (optional, use with npx instead)

`npm i -g open-in-browser`

# usage

`npx open-in-browser http://yahoo.com`

# notes

This project is a wrapper around [react-dev-utils/openBrowser](https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/openBrowser.js). If writing a node cli / app
it may be more efficient to call `require("react-dev-utils/openBrowser")(url)` instead.

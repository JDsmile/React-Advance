#!/usr/bin/env node
require('perish')
var log = require('./logger')
var meow = require('meow')
var cosmos = require('./cosmos')
var cli = meow(
  `
    Usage
      $ cosmos <input>
    Options
      --motto, -m  Show the cosmonauts motto
    Examples
      $ cosmos listen # listen for cosmonaut travel requests
      $ cosmos --motto
`,
  {
    flags: {
      motto: {
        type: 'boolean',
        alias: 'm'
      },
      version: {
        type: 'boolean',
        alias: 'v'
      }
    }
  }
)

if (cli.flags.motto) {
  log('to infinity, and beyond! 🚀')
} else {
  cosmos.listen()
}

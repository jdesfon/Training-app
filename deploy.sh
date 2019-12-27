#!/usr/bin/bash

heroku plugins:install heroku-cli-static
heroku buildpacks:set https://github.com/hone/heroku-buildpack-static
heroku static:deploy
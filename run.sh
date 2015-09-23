#!/bin/bash

# This builds site and starts to serve it while watching for changes in source files
sudo docker run --rm -v "$PWD:/src" -p 4000:4000 grahamc/jekyll server -H 0.0.0.0

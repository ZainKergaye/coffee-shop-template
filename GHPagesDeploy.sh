#!/bin/bash

ng build --base-href "https://ZainKergaye.github.io/coffee-shop-template/" 
npx angular-cli-ghpages --dir=dist/coffee-shop-template

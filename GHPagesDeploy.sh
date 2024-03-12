#!/bin/bash

ng build --base-href "https://yanacoffeeshop.com/"
npx angular-cli-ghpages --dir=dist/coffee-shop-template

#!/bin/bash

echo "switching to $1"
rm -rf current-brand
mkdir current-brand
cp -r brands/$1/* current-brand
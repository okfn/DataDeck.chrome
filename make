#!/bin/bash
# Builds the zip file for the chrome extension

mkdir -p tmp
mkdir -p dist
zip -r dist/DataDeck.chrome.zip DataDeck.chrome/*
rm -Rf tmp

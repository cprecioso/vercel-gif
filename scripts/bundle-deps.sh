#!/bin/bash

yum install fontconfig-devel -y
cp /usr/lib/libfontconfig.so.1 node_modules/skia-canvas/native

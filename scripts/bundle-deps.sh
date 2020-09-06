#!/bin/bash

yum install fontconfig-devel -y
cp /usr/lib64/libfontconfig.so.1 node_modules/skia-canvas/native

#!/bin/bash

yum install cairo-devel libjpeg-turbo-devel giflib-devel pango-devel -y
cp /usr/lib64/lib{uuid,mount}.so.1 node_modules/canvas/build/Release/

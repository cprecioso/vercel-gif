#!/bin/bash

yum install cairo-devel libjpeg-turbo-devel giflib-devel pango-devel -y
cp /usr/lib64/{libuuid.so.1,libmount.so.1,libpng12.so.0,libjpeg.so.62,libpixman-1.so.0,libfreetype.so.6,libcairo.so.2,libpango-1.0.so.0,libpangocairo-1.0.so.0,libpangoft2-1.0.so.0,libblkid.so.1} node_modules/canvas/build/Release/

#!/usr/bin/env bash

cat >dist/cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF

cat >dist/esm/package.json <<!EOF
{
    "type": "module"
    "types": "./dist/esm/src/index.d.ts",
}
!EOF
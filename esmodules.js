export default function add(a, b) {
    return a + b
}

// import add from './add' -> can change name 

export const myName = 'Giovanna';
// import { myName } from './MyName'; -> can't change name

export function diff(a, b) {
    return a - b;
}

export function mult(a, b) {
    return a * b;
}

// import { diff, mult } from './utils';

// import * as Something from './some-module';

import('./some-module').then(
    allModuleExports => {
      // the allModuleExports object will be the same object you get if you had
      // used: import * as allModuleExports from './some-module'
      // the only difference is this will be loaded asynchronously which can
      // have performance benefits in some cases
    },
    error => {
      // handle the error
      // this will happen if there's an error loading or running the module
    },
)

// React:
import React, { useState, useEffect } from 'react'
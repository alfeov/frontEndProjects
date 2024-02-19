'use strict';
import '../scss/style.scss';

// Common JS
// export - modules.exports
// import - require (NodeJD utils, packages, custom modules )
// const fs = require('fs');
// console.log(fs);

//?

// const {hello} = require('./hello');
// hello()

//?

// const hello = require('./hello');
// hello()

//?

// const {hello} = require('./hello');
// hello();

//!

// import welcome from './hello';
// hello();

//!

// import {hello} from './hello';
// hello();

//!

// import welcome, {hello as anotherNameOfHello} from './hello';
// welcome();
// anotherNameOfHello();

//!

// import * as all from './hello';
// console.log(all) // {welcome, hello}
// all.welcome();
// all.hello();

// import ('./bye')
// 	.then((module) => {
// 		let {bye} = module;
// 		bye();
// 	})
// 	.catch(error => {
// 		console.warn('Something wrong');
// 	})

//? re-export

import {hello, bye} from './';
//!welcome does not exist((
hello();
bye();


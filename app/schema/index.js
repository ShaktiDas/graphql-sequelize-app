'use strict';

import fs from 'fs';
import path from 'path';


let graphQlSchema = {};

//load all files from schema except the index.js
fs.readdirSync(__dirname)
	.filter((file)=>(file.indexOf('.')!==0) && (file !== 'index.js'))
	.forEach((file)=>{
		
		//const myModule = require('./mymodule');
		//prepare a file path and import the file
		const Contact = require(path.join(__dirname, file));
		//import {Contact} from path.join(__dirname, file);
		//parepare a set of db modles 
		graphQlSchema["Contact"] = Contact;
	});


module.exports = graphQlSchema;

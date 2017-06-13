'use strict';

import fs from 'fs';
import path from 'path';
import _ from 'lodash'; 

let graphQlSchema = {};

//load all schema dynamically 
//load all files from schema except the index.js
fs.readdirSync(__dirname)
	.filter((file)=>(file.indexOf('.')!==0) && (file !== 'index.js'))
	.forEach((file)=>{


		const schema = require(path.join(__dirname, file));
		graphQlSchema = _.assign(graphQlSchema, schema);
		
	});



module.exports = graphQlSchema;

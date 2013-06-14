/**
 * @author Diego Resendez <diego.resendez@zero-oneit.com>
 */
var exceptions = require("../exceptions/zoExceptions");
var u = require("underscore");

(function ($){
	var config = function(settings){
		settings = settings || {};
		var self = {};
		u.extend(self, settings);
		
		self.isBatch = self.isBatch || false;
		self.Default_Class = self.Default_Class || 'main';
		self.actualPath = process.cwd();
		self.responses_dir = '../responses/';
		self.path_handlers = ['/']; 
		self.JSON_RPC = "2.0";
		self.port = 3000;
		self.debug = false;
		
		
		return self;
	};
	$.config = config;
}(typeof window === 'undefined' ? exports:window));
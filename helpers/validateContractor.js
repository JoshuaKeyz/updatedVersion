let Contractor = require("../models/Contractor");

module.exports = function(_id){
	new Contractor({id: _id})
		.fetch()
		.then(function(model){
			if(model){
				new Contractor({id: _id})
					.fetch()
					.then(function(model){
						console.log("Hello");
						console.log(model.toJSON());
						return true;
					});
			}else{
				return false;
            
			}
		});
};
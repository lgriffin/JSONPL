/**
 * PRP will have a number of responsibilities. Receive an individual policy or return a set
 * of relevant policies. It also needs to control the connection to the redis server.
 */


var microtime = require('microtime');



function onRequest(event, callback)
{
	var redback = require('redback').createClient();
	var timings = [];
	timings[0] = microtime.now();
/*
 * A key is passed into the PRP for retrieval. A policies callback will wait for the set to be returned
 * and trigger then.
 */ 
	var hash = redback.createHash(event[0]);   // eg hashtest // checkins // checkouts

	hash.get(event[1], function(err, val)
			{
			
			  var data = JSON.parse(val);
			  console.log("Policy successfully retrieved calling back");
			  timings[1] = microtime.now();
			  
			  var ps = data.PolicySet[0];
			  var policySet = ps.PolicySet;
			  //console.log(policySet);

			  console.log("Length: " + policySet.length);

			  redback.quit();
			  callback(policySet, timings);
		
			});
			
	
	
	
	
}


exports.onRequest = onRequest;

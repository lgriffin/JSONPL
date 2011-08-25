/**
 * Connection logic at the top here will need to add two Handlers
 * an onDomainMessage handler where the message coming in is flagged as "message" for example
 * and an onPDPMessage where the message is flagged as "PDPmessage". This would allow
 * intelligent routing of the messages into the PEP
 * 
 * 
 * 
 * 
 */
var sys = require('sys');
var microtime = require('microtime');
var Flow = require('gowiththeflow');
var events = require('events');
var http = require('http');
var PDP = require('./PDP');
var PRP = require('./PRP');
var fs = require('fs');
var eventEmitter = new events.EventEmitter();

var resource ="./resources/lgriffin/request/single/";
var end = "-req.json";

var masterPolicy;

var request = 1;
var replication = 0;

eventEmitter.on("policy", function(msg)
		{
			console.log("Request received to load in the policy set");
			PDP.onPEPMessage(["policyset","icc"], function(policySet, callback){
				
				console.log("Received callback timings");
				console.log(callback[0]);
				console.log(callback[1]);
				console.log(callback[2]);
				var x = callback[2] - callback[0];
				console.log("0,0,PolicySetLoaded,"+ x);
				console.log(policySet.length);
				masterPolicy = policySet;
			
			});
	
		});




eventEmitter.on("request", function(msg){
	

	
		
		if(request <= 200)
			{
			
			var path = resource+request+end;
			var fileContents = fs.readFileSync(path,'utf8');
			var json = JSON.parse(fileContents); 

			var timestamps = [];
			timestamps[0] = microtime.now();  //request received
			PDP.evaluate(json, masterPolicy, function(response, timing){
				
				//timings needs to be sorted here
				var total_eval_time =  timing[2] - timestamps[0];
				console.log(request +","+replication+","+response+","+ total_eval_time);
			
			
		if(replication < 99)	
		{
			replication++;
			eventEmitter.emit("request", "permit");
			}
		
		else
			{
			replication = 0;
			request++;

		
				eventEmitter.emit("request", "permit");
				
			
				    
			 
			
			
			}
			
			//request++;
			//eventEmitter.emit("request", "permit");
			});
			}
		
		else
			{
			console.log("Finished");
			}
		
//	});
	
	//replication++;
	//if(replication <= 100 && request <= 50)
	
	
});


// Logic timings for debugging, turn off for proper runs.

/*setTimeout(function() {
	 eventEmitter.emit("policy", "start");
	    }, 2000);    


setTimeout(function() {
	 eventEmitter.emit("request", "start");
	    }, 6000);    

*/



/**
 * Connection logic at the top here will need to add two Handlers
 * an onDomainMessage handler where the message coming in is flagged as "message" for example
 * and an onPDPMessage where the message is flagged as "PDPmessage". This would allow
 * intelligent routing of the messages into the PEP
 */

function onDomainMessage(message)
{
    
/*
 * The main responsibility of this function is a customer facing role, where it takes in
 * the message an routes it onto the PDP. Some pre processing might be performed here, such as
 * validation checks, before the message is passed in for evaluation. 
 */



}


function onPDPMessage(PDPmessage)
{
	
/*
 * A decision has been made by the PDP and you must relay this to the domain Entity.
 * The PDPmessage coming in must contain the action to be carried out and the recipient.
 */ 
	
	
}
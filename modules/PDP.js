/**
 * Connection logic at the top here will need to add a minimum of three Handlers
 * an onPEPMessage handler where the message coming in is flagged as "message" from the PEP
 * an onPolicyMessage where the message is flagged as "policy" which may be a policy set. 
 * an onPIPMessage where the message is flagged as "PIPmessage" which contains attribute info
 * 
 */



function onPEPMessage(message)
{

    /**
	 * The responsibility here would be to take in the message and perform some logic interpretations
	 * on the request. The policy set to be targeted or the keywords required for analysis would be
	 * sent to the PRP for retrieval.
	 */


}



function onPolicyMessage(policy)
{
	
	/**
	 * The PRP would have sent this message and either a single policy or a policy bundle would have 
	 * been returned for this function to evaluate. This is primarily where the policy combinations and
	 * interpretation could be performed before passing it onto an evaluate function
	 */

	
}


function onPIPMessage(PIPmessage)
{
	
/**
 * If the evaluation required some form of additional attribute lookup from the PIP
 * this function would be waiting for pickup the result when it come back in.
 * Again some processing might be required here but the attibutes could be passed onto an 
 * evaluate function.
 */


}


function evaluate(information, decision)
{
	
/**
 * This is the core functionality and the brain. This will kick off processing requests and use the information
 * it has gained to make a decision which will be built up over time. The decision will be a callback to be executed
 * when all information is available and the decision made.
 */

}
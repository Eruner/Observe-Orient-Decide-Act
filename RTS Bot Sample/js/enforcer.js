/*
		try{
			
		}catch(Pokemon){
			alert('Error in function_name() :\n'+Pokemon);
		}
*/
function Enforcer(scope){

	var DATA = scope,allUnits = DATA.UNITS;

	function act(){
		try{
			/* Chose execute commands in effective way, micro units, place buildings */
			scoutingActions();
			militaryActions();
			economyActions();
		}catch(Pokemon){
			alert('Error in act:\n'+Pokemon);
		}
	}

	function scoutingActions() {
		try{

		}catch(Pokemon){
			alert('Error in scoutingActions() :\n'+Pokemon);
		}
	}

	function militaryActions() {
		try{

		}catch(Pokemon){
			alert('Error in militaryActions() :\n'+Pokemon);
		}
	}

	function economyActions() {
		try{
			/* make a list of available workers, list of tasks, resources */
			/* while (enough resources and enough workers) 
					if task is not being executed
						execute Build Order task 
						(assign a worker to that task)
						subtract resources from pool
				assign remaining workers to jobs
					if not jet doing their job
			 */
		}catch(Pokemon){
			alert('Error in economyActions() :\n'+Pokemon);
		}
	}

	console.log('Enforcer initialized');

	return{
		act:act
	};
}
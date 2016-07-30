/*
		try{
			
		}catch(Pokemon){
			alert('Error in function_name() :\n'+Pokemon);
		}
*/
function General(scope){

	var DATA = scope,globalMap = DATA.MAP,buildOrder = DATA.BuildOrder;

	function decide(){
		try{
			/* Chose combat strategy, build order, behavior */
			if(!buildOrder){
				chooseBuildOrder();
			}
			makeMilitaryCommands();
			makeEconomyCommands();
		}catch(Pokemon){
			alert('Error in decide:\n'+Pokemon);
		}
	}

	function chooseBuildOrder() {
		try{
			buildOrder = {};
			/* Depends on Map Analysis and current resources */
			DATA.BuildOrder = buildOrder;
		}catch(Pokemon){
			alert('Error in chooseBuildOrder() :\n'+Pokemon);
		}
	}

	function makeMilitaryCommands() {
		try{
			/* Chose if Attack, Retreat or Defend */
			/* And where (on map/region) to focus */
		}catch(Pokemon){
			alert('Error in makeMilitaryCommands() :\n'+Pokemon);
		}
	}

	function makeEconomyCommands() {
		try{
			/* Depends on buildOrder and current status */
			/* results is priority list of Build / Train / Research tasks */
		}catch(Pokemon){
			alert('Error in makeEconomyCommands() :\n'+Pokemon);
		}
	}

	console.log('General initialized');

	return{
		decide:decide
	};
}
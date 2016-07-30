/*
		try{
			
		}catch(Pokemon){
			alert('Error in function_name() :\n'+Pokemon);
		}
*/
function Reporter(scope){

	var DATA = scope,allUnits = DATA.UNITS,supply = DATA.SUPPLY;

	function orient(){
		try{
			/* Understand raw information into simpler data structure */
			/* That helps with recognizing changes */
			areWeScouting();
			areEnemiesInOurTerritory();
			areEnemiesStrong();
			doWeNeedMoreSupply();
			//console.log('[Reporter] oriented');
		}catch(Pokemon){
			alert('Error in orient:\n'+Pokemon);
		}
	}

	function areWeScouting() {
		try{
			/* how many assigned scouts ? */
			/* is enemy explored (first scouting,location) ? */
			/* currentScout.currentRegion is safe ? */
		}catch(Pokemon){
			alert('Error in areWeScouting() :\n'+Pokemon);
		}
	}

	function areEnemiesInOurTerritory(){
		try{
			//console.log('All Units:\n'+JSON.stringify(allUnits));
		}catch(Pokemon){
			alert('Error in areEnemiesInOurTerritory() :\n'+Pokemon);
		}
	}

	function areEnemiesStrong(){
		try{
			/* if there are more enemies than threshold */
			/* if it's dangerous outside */
		}catch(Pokemon){
			alert('Error in areEnemiesStrong() :\n'+Pokemon);
		}
	}

	function doWeNeedMoreSupply() {
		try{
			/* check if not max supply */
			/* check if next production is possible */
			/* supply.needSupply = true;//or false */
		}catch(Pokemon){
			alert('Error in doWeNeedMoreSupply() :\n'+Pokemon);
		}
	}

	console.log('Reporter initialized');

	return{
		orient:orient
	};
}
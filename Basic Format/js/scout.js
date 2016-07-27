function Scout(scope){

	var DATA = scope;

	function observe(){
		try{
			/* Fill Up Data Sctuctures with raw information, map/units/buildings/diplomacy */
			console.log('Scout observed.');
		}catch(Pokemon){
			alert('Error in observe:\n'+Pokemon);
		}
	}

	console.log('Scout initialized');

	return{
		observe:observe
	};
}
/*
		try{
			
		}catch(Pokemon){
			alert('Error in function_name() :\n'+Pokemon);
		}
*/
function Scout(scope){

	var DATA = scope,map,money,allUnits=DATA.UNITS,allBuildings=DATA.BUILDINGS,supply=DATA.SUPPLY,diplom=DATA.DIPLOMACY;

	function observe(){
		try{
			/* Fill Up Data Structures with raw information, map/units/buildings/diplomacy */
			if(!map){
				analyzeMap();
				analyzeDiplomacy();
			}
			calculateIncome();
			checkUnits();
			checkBuildings();
			checkSupply();
			//console.log('[Scout] observed.');
		}catch(Pokemon){
			alert('Error in observe:\n'+Pokemon);
		}
	}

	function analyzeMap(){
		try{
			map = {};
			/* Analyze Map into walkable/build-able regions */
			/* decide if map is big/med/small, open or with obstacles */
			/* also if there are plenty resources, medium or scarce */
			/* Store where is Home Location and give it a radius */
			DATA.MAP = map;
		}catch(Pokemon){
			alert('Error in analyzeMap() :\n'+Pokemon);
		}
	}
	function analyzeDiplomacy() {
		try{
			diplom = {};/*
			diplom.me = {};
			diplom.allies = {};
			diplom.enemies = {};*/
			DATA.DIPLOMACY = diplom;
		}catch(Pokemon){
			alert('Error in analyzeDiplomacy() :\n'+Pokemon);
		}
	}

	function calculateIncome(){
		try{
			if(!money){
				/* Initialize data structure for calculating income between steps */
				money = {};
				/* Result will be used for Measurement */
				DATA.MONEY = money;
			}else{
				/* Calculate Raw income, current gold, spendings, average on last 10 seconds */
			}
		}catch(Pokemon){
			alert('Error in calculateIncome() :\n'+Pokemon);
		}
	}

	function checkUnits(allUnits) {
		try{
			/* for all players 
					count (non)military units into good data structure
			*/
			/* Our Units - alive and training */
		}catch(Pokemon){
			alert('Error in checkUnits() :\n'+Pokemon);
		}
	}

	function checkBuildings(allBuildings) {
		try{
			/* for all players 
					count buildings into good data structure
			*/
			/* Our Buildings - completed and in-progress */
		}catch(Pokemon){
			alert('Error in checkBuildings() :\n'+Pokemon);
		}
	}

	function checkSupply() {
		try{
			/* 
				supply.current = 0;
				supply.available = 0;
				supply.producing = 0;
			 */
		}catch(Pokemon){
			alert('Error in checkSupply() :\n'+Pokemon);
		}
	}

	console.log('Scout initialized');

	return{
		observe:observe
	};
}
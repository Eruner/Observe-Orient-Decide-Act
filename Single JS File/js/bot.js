var BOT = (function(){

	var DATA,SCOUT,REPORTER,GENERAL,ENFORCER;

	function init(){
		try{
			DATA = {};//this is accessible to all modules below
			SCOUT = function(){
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
			}();
			REPORTER = function(){
				function orient(){
					try{
						/* Understand raw information into simpler data structure */
						console.log('Reporter oriented');
					}catch(Pokemon){
						alert('Error in orient:\n'+Pokemon);
					}
				}

				console.log('Reporter initialized');

				return{
					orient:orient
				};
			}();
			GENERAL = function(){
				function decide(){
					try{
						/* Chose combat strategy, build order, behaviour */
						console.log('General decided');
					}catch(Pokemon){
						alert('Error in decide:\n'+Pokemon);
					}
				}

				console.log('General initialized');

				return{
					decide:decide
				};
			}();
			ENFORCER = function(){
				function act(){
					try{
						/* Chose execute commands in effective way, micro units, place buildings */
						console.log('Enforcer acted');
					}catch(Pokemon){
						alert('Error in act:\n'+Pokemon);
					}
				}

				console.log('Enforcer initialized');

				return{
					act:act
				};
			}();
			console.log('Bot fully initialized.');
		}catch(Pokemon){
			alert('Error in initApp:\n'+Pokemon);
		}
	}

	function makeMove(){
		SCOUT.observe();
		REPORTER.orient();
		GENERAL.decide();
		ENFORCER.act();
	}

	window.addEventListener("load", init);

	return{
		makeMove:makeMove
	};
})();
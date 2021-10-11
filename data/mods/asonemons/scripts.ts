export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	init(){ 
		//To construct learnsets for these evolutions, I'm gonna cheat and copy the code Scoopapa made for construction FE fusion learnsets
		//If you delete moves that a prevo learns from a learnset that's constructed via inheriting said moves from a prevo the way Showdown does normally,
		//it just won't work. 
		//But if you construct the learnset artificially ahead of time, like this, you can then remove moves from it that it would inherit at initialization. 
		for (const id in this.dataCache.Pokedex) {//check the dex for fusions
			const fusionEntry = this.dataCache.Pokedex[id];
			if (fusionEntry.inheritMoves) {//if the pokedex entry has a fusion field, it's a fusion
				const learnsetFusionList = [];//list of pokemon whose learnsets need to be fused
				for (let name of fusionEntry.inheritMoves) {
					let prevo = true;
					while (prevo) {//make sure prevos of both fused pokemon are added to the list
						learnsetFusionList.push(name);
						const dexEntry = this.dataCache.Pokedex[this.toID(name)];
						if (dexEntry.prevo) name = dexEntry.prevo;
						else prevo = false;
					}
				}
				if (!this.dataCache.Learnsets[id]) this.dataCache.Learnsets[id] = { learnset: {}};//create a blank learnset entry so we don't need a learnsets file
				for (let name of learnsetFusionList) {					
					const learnset = this.dataCache.Learnsets[this.toID(name)].learnset;//get the learnset of each pokemon in the list
					for (const moveid in learnset) {
						//if (this.dataCache.Moves[moveid].isNonstandard === 'Past') continue; //exclude dexited moves
						this.modData('Learnsets', id).learnset[moveid] = ['8L1'];//hopefully they dont care about compatibility in this mod
					}
				}
			}
		}
		
		//Now, case-by-case learnset revisions: 
		//this.modData('Learnsets', 'poke').learnset.move = ['8L1'];
		//delete this.modData('Learnsets', 'poke').learnset.move;


		
		//This mmmmmmight not be necessary, but I can't tell how this is gonna turn out in the client while testing
		//so I figure better safe than sorry...
		//Construct Mega Evolution learnsets, for those horrible clowns that for SOME REASON select Megas in the teambuilder
		for (const id in this.dataCache.Pokedex) {
			const pokemon = this.dataCache.Pokedex[id];
			if (pokemon.megaOf) {//if the pokedex entry has a fusion field, it's a fusion
				if (!this.dataCache.Learnsets[id]) this.dataCache.Learnsets[id] = { learnset: {}};//create a blank learnset entry so we don't need a learnsets file
				const learnset = this.dataCache.Learnsets[this.toID(pokemon.megaOf)].learnset;//get the learnset of the mon
				for (const moveid in learnset) {
					//if (this.dataCache.Moves[moveid].isNonstandard === 'Past') continue; //exclude dexited moves
					this.modData('Learnsets', id).learnset[moveid] = ['8L1'];//hopefully they dont care about compatibility in this mod
				}
			}
		}
	},
}; 

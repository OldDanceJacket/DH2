	// Tradeback content by Ema Skye; currently a WIP. Takes a lot to go through Egg Moves.
// Some Tradeback moves come from prototype versions of GSC (SW97 etc).

export const Learnsets: {[k: string]: ModdedLearnsetData} = {
	//All new LCs will have Encounter Levels of 5, allowing them to be used in a theoretically cart-accurate LC.
	/*Follow this template, which includes all of RBY's mandatory TMs for easier importing.
	MONSTERNAME: {
		learnset: {
			tailwhip: ["1L1"],

			toxic: ["1M"],
			rage: ["1M"],
			mimic: ["1M"],
			doubleteam: ["1M"],
			bide: ["1M"],
			rest: ["1M"],
			substitute: ["1M"],
		},
		encounters: [
			{generation: 1, level: 5},
		],
	},
	*/
	bulbasaur: {
		learnset: {
			tailwhip: ["1L1"],
			confusion: ["1L1"],
			quickattack: ["1L7"], //funny from KEP ponyta copy paste
			psywave: ["1L14"],
			stomp: ["1L21"],
			agility: ["1L28"],
			firespin: ["1M"],
			takedown: ["1L42", "1M"],
			selfdestruct: ["1L57"],
			bide: ["1M"], //Universal
			bodyslam: ["1M"],
			doubleedge: ["1M"],
			doubleteam: ["1M"], //Universal
			dreameater: ["1M"],
			fireblast: ["1M"],
			flash: ["1M"],
			meditate: ["1M"],
			megapunch: ["1M"],
			mimic: ["1M"], //Universal
			psychic: ["1M"],
			rage: ["1M"], //Universal
			reflect: ["1M"],
			rest: ["1M"], //Universal
			skullbash: ["1M"],
			swift: ["1M"],
			substitute: ["1M"], //Universal
			thunderwave: ["1M"],
			toxic: ["1M"], //Universal
			watergun: ["1M"], //Universal
		},
		encounters: [
			{generation: 1, level: 5},
		],
	},
	ivysaur: {
		learnset: {
			tailwhip: ["1L1"],
			confusion: ["1L1"],
			quickattack: ["1L7"], //funny from KEP ponyta copy paste
			psywave: ["1L14"],
			stomp: ["1L21"],
			agility: ["1L28"],
			firespin: ["1M"],
			takedown: ["1L42", "1M"],
			selfdestruct: ["1L57"],
			bide: ["1M"], //Universal
			bodyslam: ["1M"],
			doubleedge: ["1M"],
			doubleteam: ["1M"], //Universal
			dreameater: ["1M"],
			fireblast: ["1M"],
			flash: ["1M"],
			meditate: ["1M"],
			megapunch: ["1M"],
			mimic: ["1M"], //Universal
			psychic: ["1M"],
			rage: ["1M"], //Universal
			reflect: ["1M"],
			rest: ["1M"], //Universal
			skullbash: ["1M"],
			swift: ["1M"],
			substitute: ["1M"], //Universal
			thunderwave: ["1M"],
			toxic: ["1M"], //Universal
			watergun: ["1M"], //Universal
		},
		encounters: [
			{generation: 1, level: 5},
		],
	},
	venusaur: {
		learnset: {
			tailwhip: ["1L1"],
			confusion: ["1L1"],
			quickattack: ["1L7"], //funny from KEP ponyta copy paste
			psywave: ["1L14"],
			stomp: ["1L21"],
			agility: ["1L28"],
			firespin: ["1M"],
			takedown: ["1L42", "1M"],
			selfdestruct: ["1L57"],
			bide: ["1M"], //Universal
			bodyslam: ["1M"],
			doubleedge: ["1M"],
			doubleteam: ["1M"], //Universal
			dreameater: ["1M"],
			fireblast: ["1M"],
			flash: ["1M"],
			meditate: ["1M"],
			megapunch: ["1M"],
			mimic: ["1M"], //Universal
			psychic: ["1M"],
			rage: ["1M"], //Universal
			reflect: ["1M"],
			rest: ["1M"], //Universal
			skullbash: ["1M"],
			swift: ["1M"],
			substitute: ["1M"], //Universal
			thunderwave: ["1M"],
			toxic: ["1M"], //Universal
			watergun: ["1M"], //Universal
		},
		encounters: [
			{generation: 1, level: 5},
		],
	},
		charmander: {
			learnset: {
				tailwhip: ["1L1"],
				confusion: ["1L1"],
				quickattack: ["1L7"], //new legal move for ponyta
				psywave: ["1L14"],
				stomp: ["1L21"],
				agility: ["1L28"],
				firespin: ["1M"],
				takedown: ["1L42", "1M"],
				toxic: ["1M"],
				psychic: ["1M"],
				bodyslam: ["1M"],
				flash: ["1M"],
				doubleedge: ["1M"],
				rage: ["1M"],
				dreameater: ["1M"],
				meditate: ["1M"],
				megapunch: ["1M"],
				mimic: ["1M"],
				doubleteam: ["1M"],
				reflect: ["1M"],
				bide: ["1M"],
				fireblast: ["1M"],
				swift: ["1M"],
				thunderwave: ["1M"],
				skullbash: ["1M"],
				rest: ["1M"],
				substitute: ["1M"],
				watergun: ["1M"],
			},
			encounters: [
				{generation: 1, level: 5},
			],
	},
	charmeleon: {
		learnset: {
		},
	},
	charizard: {
		learnset: {
		},
	},
	squirtle: {
		learnset: {
		},
	},
	wartortle: {
		learnset: {
		},
	},
	blastoise: {
		learnset: {
		},
	},
	caterpie: {
		learnset: {
		},
	},
	metapod: {
		learnset: {
		},
	},
	butterfree: {
		learnset: {
		},
	},
	weedle: {
		learnset: {
		},
	},
	kakuna: {
		learnset: {
		},
	},
	beedrill: {
		learnset: {
		},
	},
	pidgey: {
		learnset: {
		},
	},
	pidgeotto: {
		learnset: {
		},
	},
	pidgeot: {
		learnset: {
		},
	},
	rattata: {
		learnset: {
		},
	},
	raticate: {
		learnset: {
		},
	},
	spearow: {
		learnset: {
		},
	},
	fearow: {
		learnset: {
		},
	},
	ekans: {
		learnset: {
		},
	},
	arbok: {
		learnset: {
		},
	},
	pikachu: {
		learnset: {
		},
	},
	raichu: {
		learnset: {
		},
	},
	sandshrew: {
		learnset: {
		},
	},
	sandslash: {
		learnset: {
		},
	},
	nidoranf: {
		learnset: {
		},
	},
	nidorina: {
		learnset: {
		},
	},
	nidoqueen: {
		learnset: {
		},
	},
	nidoranm: {
		learnset: {
		},
	},
	nidorino: {
		learnset: {
		},
	},
	nidoking: {
		learnset: {
		},
	},
	clefairy: {
		learnset: {
		},
	},
	clefable: {
		learnset: {
		},
	},
	vulpix: {
		learnset: {
		},
	},
	ninetales: {
		learnset: {
		},
	},
	jigglypuff: {
		learnset: {
		},
	},
	wigglytuff: {
		learnset: {
		},
	},
	zubat: {
		learnset: {
		},
	},
	golbat: {
		learnset: {
		},
	},
	oddish: {
		learnset: {
		},
	},
	gloom: {
		learnset: {
		},
	},
	vileplume: {
		learnset: {
		},
	},
	paras: {
		learnset: {
		},
	},
	parasect: {
		learnset: {
		},
	},
	venonat: {
		learnset: {
		},
	},
	venomoth: {
		learnset: {
		},
	},
	diglett: {
		learnset: {
		},
	},
	dugtrio: {
		learnset: {
		},
	},
	meowth: {
		learnset: {
		},
	},
	persian: {
		learnset: {
		},
	},
	psyduck: {
		learnset: {
		},
	},
	golduck: {
		learnset: {
		},
	},
	mankey: {
		learnset: {
		},
	},
	primeape: {
		learnset: {
		},
	},
	growlithe: {
		learnset: {
		},
	},
	arcanine: {
		learnset: {
		},
	},
	poliwag: {
		learnset: {
		},
	},
	poliwhirl: {
		learnset: {
		},
	},
	poliwrath: {
		learnset: {
		},
	},
	abra: {
		learnset: {
		},
	},
	kadabra: {
		learnset: {
		},
	},
	alakazam: {
		learnset: {
		},
	},
	machop: {
		learnset: {
		},
	},
	machoke: {
		learnset: {
		},
	},
	machamp: {
		learnset: {
		},
	},
	bellsprout: {
		learnset: {
		},
	},
	weepinbell: {
		learnset: {
		},
	},
	victreebel: {
		learnset: {
		},
	},
	tentacool: {
		learnset: {
		},
	},
	tentacruel: {
		learnset: {
		},
	},
	geodude: {
		learnset: {
		},
	},
	graveler: {
		learnset: {
		},
	},
	golem: {
		learnset: {
		},
	},
	ponyta: {
		learnset: {
		},
	},
	rapidash: {
		learnset: {
		},
	},
	slowpoke: {
		learnset: {
		},
	},
	slowbro: {
		learnset: {
		},
	},
	magnemite: {
		learnset: {
		},
	},
	magneton: {
		learnset: {
		},
	},
	farfetchd: {
		learnset: {
		},
	},
	doduo: {
		learnset: {
		},
	},
	dodrio: {
		learnset: {
		},
	},
	seel: {
		learnset: {
		},
	},
	dewgong: {
		learnset: {
		},
	},
	grimer: {
		learnset: {
		},
	},
	muk: {
		learnset: {
		},
	},
	shellder: {
		learnset: {
		},
	},
	cloyster: {
		learnset: {
		},
	},
	gastly: {
		learnset: {
		},
	},
	haunter: {
		learnset: {
		},
	},
	gengar: {
		learnset: {
		},
	},
	onix: {
		learnset: {
		},
	},
	drowzee: {
		learnset: {
		},
	},
	hypno: {
		learnset: {
		},
	},
	krabby: {
		learnset: {
		},
	},
	kingler: {
		learnset: {
		},
	},
	voltorb: {
		learnset: {
		},
	},
	electrode: {
		learnset: {
		},
	},
	exeggcute: {
		learnset: {
		},
	},
	exeggutor: {
		learnset: {
		},
	},
	cubone: {
		learnset: {
		},
	},
	marowak: {
		learnset: {
		},
	},
	hitmonlee: {
		learnset: {
		},
	},
	hitmonchan: {
		learnset: {
		},
	},
	lickitung: {
		learnset: {
		},
	},
	koffing: {
		learnset: {
		},
	},
	weezing: {
		learnset: {
		},
	},
	rhyhorn: {
		learnset: {
		},
	},
	rhydon: {
		learnset: {
		},
	},
	chansey: {
		learnset: {
		},
	},
	tangela: {
		learnset: {
		},
	},
	kangaskhan: {
		learnset: {
		},
	},
	horsea: {
		learnset: {
		},
	},
	seadra: {
		learnset: {
		},
	},
	goldeen: {
		learnset: {
		},
	},
	seaking: {
		learnset: {
		},
	},
	staryu: {
		learnset: {
		},
	},
	starmie: {
		learnset: {
		},
	},
	mrmime: {
		learnset: {
		},
	},
	scyther: {
		learnset: {
		},
	},
	jynx: {
		learnset: {
		},
	},
	electabuzz: {
		learnset: {
		},
	},
	magmar: {
		learnset: {
		},
	},
	pinsir: {
		learnset: {
		},
	},
	tauros: {
		learnset: {
		},
	},
	magikarp: {
		learnset: {
		},
	},
	gyarados: {
		learnset: {
		},
	},
	lapras: {
		learnset: {
		},
	},
	ditto: {
		learnset: {
		},
	},
	eevee: {
		learnset: {
		},
	},
	vaporeon: {
		learnset: {
		},
	},
	jolteon: {
		learnset: {
		},
	},
	flareon: {
		learnset: {
		},
	},
	porygon: {
		learnset: {
		},
	},
	omanyte: {
		learnset: {
		},
	},
	omastar: {
		learnset: {
		},
	},
	kabuto: {
		learnset: {
		},
	},
	kabutops: {
		learnset: {
		},
	},
	aerodactyl: {
		learnset: {
		},
	},
	snorlax: {
		learnset: {
		},
	},
	articuno: {
		learnset: {
		},
	},
	zapdos: {
		learnset: {
		},
	},
	moltres: {
		learnset: {
		},
	},
	dratini: {
		learnset: {
		},
	},
	dragonair: {
		learnset: {
		},
	},
	dragonite: {
		learnset: {
		},
	},
	mewtwo: {
		learnset: {
		},
	},
	mew: {
		learnset: {
		},
	},
}

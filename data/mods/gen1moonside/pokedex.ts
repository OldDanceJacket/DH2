export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	// / .o88b. db       .d8b.  .d8888. .d8888. d888888b  .o88b.   d8888b.  .d88b.  db   dD d88888b d8888b. d88888b db    db
	// /d8P  Y8 88      d8' `8b 88'  YP 88'  YP   `88'   d8P  Y8   88  `8D .8P  Y8. 88 ,8P' 88'     88  `8D 88'     `8b  d8'
	// /8P      88      88ooo88 `8bo.   `8bo.      88    8P        88oodD' 88    88 88,8P   88ooooo 88   88 88ooooo  `8bd8'
	// /8b      88      88~~~88   `Y8b.   `Y8b.    88    8b        88~~~   88    88 88`8b   88~~~~~ 88   88 88~~~~~  .dPYb.
	// /Y8b  d8 88booo. 88   88 db   8D db   8D   .88.   Y8b  d8   88      `8b  d8' 88 `88. 88.     88  .8D 88.     .8P  Y8.
	// / `Y88P' Y88888P YP   YP `8888Y' `8888Y' Y888888P  `Y88P'   88       `Y88P'  YP   YD Y88888P Y8888D' Y88888P YP    YP
	missingno: {
		inherit: true,
		baseStats: {hp: 33, atk: 136, def: 0, spa: 6, spd: 6, spe: 29},
	},
	bulbasaur: {
		inherit: true,
		types: ["Normal", "Psychic"],
		baseStats: {hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80},
	},
	ivysaur: {
		inherit: true,
		types: ["Normal", "Psychic"],
		baseStats: {hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60},
	},
	venusaur: {
		inherit: true,
		types: ["Normal", "Psychic"],
		baseStats: {hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45},
	},
	charmander: {
		inherit: true,
		baseStats: {hp: 39, atk: 52, def: 43, spa: 50, spd: 50, spe: 65},
	},
	charmeleon: {
		inherit: true,
		baseStats: {hp: 58, atk: 64, def: 58, spa: 65, spd: 65, spe: 80},
	},
	charizard: {
		inherit: true,
		types: ["Ghost"],
		baseStats: {hp: 78, atk: 88, def: 78, spa: 85, spd: 85, spe: 96},
	},
	squirtle: {
		inherit: true,
		baseStats: {hp: 44, atk: 48, def: 65, spa: 50, spd: 50, spe: 43},
	},
	wartortle: {
		inherit: true,
		types: ["Fighting", "Dragon"],
		baseStats: {hp: 59, atk: 63, def: 80, spa: 65, spd: 65, spe: 58},
	},
	blastoise: {
		inherit: true,
		baseStats: {hp: 79, atk: 83, def: 100, spa: 85, spd: 85, spe: 78},
		prevo: "Blastyke",
		evoLevel: 36,
	},
	caterpie: {
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 59, atk: 63, def: 80, spa: 65, spd: 65, spe: 58},
	},
	metapod: {
		inherit: true,
		types: ["Rock"],
		baseStats: {hp: 40, atk: 20, def: 255, spa: 15, spd: 15, spe: 25},
	},
	butterfree: {
		inherit: true,
		types: ["Rock", "Bug"],
		baseStats: {hp: 60, atk: 85, def: 75, spa: 60, spd: 60, spe: 80},
	},
	weedle: {
		inherit: true,
		baseStats: {hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50},
	},
	kakuna: {
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 25, atk: 5, def: 10, spa: 255, spd: 255, spe: 22},
	},
	beedrill: {
		inherit: true,
		types: ["Psychic", "Bug"],
		baseStats: {hp: 65, atk: 45, def: 40, spa: 85, spd: 85, spe: 75},
	},
	pidgey: {
		inherit: true,
		baseStats: {hp: 20, atk: 45, def: 40, spa: 25, spd: 25, spe: 85},
	},
	pidgeotto: {
		inherit: true,
		baseStats: {hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 91},
	},
	pidgeot: {
		inherit: true,
		baseStats: {hp: 83, atk: 80, def: 75, spa: 80, spd: 80, spe: 100},
	},
	rattata: {
		inherit: true,
		baseStats: {hp: 30, atk: 56, def: 35, spa: 25, spd: 25, spe: 72},
	},
	raticate: {
		inherit: true,
		baseStats: {hp: 55, atk: 81, def: 60, spa: 50, spd: 50, spe: 97},
	},
	spearow: {
		inherit: true,
		baseStats: {hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 86},
	},
	fearow: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 101},
	},
	ekans: {
		inherit: true,
		types: ["Poison", "Ground"],
		baseStats: {hp: 32, atk: 69, def: 44, spa: 44, spd: 44, spe: 69},
	},
	arbok: {
		inherit: true,
		types: ["Poison", "Ground"],
		baseStats: {hp: 69, atk: 100, def: 69, spa: 69, spd: 69, spe: 88},
	},
	pikachu: {
		inherit: true,
		baseStats: {hp: 160, atk: 110, def: 65, spa: 65, spd: 65, spe: 30},
	},
	raichu: {
		inherit: true,
		baseStats: {hp: 60, atk: 90, def: 55, spa: 90, spd: 90, spe: 100},
	},
	sandshrew: {
		inherit: true,
		baseStats: {hp: 50, atk: 75, def: 85, spa: 30, spd: 30, spe: 40},
	},
	sandslash: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 110, spa: 55, spd: 55, spe: 65},
	},
	nidoranf: {
		inherit: true,
		baseStats: {hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41},
	},
	nidorina: {
		inherit: true,
		baseStats: {hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56},
	},
	nidoqueen: {
		inherit: true,
		baseStats: {hp: 90, atk: 82, def: 87, spa: 75, spd: 75, spe: 76},
	},
	nidoranm: {
		inherit: true,
		baseStats: {hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50},
	},
	nidorino: {
		inherit: true,
		baseStats: {hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65},
	},
	nidoking: {
		inherit: true,
		baseStats: {hp: 81, atk: 92, def: 77, spa: 75, spd: 75, spe: 85},
	},
	clefairy: {
		inherit: true,
		baseStats: {hp: 72, atk: 65, def: 58, spa: 60, spd: 60, spe: 55},
	},
	clefable: {
		inherit: true,
		baseStats: {hp: 92, atk: 77, def: 73, spa: 90, spd: 90, spe: 73},
	},
	vulpix: {
		inherit: true,
		baseStats: {hp: 38, atk: 41, def: 40, spa: 65, spd: 65, spe: 65},
	},
	ninetales: {
		inherit: true,
		baseStats: {hp: 73, atk: 76, def: 75, spa: 100, spd: 100, spe: 100},
	},
	jigglypuff: {
		inherit: true,
		baseStats: {hp: 115, atk: 45, def: 20, spa: 25, spd: 25, spe: 20},
	},
	wigglytuff: {
		inherit: true,
		baseStats: {hp: 140, atk: 70, def: 45, spa: 50, spd: 50, spe: 45},
	},
	zubat: {
		inherit: true,
		baseStats: {hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 55},
	},
	golbat: {
		inherit: true,
		baseStats: {hp: 95, atk: 80, def: 65, spa: 75, spd: 75, spe: 90},
	},
	oddish: {
		inherit: true,
		baseStats: {hp: 45, atk: 50, def: 55, spa: 75, spd: 75, spe: 30},
	},
	gloom: {
		inherit: true,
		baseStats: {hp: 60, atk: 65, def: 70, spa: 85, spd: 85, spe: 40},
	},
	vileplume: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 85, spa: 100, spd: 100, spe: 50},
	},
	paras: {
		inherit: true,
		baseStats: {hp: 35, atk: 70, def: 55, spa: 55, spd: 55, spe: 25},
	},
	parasect: {
		inherit: true,
		baseStats: {hp: 60, atk: 95, def: 80, spa: 80, spd: 80, spe: 30},
	},
	venonat: {
		inherit: true,
		baseStats: {hp: 60, atk: 55, def: 50, spa: 40, spd: 40, spe: 45},
	},
	venomoth: {
		inherit: true,
		baseStats: {hp: 70, atk: 65, def: 60, spa: 90, spd: 90, spe: 90},
	},
	diglett: {
		inherit: true,
		baseStats: {hp: 10, atk: 45, def: 25, spa: 65, spd: 65, spe: 85},
	},
	dugtrio: {
		inherit: true,
		baseStats: {hp: 45, atk: 50, def: 150, spa: 80, spd: 80, spe: 60},
	},
	meowth: {
		inherit: true,
		baseStats: {hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90},
	},
	persian: {
		inherit: true,
		baseStats: {hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115},
	},
	psyduck: {
		inherit: true,
		types: ["Water", "Grass"],
		baseStats: {hp: 50, atk: 12, def: 58, spa: 40, spd: 40, spe: 75},
	},
	golduck: {
		inherit: true,
		types: ["Water", "Grass"],
		baseStats: {hp: 60, atk: 112, def: 88, spa: 60, spd: 60, spe: 25},
	},
	mankey: {
		inherit: true,
		baseStats: {hp: 40, atk: 80, def: 35, spa: 35, spd: 35, spe: 70},
	},
	primeape: {
		inherit: true,
		baseStats: {hp: 65, atk: 105, def: 60, spa: 60, spd: 60, spe: 95},
	},
	growlithe: {
		inherit: true,
		baseStats: {hp: 55, atk: 70, def: 45, spa: 50, spd: 50, spe: 60},
	},
	arcanine: {
		inherit: true,
		baseStats: {hp: 90, atk: 110, def: 80, spa: 80, spd: 80, spe: 95},
	},
	poliwag: {
		inherit: true,
		baseStats: {hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90},
	},
	poliwhirl: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90},
	},
	poliwrath: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 95, spa: 70, spd: 70, spe: 70},
	},
	abra: {
		inherit: true,
		baseStats: {hp: 25, atk: 20, def: 15, spa: 105, spd: 105, spe: 90},
	},
	kadabra: {
		inherit: true,
		baseStats: {hp: 40, atk: 35, def: 30, spa: 120, spd: 120, spe: 105},
	},
	alakazam: {
		inherit: true,
		baseStats: {hp: 55, atk: 50, def: 45, spa: 135, spd: 135, spe: 120},
	},
	machop: {
		inherit: true,
		types: ["Bug"],
		baseStats: {hp: 70, atk: 20, def: 40, spa: 65, spd: 65, spe: 40},
	},
	machoke: {
		inherit: true,
		types: ["Bug"],
		baseStats: {hp: 80, atk: 25, def: 70, spa: 80, spd: 80, spe: 30},
	},
	machamp: {
		inherit: true,
		types: ["Bug"],
		baseStats: {hp: 90, atk: 80, def: 80, spa: 105, spd: 105, spe: 20},
	},
	bellsprout: {
		inherit: true,
		baseStats: {hp: 50, atk: 75, def: 35, spa: 70, spd: 70, spe: 40},
	},
	weepinbell: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 50, spa: 85, spd: 85, spe: 55},
	},
	victreebel: {
		inherit: true,
		baseStats: {hp: 80, atk: 105, def: 65, spa: 100, spd: 100, spe: 70},
	},
	tentacool: {
		inherit: true,
		baseStats: {hp: 40, atk: 40, def: 35, spa: 100, spd: 100, spe: 70},
	},
	tentacruel: {
		inherit: true,
		baseStats: {hp: 80, atk: 70, def: 65, spa: 120, spd: 120, spe: 100},
	},
	geodude: {
		inherit: true,
		baseStats: {hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20},
	},
	graveler: {
		inherit: true,
		baseStats: {hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35},
	},
	golem: {
		inherit: true,
		baseStats: {hp: 80, atk: 110, def: 130, spa: 55, spd: 55, spe: 45},
	},
	ponyta: {
		inherit: true,
		baseStats: {hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90},
	},
	rapidash: {
		inherit: true,
		baseStats: {hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105},
	},
	slowpoke: {
		inherit: true,
		baseStats: {hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15},
	},
	slowbro: {
		inherit: true,
		baseStats: {hp: 95, atk: 75, def: 110, spa: 80, spd: 80, spe: 30},
	},
	magnemite: {
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 25, atk: 35, def: 70, spa: 95, spd: 95, spe: 45},
	},
	magneton: {
		inherit: true,
		types: ["Electric"],
		baseStats: {hp: 50, atk: 60, def: 95, spa: 120, spd: 120, spe: 70},
	},
	farfetchd: {
		inherit: true,
		types: ["???"],
		baseStats: {hp: 62, atk: 75, def: 55, spa: 75, spd: 75, spe: 90},
	},
	doduo: {
		inherit: true,
		baseStats: {hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75},
	},
	dodrio: {
		inherit: true,
		baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 100},
	},
	seel: {
		inherit: true,
		baseStats: {hp: 65, atk: 45, def: 55, spa: 70, spd: 70, spe: 45},
	},
	dewgong: {
		inherit: true,
		baseStats: {hp: 90, atk: 70, def: 80, spa: 95, spd: 95, spe: 70},
	},
	grimer: {
		inherit: true,
		baseStats: {hp: 64, atk: 40, def: 50, spa: 60, spd: 60, spe: 55},
	},
	muk: {
		inherit: true,
		baseStats: {hp: 105, atk: 65, def: 75, spa: 89, spd: 89, spe: 70},
	},
	shellder: {
		inherit: true,
		baseStats: {hp: 30, atk: 65, def: 100, spa: 45, spd: 45, spe: 40},
	},
	cloyster: {
		inherit: true,
		baseStats: {hp: 50, atk: 95, def: 180, spa: 85, spd: 85, spe: 70},
	},
	gastly: {
		inherit: true,
		baseStats: {hp: 30, atk: 35, def: 30, spa: 100, spd: 100, spe: 80},
	},
	haunter: {
		inherit: true,
		types: ["Fighting"],
		baseStats: {hp: 45, atk: 92, def: 45, spa: 65, spd: 65, spe: 95},
	},
	gengar: {
		inherit: true,
		baseStats: {hp: 60, atk: 65, def: 60, spa: 130, spd: 130, spe: 110},
	},
	onix: {
		inherit: true,
		baseStats: {hp: 35, atk: 45, def: 160, spa: 30, spd: 30, spe: 70},
	},
	drowzee: {
		inherit: true,
		baseStats: {hp: 60, atk: 48, def: 45, spa: 90, spd: 90, spe: 42},
	},
	hypno: {
		inherit: true,
		baseStats: {hp: 85, atk: 73, def: 70, spa: 115, spd: 115, spe: 67},
	},
	krabby: {
		inherit: true,
		baseStats: {hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50},
	},
	kingler: {
		inherit: true,
		baseStats: {hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75},
	},
	voltorb: {
		inherit: true,
		baseStats: {hp: 45, atk: 30, def: 50, spa: 55, spd: 55, spe: 120},
	},
	electrode: {
		inherit: true,
		baseStats: {hp: 70, atk: 50, def: 70, spa: 80, spd: 80, spe: 175},
	},
	exeggcute: {
		inherit: true,
		baseStats: {hp: 60, atk: 40, def: 80, spa: 60, spd: 60, spe: 40},
	},
	exeggutor: {
		inherit: true,
		baseStats: {hp: 95, atk: 95, def: 85, spa: 125, spd: 125, spe: 55},
	},
	cubone: {
		inherit: true,
		baseStats: {hp: 50, atk: 50, def: 95, spa: 40, spd: 40, spe: 35},
	},
	marowak: {
		inherit: true,
		baseStats: {hp: 60, atk: 80, def: 110, spa: 50, spd: 50, spe: 45},
	},
	hitmonlee: {
		inherit: true,
		types: ["Rock"],
		baseStats: {hp: 45, atk: 150, def: 53, spa: 27, spd: 27, spe: 99},
	},
	hitmonchan: {
		inherit: true,
		types: ["Fighting", "Poison"],
		baseStats: {hp: 120, atk: 82, def: 59, spa: 45, spd: 45, spe: 13},
	},
	lickitung: {
		inherit: true,
		baseStats: {hp: 90, atk: 55, def: 75, spa: 60, spd: 60, spe: 30},
	},
	koffing: {
		inherit: true,
		types: ["Fire", "Flying"],
		baseStats: {hp: 45, atk: 65, def: 95, spa: 60, spd: 60, spe: 35},
	},
	weezing: {
		inherit: true,
		types: ["Fire", "Flying"],
		baseStats: {hp: 85, atk: 90, def: 120, spa: 85, spd: 85, spe: 55},
	},
	rhyhorn: {
		inherit: true,
		baseStats: {hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25},
	},
	rhydon: {
		inherit: true,
		baseStats: {hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40},
	},
	chansey: {
		inherit: true,
		types: ["Ice"],
		baseStats: {hp: 230, atk: 15, def: 10, spa: 95, spd: 95, spe: 50},
	},
	tangela: {
		inherit: true,
		baseStats: {hp: 65, atk: 55, def: 115, spa: 100, spd: 100, spe: 60},
	},
	kangaskhan: {
		inherit: true,
		baseStats: {hp: 105, atk: 95, def: 80, spa: 40, spd: 40, spe: 90},
	},
	horsea: {
		inherit: true,
		types: ["Water", "Fire"],
		baseStats: {hp: 32, atk: 60, def: 70, spa: 70, spd: 70, spe: 60},
	},
	seadra: {
		inherit: true,
		types: ["Water", "Fire"],
		baseStats: {hp: 67, atk: 75, def: 95, spa: 95, spd: 95, spe: 65},
	},
	goldeen: {
		inherit: true,
		baseStats: {hp: 45, atk: 68, def: 60, spa: 50, spd: 50, spe: 62},
	},
	seaking: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 75, spa: 78, spd: 78, spe: 72},
	},
	staryu: {
		inherit: true,
		baseStats: {hp: 30, atk: 45, def: 55, spa: 70, spd: 70, spe: 85},
	},
	starmie: {
		inherit: true,
		types: ["water", "psychic", "normal", "electric", "grass", "bug", "rock", "ice", "fire", "fighting" ],
		baseStats: {hp: 65, atk: 75, def: 85, spa: 80, spd: 80, spe: 105},
	},
	mrmime: {
		inherit: true,
		baseStats: {hp: 40, atk: 45, def: 65, spa: 100, spd: 100, spe: 90},
	},
	scyther: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 80, spa: 55, spd: 55, spe: 105},
	},
	jynx: {
		inherit: true,
		types: ["???"],
		baseStats: {hp: 65, atk: 50, def: 35, spa: 95, spd: 95, spe: 95},
	},
	electabuzz: {
		inherit: true,
		baseStats: {hp: 65, atk: 83, def: 57, spa: 85, spd: 85, spe: 105},
	},
	magmar: {
		inherit: true,
		baseStats: {hp: 65, atk: 95, def: 57, spa: 85, spd: 85, spe: 93},
	},
	pinsir: {
		inherit: true,
		baseStats: {hp: 65, atk: 125, def: 100, spa: 55, spd: 55, spe: 85},
	},
	tauros: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 95, spa: 70, spd: 70, spe: 110},
	},
	magikarp: {
		inherit: true,
		baseStats: {hp: 35, atk: 35, def: 55, spa: 30, spd: 30, spe: 80},
	},
	gyarados: {
		inherit: true,
		types: ["Water", "Ground"],
		baseStats: {hp: 95, atk: 125, def: 79, spa: 100, spd: 100, spe: 81},
	},
	lapras: {
		inherit: true,
		baseStats: {hp: 130, atk: 85, def: 80, spa: 95, spd: 95, spe: 60},
	},
	ditto: {
		inherit: true,
		baseStats: {hp: 82, atk: 67, def: 53, spa: 80, spd: 80, spe: 63},
	},
	eevee: {
		inherit: true,
		baseStats: {hp: 55, atk: 55, def: 50, spa: 65, spd: 65, spe: 55},
	},
	vaporeon: {
		inherit: true,
		baseStats: {hp: 130, atk: 65, def: 60, spa: 110, spd: 110, spe: 65},
	},
	jolteon: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 60, spa: 110, spd: 110, spe: 130},
	},
	flareon: {
		inherit: true,
		baseStats: {hp: 65, atk: 130, def: 60, spa: 110, spd: 110, spe: 65},
	},
	porygon: {
		inherit: true,
		baseStats: {hp: 65, atk: 60, def: 70, spa: 75, spd: 75, spe: 40},
	},
	omanyte: {
		inherit: true,
		baseStats: {hp: 35, atk: 40, def: 100, spa: 90, spd: 90, spe: 35},
	},
	omastar: {
		inherit: true,
		baseStats: {hp: 70, atk: 60, def: 125, spa: 115, spd: 115, spe: 55},
	},
	kabuto: {
		inherit: true,
		baseStats: {hp: 30, atk: 80, def: 90, spa: 45, spd: 45, spe: 55},
	},
	kabutops: {
		inherit: true,
		baseStats: {hp: 60, atk: 115, def: 105, spa: 70, spd: 70, spe: 80},
	},
	aerodactyl: {
		inherit: true,
		baseStats: {hp: 80, atk: 105, def: 65, spa: 60, spd: 60, spe: 130},
	},
	snorlax: {
		inherit: true,
		types: ["???"],
		baseStats: {hp: 80, atk: 75, def: 75, spa: 75, spd: 75, spe: 70},
	},
	articuno: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 100, spa: 125, spd: 125, spe: 85},
	},
	zapdos: {
		inherit: true,
		baseStats: {hp: 90, atk: 90, def: 85, spa: 125, spd: 125, spe: 100},
	},
	moltres: {
		inherit: true,
		baseStats: {hp: 90, atk: 100, def: 90, spa: 125, spd: 125, spe: 90},
	},
	dratini: {
		inherit: true,
		baseStats: {hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50},
	},
	dragonair: {
		inherit: true,
		baseStats: {hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70},
	},
	dragonite: {
		inherit: true,
		baseStats: {hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80},
	},
	mewtwo: {
		inherit: true,
		types: ["Bug", "Fire"],
		baseStats: {hp: 106, atk: 110, def: 90, spa: 154, spd: 154, spe: 130},
	},
	mew: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
	},
}

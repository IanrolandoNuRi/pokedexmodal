function PokemonSearch() {

	const input =  document.querySelector('#search');
	const check = document.getElementById("check").checked;

	if(ContainerCards.innerHTML === ""){
		LoadPokemonCards();
	}else if(( check == true ) && ( input.value != "" ) && ( ContainerCards.innerHTML !== "")){
		document.addEventListener('keyup', Filter());
	}else if(( check == true ) && ( input.value == "" ) && ( ContainerCards.innerHTML !== "")){
		ShowPokemonCards();
	}
}


function PokemonSearchBut() {

	const input =  document.querySelector('#search');
	const ContainerCards = document.querySelector('#ContainerCards');
	if( input.value == "" ){
		ShowPokemonCards();
	}else{
		document.getElementById("button").addEventListener('click', Filter());
	}

}


function LoadPokemonCards (){
    ContainerCards.innerHTML = '<p id="pokemonNotFound" display:none>Pokemon no encontrado</p></br>';

    for (let pokemon of kantoArray) {
        let nombre = pokemon['pokemon_species']['name'].toLowerCase();
        ContainerCards.innerHTML += `
				<div id="PokemonCard_${pokemon['entry_number']}" class="PokemonCard">
					<a href="/pokemon/${pokemon['entry_number']}/${pokemon['pokemon_species']['name']}">
					${imageName(pokemon['entry_number'])}
					<a>${pokemon['pokemon_species']['name']}</a>
					</a>
				</div>
			`
    }
    var pokemonNotFound = document.getElementById( "pokemonNotFound" );
	pokemonNotFound.style.display = "none";
}


function Filter (){

    const text = search.value.toLowerCase();
    var pokemonFound = false;

    for (let pokemon of kantoArray) {

        let nombre = pokemon['pokemon_species']['name'].toLowerCase();
        var pokemonCard = document.getElementById("PokemonCard_"+pokemon['entry_number']);

        if (nombre.startsWith(text) != false) {
			pokemonCard.style.display = "block";
			pokemonFound = true;
        }else{
        	pokemonCard.style.display = "none";
        }
    }
	PokemonNotFound(pokemonFound);
}


function PokemonNotFound(pokemonFound){
	if(!pokemonFound){
		var elementPokemonFound = document.getElementById("pokemonNotFound");
		elementPokemonFound.style.display = "block";
    }else{
    	var elementPokemonFound = document.getElementById("pokemonNotFound");
		elementPokemonFound.style.display = "none";
    }
}


function ShowPokemonCards (){

	for (let pokemon of kantoArray) {
		
        let nombre = pokemon['pokemon_species']['name'].toLowerCase();
        var pokemonCard = document.getElementById("PokemonCard_" + pokemon['entry_number']);
		pokemonCard.style.display = "block";

    }
}


function imageName(ima){
	var returnImage;
	if(ima < 10){
		returnImage = "<img src=\"img/pokemons/00" + ima + ".png\">";
	}
	else if(ima <100){
		returnImage = "<img src=\"img/pokemons/0" + ima + ".png\">";
	}
	else{
		returnImage = "<img src=\"img/pokemons/" + ima + ".png\">";
	}
	return returnImage;
}


function showModalPokemon(){
	var descriptionPokemon = $descriptionPokemon;
	var idpokemon = $idPokemon;
	var pokemonName = $pokemonName;
	var pokemonAbilities =$pokemonAbilities;
	var imgpokemon = imageName(idpokemon);
	PokemonImage.innerHTML = imgpokemon;
	PokemonDescription.innerHTML = descriptionPokemon;
	PokemonAbilities.innerHTML =  pokemonAbilities; 
}

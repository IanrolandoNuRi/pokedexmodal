//##Revisar codigo hay funciones que pulir, hay que corregir el pokemon no encontrado y despues pasar al css para editar las cartas de los pokemones mostrados
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
	var pokeElements="";

    for (let pokemon of kantoArray) {
        let nombre = pokemon['pokemon_species']['name'].toLowerCase();
        pokeElements += `
        		<div id="PokemonCard_${pokemon['entry_number']}" class="PokemonCard" onclick="ShowPokeModal('${pokemon['entry_number']}','${pokemon['pokemon_species']['name']}')">				
						${imageName(pokemon['entry_number'])}
						<a>${pokemon['pokemon_species']['name']}</a>
				</div>`;
    }
    pokeElements += `<p id="pokemonNotFound" display:none>Pokemon no encontrado</p>`;
    ContainerCards.innerHTML = pokeElements;
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
	var elementPokemonFound = document.getElementById("pokemonNotFound");
	elementPokemonFound.style.display = "none";

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


function ShowPokeModal(idPokemon, pokemonName){
	document.getElementById("PokeImage").innerHTML = imageName(idPokemon);
	document.getElementById("PokeName").innerHTML = pokemonName.toUpperCase();
	fetch('/pokedex/' + idPokemon).then(function(response) {
  		return response.json();
	}).then(function(data) {
		document.getElementById("PokeDescription").innerHTML = data.descriptionPokemon;
		document.getElementById("PokeAbilities").innerHTML = PokemonAbilities(data.pokemonAbilities);
  		$("#pokeModal").modal('show');
	});
	
}

function PokemonAbilities(abilities){
	var contentAbilites = "</br>";
	for(let abilitie of abilities){
		if(abilitie != ""){
			contentAbilites += `
				<p>
					Habliidad:</br>
					${abilitie}
				</p>
			`;
		}
	}
	return contentAbilites;
}
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class pokedexController extends Controller
{
    public function index(){
        $pokemones = Http::get('https://pokeapi.co/api/v2/pokedex/');
        $pokemonesArray = $pokemones->json();
        
        foreach($pokemonesArray['results'] as $pokemones){
            if($pokemones['name']=="kanto")
                $urlkanto=$pokemones['url'];
        }

        $kanto = Http::get($urlkanto);
        $kantoArray = $kanto->json();
        $kantoentries = $kantoArray['pokemon_entries'];

        return view('pokedex', compact('kantoentries'));
    }


    public function pokemonDetaill($idPokemon){
        $pokemon = Http::get('https://pokeapi.co/api/v2/pokemon-species/' . intval($idPokemon));
        $pokemonSpeciesArray = $pokemon->json();
        $pokemon = Http::get('https://pokeapi.co/api/v2/pokemon/' . intval($idPokemon));
        $pokemonAbilitiesArray = $pokemon->json();
        $descriptionPokemon= "";
        $pokemonAbilities[] = "";

        foreach($pokemonSpeciesArray['flavor_text_entries'] as $pokemones){
            if($pokemones['language']['name']=="es"){
                $descriptionPokemon= $descriptionPokemon . $pokemones['flavor_text'];
            }
        }

        foreach($pokemonAbilitiesArray['abilities'] as $abilities){
            array_push($pokemonAbilities, $abilities['ability']['name']);
        }

        return compact('descriptionPokemon', 'pokemonAbilities');
    }
}

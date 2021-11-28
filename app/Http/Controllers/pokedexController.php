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
}

<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\pokedexController;


Route::get('/',[pokedexController::class, 'index'])->name('pokedex.index');

Route::get('/pokedex',[pokedexController::class, 'index'])->name('pokedex.index');

Route::get('/pokedex/{idPokemon}',[pokedexController::class,  'pokemonDetaill'])->name('pokedex.index');
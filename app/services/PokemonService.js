import { AppState } from "../AppState.js";
import { Pokemon } from "../models/pokemon.js";
import { setHTML } from "../utils/Writer.js";
import { pokeApi } from "./AxiosService.js";



class PokemonService {

    async getPokemon() {
        const res = await pokeApi.get('/api/v2/pokemon')
        AppState.pokemon = res.data.results.map(p => new Pokemon(p))
        console.log(res.data.results);
    }
    async setActivePokemon(pokeId) {
        const res = await pokeApi.get('/api/v2/pokemon')


        AppState.pokemon.filter(p => p.id == pokeId)

        setHTML('activePokemon', pokeId.ActivePokemonCardTemplate)
        console.log('setting active', pokeId)


    }



}

export const pokemonService = new PokemonService()
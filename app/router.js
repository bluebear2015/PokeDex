import { pokemonController } from "./controllers/PokemonController.js";


export const router = [
  {
    path: '',
    controller: pokemonController

  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */
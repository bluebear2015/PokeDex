import { AppState } from "../AppState.js";
import { generateId } from "../utils/generateId.js";

export class Pokemon {
    constructor(data) {
        this.id = data.id || generateId
        this.name = data.name
        this.image = data.sprites
        this.species = data.species || ''
        this.url = data.url || ''
        this.abilities = data.abilities || ''
        this.types = data.types || ''
        this.creatorId = data.creatorId
        this.creator = data.creator || ''
        this.weight = data.weight
    }


    get PokemonCard() {
        return `

    
    <li class="fs-3 selectable" role = "button" onclick="app.pokemonController.setActivePokemon('${this.name}')">
      ${this.name}
    </li>
    `
    }
    get ActivePokemonCardTemplate() {
        return /*html*/ `

<div class="card-body">
<p class="fs-2">${this.name}</p>

<p >${this.image}</p>
<p>
${this.abilities}
${this.weight}
${this.types}
${this.creator}
</p>
<div class="d-flex flex-row">
<button onclick="app.UserController.addPokemon()" class"bg-danger text-primary">Save Pokemon</button>
</div>
</div>
`

    }
}



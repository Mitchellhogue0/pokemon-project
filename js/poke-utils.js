function getPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            addPokemon(data);
        })
        .catch(err => {
            console.log("There's been an error: ", err);
        })
}

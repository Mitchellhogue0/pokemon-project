function addPokemon(data) {
    $("#catch-btn").click(function () {
        console.log("click!")
       getPokemon((Math.floor(Math.random() * 10) + 1))

    });
}
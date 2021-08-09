

    $("#catch-btn").click(function () {
        console.log("click!")
        getPokemon(Math.floor(Math.random() * 100) + 1)
        let poke = new Audio('../img/pokeball_sound_effects_mp3cut_1.mp3')
        poke.play();
        poke.volume = 0.3;
    });

function addPokemon (data) {
    $("#poke-container").append(`
    <div class="pokemane">
    <h3>${data.name} <br></h3>
    <img src="${data.sprites.front_default}" alt=""> <br>
    Type: ${data.types[0].type.name} <br>
    Top moves: <br> ${data.moves[0].move.name} <br>
    ${data.moves[1].move.name} <br>
    ${data.moves[2].move.name} <br><br>
</div>
`)
}
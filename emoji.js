const changeFace = document.querySelector('#face');
const button = document.getElementById('button')
const emojis = ['😊','😂','🤣','😍','😁',
'🥰','🤩','😅','😉','🙄',
'😳','🙃','😔','🤗'];

button.addEventListener("click", () => {
    let round = Math.floor(Math.random()*emojis.length);
    let result = emojis[round];
    changeFace.textContent = result;

});

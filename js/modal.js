const playBtn = document.getElementById('playButton');
const modal = document.getElementById('myModal');
const exit = document.getElementById('closeModal');

playBtn.addEventListener('click', e => {
    modal.style.display = "block";
});

exit.addEventListener('click', e =>{
    modal.style.display = "none";
});

window.addEventListener('click', e => {
    if(e.target === modal) {
        modal.style.display = "none";
    }
});


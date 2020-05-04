window.addEventListener('keydown', playing);

function playing(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('pressed');

}
function removeClass(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('pressed');
}

const keys = document.querySelectorAll('.box');
keys.forEach(key => key.addEventListener('transitionend', removeClass));
document.addEventListener('DOMContentLoaded', () => {
    const section1 = document.getElementById('section1');
    const imgSlide = document.getElementById('imgSlide');
    let posX = 0;

    window.addEventListener('scroll', e => {
        imgSlide.style.backgroundPositionX = `-${window.pageYOffset*0.4}px`;
        console.log("posX: " + window.pageYOffset);
    });
});
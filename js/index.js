document.addEventListener('DOMContentLoaded', () => {
    const section1 = document.getElementById('section1');
    const imgSlide = document.getElementById('imgSlide');
    const imgSlide2 = document.getElementById('imgSlide2');
    

    window.addEventListener('scroll', e => {
        imgSlide.style.backgroundPositionX = `-${window.pageYOffset*0.1}px`;
        
        if(window.pageYOffset > 2000) {
            //console.log(imgSlide2.style.backgroundPositionX);
            imgSlide2.style.backgroundPositionX = `${(window.pageYOffset*0.1)-700}px`;
        }
        
    });
});
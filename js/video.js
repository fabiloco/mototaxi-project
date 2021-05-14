// let options = {
//     root: null,
//     rootMargin:'0px',
//     threshold:1.0
// }

// let callback = (entries, observer) => {
//     console.log('entreee')
//     entries.forEach(entry => {
//         if(entry.target == 'myVideo') {
//             if(entry.isIntersecting) {
//                 entry.target.play();
//             }else{
//                 entry.target.pause();
//             }
//         }
//     });
// }

// let observer = new IntersectionObserver(callback, options);
// observer.observe(document.querySelector('#myVideo'));

const video = document.getElementById('myVideo');



function checkScroll() {
    var fraction = 0.8; // Play when 80% of the player is visible.

    var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
        b = y + h, //bottom
        visibleX, visibleY, visible;

        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

        visible = visibleX * visibleY / (w * h);

        if (visible > fraction) {
            video.play();
        } else {
            video.pause();
        }
    
}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

document.addEventListener('DOMContentLoaded', () => {
    video.play();      
});
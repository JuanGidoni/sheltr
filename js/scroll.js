// This document was build by Juan Ignacio Gidoni researching and develop with knowledge of the internet :)

const scrollImages = {
    1:'./imgs/scroll/scroll-1.png',
    2:'./imgs/scroll/scroll-2.png',
    3:'./imgs/scroll/scroll-3.png',
    4:'./imgs/scroll/scroll-4.png',
    5:'./imgs/scroll/scroll-5.png',
    6:'./imgs/scroll/scroll-6.png',
    7:'./imgs/scroll/scroll-7.png',
    8:'./imgs/scroll/scroll-8.png',
    9:'./imgs/scroll/scroll-9.png',
    10:'./imgs/scroll/scroll-10.png',
    11:'./imgs/scroll/scroll-11.png',
    12:'./imgs/scroll/scroll-12.png',
    13:'./imgs/scroll/scroll-13.png',
    14:'./imgs/scroll/scroll-14.png',
    15:'./imgs/scroll/scroll-15.png',
    16:'./imgs/scroll/scroll-16.png'
  };
const step = 30;
function trackScrollPosition() {
const y = window.scrollY;
const label = Math.min(Math.floor(y/230) + 1, 40);
const imageToUse = scrollImages[label];
$('.image-container').delay(100).css('background-image', `url('${imageToUse}')`);

}
$(document).ready(()=>{
$(window).scroll(()=>{
trackScrollPosition();
})
});

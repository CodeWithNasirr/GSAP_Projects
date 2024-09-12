// var timeout;
// function curserchapta() {
//     var xscale = 1
//     var yscale = 1

//     var xprev = 0
//     var yprev = 0
//     window.addEventListener('mousemove', function (dets) {
//         clearTimeout(timeout);
//         var xdiff = dets.clientX - xprev
//         var ydiff = dets.clientY - yprev

//         xscale = gsap.utils.clamp(0.8, 1.2, xdiff)
//         yscale = gsap.utils.clamp(0.8, 1.2, ydiff)

//         xprev = dets.clientX
//         yprev = dets.clientY
        
//         cursermovement(dets.clientX,dets.clientY,xscale,yscale)

//         timeout = setTimeout(function(){
//             var elements = document.getElementsByClassName('curser')[0];
//         elements.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`

//         },100)
//     })

// }

// function cursermovement(x,y,xscale,yscale) {
//     var elements = document.getElementsByClassName('curser')[0];
//         elements.style.transform = `translate(${x}px,${y}px) scale(${xscale},${yscale})`
// }

// curserchapta();


var main=document.querySelector(".main")
var curser=document.querySelector(".curser")

main.addEventListener("mousemove",function(dets){
    gsap.to(curser,{
        x:dets.x,
        y:dets.y,
        duration:0.2,
        ease:"power2"
    })

})
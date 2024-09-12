// gsap.to(".box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     // scale:0.1
//     // borderRadius:150
//     // rotate:"360"
    
// })

// gsap.from(".box h1",{
//     y:-10,
//     opacity:0,
//     duration:0.9,
//     delay:1,
//     stagger:0.5,
 

// })

let tl =gsap.timeline()

// tl.to(".box",{
//     x:1000, 
//     duration:2,
//     delay:1,
    
// }) 
// tl.to(".box2",{
//     x:1000,
//     duration:2,
//     delay:1,

// })

tl.from(".box h1",{
    y:-10,
    opacity:0,
    duration:0.5,
    delay:0.5
    // stagger:1,
 

})

tl.from(".center h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})
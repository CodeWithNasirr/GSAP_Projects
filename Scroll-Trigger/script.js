// gsap.from('.page1 .box',{
//     y:20,
//     scale:0,
//     duration:0.5,
//     delay:1 
// })

// gsap.from('.page1 .box',{
//     y:20,
//     scale:0,
//     duration:0.5,
//     delay:1,
//     scrollTrigger:{
//         trigger:".page2 .box",
//         scroller:"body",
//         markers:true,
//         // start:"top 60%",
//         scrub:2 // 
        
//     }
// })

// Pin property

gsap.to(".page2 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end :"end -200%",
        scrub:3,// it means scroll move smoothly
        pin:true // it means page stop when the scroll trigger doing his work 

    }
})
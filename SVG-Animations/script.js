var path=`M 10 150 Q 681 150 1350 150`
var finalpath=`M 10 150 Q 681 150 1350 150`

var string=document.querySelector('.string')

string.addEventListener('mousemove',function(dets){
    path=`M 10 150 Q ${dets.x} ${dets.y} 1350 150`

    gsap.to('svg path',{
        attr:{d: path},
        duration:0.2,
        ease:"power3.out"
    })


})
string.addEventListener('mouseleave',function(dets){
    gsap.to('svg path',{
        attr:{d:finalpath},
        duration:0.8,
        ease:"elastic.out(1,0.2)"

    })

})
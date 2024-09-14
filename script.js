function cursorFollower(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor", {
            x: dets.clientX,
            y: dets.clientY,
            duration: .4,
            ease: "sine"
        })
    })
}

function magnetEffect(elem) {
    const button = document.querySelector(elem);
    const dims = button.getBoundingClientRect();

    const x1 = dims.x;
    const y1 = dims.y;

    const x2 = x1 + dims.width;
    const y2 = y1 + dims.height;

    button.addEventListener("mousemove", function (dets) {
        let alphaX = gsap.utils.mapRange(x1, x2, 0, 1, dets.clientX); // Intepolation Factor
        let alphaY = gsap.utils.mapRange(y1, y2, 0, 1, dets.clientY); // Intepolation Factor
        
        let moveX = gsap.utils.interpolate(-3.6, 3.6, alphaX);
        let moveY = gsap.utils.interpolate(-2.7, 2.7, alphaY);

        gsap.to(elem, {
            x: moveX + "vw",
            y: moveY + "vw",
            duration: 0.4,
        });

        gsap.to("#cursor", {
            scale: 7,
        })
    });

    button.addEventListener("mouseleave", function () {
        gsap.to(elem, {
            x: 0,
            y: 0,
        });

        gsap.to("#cursor", {
            scale: 1,
        })
    });
}

cursorFollower()
magnetEffect("#button")
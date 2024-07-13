gsap.to("#page2 h1", {
    transform: "TranslateX(-180%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: false,
        start: "top -5",
        end: "top -30%",
        scrub: 2,
        pin: true
    }
})
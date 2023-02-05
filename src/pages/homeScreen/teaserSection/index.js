import React, { useEffect } from "react";
import gsap, { Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

export default function Teaser() {

  useEffect(() => {
    const tl = gsap.timeline({})
    tl.fromTo('.teaser-section', { opacity: 0 }, { opacity: 1, duration: .5 })
      .fromTo('.logo-wrapper', { opacity: 0, scale: 3 }, { opacity: 1, scale: 1, duration: 1, delay: .3, ease:Power3.easeInOut })


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.teaser-section',
        start: 'top top',
        end: 'bottom top',
        markers: true,
        snap: {
          snapTo: 100,
          duration: 1
        },
        scrub:.2,
      }
    })
  
    tl2.fromTo('.logo-wrapper',
      { xPercent: 0 },
      { xPercent:0 })
      .to(".teaser-section", { yPercent: -100,duration:1.2 })

  }, [])


  return (
    <section className="h-screen">
      <div className="h-screen teaser-section bg-blue grid place-content-center">
        <div className={`logo-wrapper max-w-xs m-auto`} alt="logo">
          <svg className="w-full fill-primary" viewBox="0 0 787 811" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0L258.898 90L538 599L436.925 811L0.5 0Z" fill="#e6e7ee" />
            <path d="M563 546L459.51 359.605L585.717 90.6327H787L563 546Z" fill="#e6e7ee" />
          </svg>
        </div>
      </div>
    </section>
  );
}

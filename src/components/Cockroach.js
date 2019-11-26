import React, { useEffect } from 'react'
import styled from 'styled-components'
import CockroachImage from '../images/bug.gif'
import gsap from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

const Wrapper = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;
const SVGPath = styled.svg`
  width; 100%;
  height: 100%;
  fill: transparent;
  #motion-guide {
    stroke: red;
  }
`;

gsap.registerPlugin(MotionPathPlugin);

const Cockroach = props => {
  const playAnimation = () => {
    gsap.to(".cockroach", {
      duration: 15,
      motionPath: { path: "#motion-guide", align: "#motion-guide", autoRotate: true },
      repeat: -1,
      ease: "none"
    });
  }
  useEffect(() => {
    gsap.set(".cockroach", { xPercent: -50, yPercent: -50, width: 400 });
    playAnimation()
  }, []);

  return(
    <Wrapper>
        <SVGPath xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 166.4">
          <path id="motion-guide" d="M-63.5 73.4s58.8 56.7 114.3 57.1c38 .3 55.9-99.3 90.2-97.6 28 1.4 27.8 76.3 63.3 77.6 31 1.1 34.3-52.5 64.9-51.8 38.8.8 33.2 31.2 49 49.8 32 37.7 118.9 15.3 118.4 4.1M-81.8 76.8l-14 1.6 13.8 1 .2-2.6zM-50.2 61.8c1.4-3.5 1.8-6.7 1.3-9.8-.5-3.1-1.8-5.1-4-5.9s-4.5-.4-7 1.5-4.5 4.5-5.9 8-1.8 6.7-1.3 9.8c.5 3.1 1.9 5.1 4 5.9 2.2.9 4.5.4 7-1.5 2.5-1.8 4.4-4.5 5.9-8z"/>
          <path d="M-41.3 67.2c.1-2.8-1.3-4.7-4.3-5.8m8.8 6.4c-.4-2.7.6-5 3-6.9"/>
          <g>
            <path d="M-66.2 64.2c-3.2.5-6.1 1.6-8.6 3.3-2.9 8.4-2.9 16 0 22.9 2.6 1.6 5.4 2.7 8.6 3.3-3.2-9.2-3.2-19 0-29.5m15.6 1.6c-2.3-1-4.8-1.6-7.5-1.9-2.8 10.3-2.8 20.3 0 30 2.7-.3 5.2-.9 7.5-1.9-2.5-7.3-2.5-16 0-26.2M-30.1 76c0-2.8-1-5.2-3-7.2s-4.4-3-7.2-3c-2.4 0-4.5.7-6.3 2.2-.3.2-.6.5-.9.8-2 2-3 4.4-3 7.2s1 5.2 3 7.2c1.5 1.5 3.1 2.4 5 2.8.7.1 1.5.2 2.2.2 2.8 0 5.2-1 7.2-3 2-1.9 3-4.3 3-7.2m-5.2-2.6c.4.4.6.9.6 1.4 0 .6-.2 1-.6 1.4-.4.4-.9.6-1.4.6s-1-.2-1.4-.6c-.4-.4-.6-.9-.6-1.4 0-.6.2-1 .6-1.4.4-.4.9-.6 1.4-.6s1 .3 1.4.6m-10.1 1.3c0-.6.2-1 .6-1.4.4-.4.9-.6 1.4-.6.6 0 1 .2 1.4.6.4.4.6.9.6 1.4s-.2 1-.6 1.4c-.4.4-.9.6-1.4.6-.6 0-1-.2-1.4-.6-.4-.3-.6-.8-.6-1.4m2.8 5.6c0-.2 0-.4.1-.6 1.1 1.4 2.6 1.9 4.6 1.5-.2.4-.4.8-.6 1-.5.5-1 .8-1.7.8s-1.2-.3-1.7-.8-.7-1.2-.7-1.9z"/>
            <path d="M-74.8 67.5c-.4.2-.7.5-1.1.7-4.1 3-6.1 6.5-6.1 10.7 0 4.2 2 7.7 6.1 10.7.4.3.7.5 1.1.7-2.9-6.8-2.9-14.5 0-22.8m27.2 1.3c.3-.3.6-.6.9-.8-1.2-.8-2.5-1.6-3.9-2.2-2.5 10.2-2.5 18.9 0 26.2 1.5-.7 2.9-1.5 4.3-2.4 1.5-1.1 2.8-2.3 3.7-3.6-1.9-.4-3.6-1.3-5-2.8-2-2-3-4.4-3-7.2s1-5.2 3-7.2m-10.5-4.9c-1-.1-2-.1-3-.1-1.8 0-3.4.1-5.1.4-3.2 10.5-3.2 20.3 0 29.4 1.6.3 3.3.4 5.1.4 1 0 2 0 3-.1-2.8-9.6-2.8-19.6 0-30m15.6 15.7c0 .2-.1.4-.1.6 0 .8.2 1.4.7 1.9.5.5 1 .8 1.7.8.6 0 1.2-.3 1.7-.8.2-.2.4-.6.6-1-2 .5-3.5 0-4.6-1.5m-1.6-4.9l.1.2v.2s0 .1.1.1c.2.2.4.3.7.2.1 0 .2-.1.3-.2.1-.1.1-.2.1-.3.1-.2.1-.4 0-.6-.1-.2-.3-.3-.6-.4v.1c-.1 0-.3 0-.4.1l-.3.3v.3m8.2.5c.1-.2 0-.4 0-.6-.1-.2-.3-.3-.6-.4v.1c-.2-.1-.4 0-.6.4-.1.1-.1.2-.1.3l.1.2v.2l.1.1c.1.1.3.2.4.2h.4c.1-.1.3-.2.3-.5z"/>
            <path d="M-44.8 73.3c-.4.4-.6.9-.6 1.4s.2 1 .6 1.4c.4.4.9.6 1.4.6.6 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4s-.2-1-.6-1.4c-.4-.4-.9-.6-1.4-.6-.6 0-1 .2-1.4.6m.7 1.6l-.1-.2v-.2c.1-.1.1-.3.3-.3.1-.1.3-.1.4-.1V74c.3.1.5.2.6.4.1.2.1.4 0 .6 0 .1-.1.2-.1.3-.1.1-.2.1-.3.2-.3 0-.5 0-.7-.2-.1 0-.1-.1-.1-.1v-.3m9.4 0c0-.6-.2-1-.6-1.4-.4-.4-.9-.6-1.4-.6s-1 .2-1.4.6c-.4.4-.6.9-.6 1.4 0 .6.2 1 .6 1.4.4.4.9.6 1.4.6s1-.2 1.4-.6c.4-.4.6-.8.6-1.4m-1.2-.2c.1.2.1.4 0 .6-.1.2-.2.4-.4.5h-.4c-.2 0-.3-.1-.4-.2l-.1-.1v-.2l-.1-.2c0-.1 0-.2.1-.3.2-.3.4-.4.6-.4v-.1c.4.1.6.2.7.4z"/>
          </g>
          <g>
            <path d="M-59.4 55.4c-1.5-3.4-3.5-6.1-6-7.9-2.5-1.8-4.9-2.3-7-1.4-2.1.9-3.4 2.9-3.9 6s0 6.4 1.5 9.8c1.5 3.5 3.5 6.1 6 7.9 2.6 1.8 4.9 2.2 7 1.3 2.1-.9 3.4-2.9 3.9-6 .5-3 0-6.2-1.5-9.7z"/>
          </g>
      </SVGPath>
      <img src={CockroachImage} className="cockroach" alt="Cockroach" />
    </Wrapper>
  )
}

export default Cockroach
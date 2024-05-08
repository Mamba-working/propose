import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { TypeAnimation } from "react-type-animation";

import cover from "@/resource/image/cover.png";
import style from "./index.module.css";
import deep_in_thought from "@/resource/image/deep_in_thought.png";
import "animate.css";

let audio: HTMLAudioElement;
let hasClickPage0 = false;

const Fullpage = () => {
  const [current, setCurrent] = useState(0);
  const [showCow, setCow] = useState(false);

  useEffect(() => {
    audio = new Audio("/music/maiyatang.ogg");
    audio.volume = 1;
    audio.preload = "auto";
  }, []);

  return (
    <div className={style.page}>
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        credits={{}}
        beforeLeave={(origin, destination, direction, trigger) => {
          console.log(origin, destination, direction, trigger);
        }}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div
                className="section"
                onClick={() => {
                  if (!hasClickPage0) {
                    audio.play();
                    audio.onload = () => {
                      audio.play();
                    };
                    hasClickPage0 = true;
                  } else {
                    setCow(true);
                  }
                }}
              >
                <Image className={style.cover} src={cover} alt="" />
              </div>
              <div className="section" style={{ backgroundColor: 'rgb(103, 193, 197)' }}>
                <Image className={style.deep_in_thought} src={deep_in_thought} alt="" />
                <TypeAnimation
                  sequence={[
                    '我在想',
                    1000,
                    '我在想, 未来的我们会怎么生活',
                    500,
                    '我在想, 未来的我们会怎么生活.又会拥有一个怎样的家呢'
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "block", fontFamily: 'MF YuanHei', position: 'absolute', bottom: '10px', left: '20px' }}
                  repeat={0}
                />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};
export default Fullpage;

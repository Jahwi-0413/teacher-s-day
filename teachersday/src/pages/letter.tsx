import style from "../style/letter.module.css";

import flower from "../assets/flower.png";
import { useEffect, useRef } from "react";
import bgm from "../assets/bgm.mp3";

export default function Letter() {
  const bgmRef = useRef<HTMLAudioElement | null>(null);

  const start = () => {

    if (bgmRef.current) {
      console.log(bgmRef)
      bgmRef.current.volume = 0.3;
      bgmRef.current.play();
    }
  }

  useEffect(() => {
    if (!bgmRef) return
    bgmRef.current?.play();
  }, []);
  return (
    <>
      <audio src={bgm} ref={bgmRef} loop />
      <button onClick={start} >start</button>
      <div className={style.container}>
        <img src={flower} className={style.topFlower} alt="카네이션" />
        <img src={flower} className={style.bottomFlower} alt="카네이션" />
        <div className={style.letterBox}>
          <div className={style.text}>
            <span>to. 계희쌤께</span>
            <div>
              한학기동안 가르쳐주셔서 <br />
              너무 감사해요!!
              <br />
              멋진 개발자가 되어서
              <br />
              돌아올게요
              <br />
              <br /> 사랑해요 ♥
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

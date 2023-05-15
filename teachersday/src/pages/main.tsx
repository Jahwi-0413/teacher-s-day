import style from '../style/main.module.css'
import lock from '../assets/lock.png'
import unlock from '../assets/unlock.png'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Main() {
  const [val1, setVal1] = useState<string>('')
  const [val2, setVal2] = useState<string>('')
  const [val3, setVal3] = useState<string>('')
  const [val4, setVal4] = useState<string>('')
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);

  const [isLock, setIsLock] = useState(true)

  const navigate = useNavigate()

  const check1 = (e: string) => {
    if (e === '박') {
      if (inputRef2.current !== null) inputRef2.current.focus();
    }
  }
  const check2 = (e: string) => {
    if (e === '재') {
      if (inputRef3.current !== null) inputRef3.current.focus();
    }
  }
  const check3 = (e: string) => {
    if (e === '백') {
      if (inputRef4.current !== null) inputRef4.current.focus();
    }
  }
  const check4 = (e: string) => {
    if (e === '소') {
      console.log("!!")
      setIsLock(false)
      setTimeout(move, 700)
    }
  }

  const move = () => {
    navigate('/letter')
  }


  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.textBox}>
          {isLock ?
            (<img src={lock} alt='' width={25}></img>)
            : (<img src={unlock} alt='' width={25}></img>)}
          <div className={style.text}>비밀번호를 입력해주세요</div>
        </div>
        <div className={style.hint}>힌트 : 이름</div>
        <div className={style.inputBox}>
          <div className={style.inputLine}>
            <input className={style.input1} type='text' defaultValue={val1} ref={inputRef1}
              onChange={(e: any) => {
                check1(e.target.value)
              }}></input>
            <input className={style.input2} type='text' defaultValue={val2} ref={inputRef2}
              onChange={(e: any) => {
                check2(e.target.value)
              }}></input>
            <div>희</div>
          </div>
          <div className={style.inputLine}>
            <input className={style.input3} type='text' defaultValue={val3} ref={inputRef3}
              onChange={(e: any) => {
                check3(e.target.value)
              }}></input>
            <input className={style.input4} type='text' defaultValue={val4} ref={inputRef4}
              onChange={(e: any) => {
                check4(e.target.value)
              }}></input>
            <div>원</div>
          </div>
        </div>
      </div>
    </div>)
}
import React, { useEffect, useState } from 'react';
import datalist from './resultdata.json'
import './style.scss'
import Page1 from './Page1';
import Page10 from './Page10';
import Page11 from './Page11';
import Page12 from './Page12';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Result from './Result';

const Main = () => {
    // 언어
    const [langK, setLangK] = useState(true)

    // 데이타불러오기
    const [data, setData] = useState(datalist)
    const [dataR, setDataR] = useState(datalist[0])

    // 결과값
    const [isResultEi, setIsResultEi] = useState('')
    const [isResultNs, setIsResultNs] = useState('')
    const [isResultTf, setIsResultTf] = useState('')
    const [isResultPj, setIsResultPj] = useState('')

    const final = isResultEi+isResultNs+isResultTf+isResultPj

    // 각각 값 계산하기
    const [isEi, setIsEi] = useState(0)
    const [isNs, setIsNs] = useState(0)
    const [isTf, setIsTf] = useState(0)
    const [isPj, setIsPj] = useState(0)

    // 결과에 값 집어넣기
    const getEi = () => {
        if(isEi > 0) {
            setIsResultEi('E')
        } else {
            setIsResultEi('I')
        }
    }

    const getNs = () => {
        if(isNs > 0) {
            setIsResultNs('N')
        } else {
            setIsResultNs('S')
        }
    }

    const getTf = () => {
        if(isTf > 0) {
            setIsResultTf('T')
        } else {
            setIsResultTf('F')
        }
    }

    const getPj = () => {
        if(isPj > 0) {
            setIsResultPj('P')
        } else {
            setIsResultPj('J')
        }
    }

    const getMBTI = () => {
        getEi()
        getNs()
        getTf()
        getPj()
    }

    // final 하고 데이타 연결하기
    const getFin = (final) => {
        setDataR(data.find(item => item.mbti === final))
        
        // 토글
        // setResultToggle(false)
        setBuC(false)
        setFinalToggle(true)
    }
    const [buC, setBuC] = useState(true)


    // css 토글 될때마다 바뀌게

    // css 온오프 토글
    const [mainToggle, setMainToggle] = useState(true)
    const [page1Toggle, setPage1Toggle] = useState(false)
    const [page2Toggle, setPage2Toggle] = useState(false)
    const [page3Toggle, setPage3Toggle] = useState(false)
    const [page4Toggle, setPage4Toggle] = useState(false)
    const [page5Toggle, setPage5Toggle] = useState(false)
    const [page6Toggle, setPage6Toggle] = useState(false)
    const [page7Toggle, setPage7Toggle] = useState(false)
    const [page8Toggle, setPage8Toggle] = useState(false)
    const [page9Toggle, setPage9Toggle] = useState(false)
    const [page10Toggle, setPage10Toggle] = useState(false)
    const [page11Toggle, setPage11Toggle] = useState(false)
    const [page12Toggle, setPage12Toggle] = useState(false)
    const [resultToggle, setResultToggle] = useState(false)
    const [finalToggle, setFinalToggle] = useState(false)

    // 메인 페이지 토글
    const onMain = () => {
        setMainToggle(!mainToggle)
        setPage1Toggle(true)
    }


    return (
        <div>
            <div className="wrap">
                <div className={mainToggle ? "main" : 'off'}>            
                    {/* 메인헤더 */}
                    <div>
                        {/* 언어 토글버튼 */}
                        <button onClick={() => setLangK(!langK)} className='langbutt'>
                            {
                                langK ? 'English' : '한국어'
                            }
                        </button>
                        {
                            langK ? <p className='mainheader'>만약 내가 강아지라면❓❔</p>
                            : <p className='mainheader'>What if I'm a PUPPY❓❔</p>
                        }
                        
                    </div>
                    {/* */}
                    <div className='section'>
                        <img src="./images/rm366.jpg" alt="image" className='mainimg' />
                        {
                            langK ? <p>만약 당신이 강아지라면 어떤 강아지일까요? <br/> 테스트를 통해 알아봅시다. <br/> 이 테스트는 총 12문제로 구성되어 있습니다. <br/> 재미로 즐겨주세요 🐶💛</p>                    
                            : <p>If you were a puppy, <br/> what sort of dog would you be? <br/>  Let's have a test and see. <br/>  There are 12 questions on this test.<br/>  Have a good time. 🐶💛</p>
                        }
                        <button onClick={onMain} className='bigbtt'>
                        {
                            langK ? "시작하기" : "Start"
                        }                    
                        </button>
                    </div>                    
                    
                </div>

                {   page1Toggle && 
                    <Page1 langK={langK} isEi={isEi} setIsEi={setIsEi} setPage1Toggle={setPage1Toggle} setPage2Toggle={setPage2Toggle} />
                }

                {
                    page2Toggle &&
                    <Page2 langK={langK} isEi={isEi} setIsEi={setIsEi} setPage2Toggle={setPage2Toggle} setPage3Toggle={setPage3Toggle} />
                }

                {
                    page3Toggle &&
                    <Page3 langK={langK} isNs={isNs} setIsNs={setIsNs} setPage3Toggle={setPage3Toggle} setPage4Toggle={setPage4Toggle} />
                }

                {
                    page4Toggle &&
                    <Page4 langK={langK} isTf={isTf} setIsTf={setIsTf} setPage4Toggle={setPage4Toggle} setPage5Toggle={setPage5Toggle} />
                }

                {
                    page5Toggle &&
                    <Page5 langK={langK} isPj={isPj} setIsPj={setIsPj} setPage5Toggle={setPage5Toggle} setPage6Toggle={setPage6Toggle} />
                }

                {
                    page6Toggle &&
                    <Page6 langK={langK} isTf={isTf} setIsTf={setIsTf} setPage6Toggle={setPage6Toggle} setPage7Toggle={setPage7Toggle} />
                }

                {
                    page7Toggle &&
                    <Page7 langK={langK} isEi={isEi} setIsEi={setIsEi} setPage7Toggle={setPage7Toggle} setPage8Toggle={setPage8Toggle} />
                }

                {
                    page8Toggle &&
                    <Page8 langK={langK} isPj={isPj} setIsPj={setIsPj} setPage8Toggle={setPage8Toggle} setPage9Toggle={setPage9Toggle} />
                }

                {
                    page9Toggle &&
                    <Page9 langK={langK} isTf={isTf} setIsTf={setIsTf} setPage9Toggle={setPage9Toggle} setPage10Toggle={setPage10Toggle} />
                }

                {
                    page10Toggle &&
                    <Page10 langK={langK} isNs={isNs} setIsNs={setIsNs} setPage10Toggle={setPage10Toggle} setPage11Toggle={setPage11Toggle} />
                }

                {
                    page11Toggle &&
                    <Page11 langK={langK} isPj={isPj} setIsPj={setIsPj} setPage11Toggle={setPage11Toggle} setPage12Toggle={setPage12Toggle} />
                }

                {
                    page12Toggle &&
                    <Page12 getMBTI={getMBTI} setPage12Toggle={setPage12Toggle} setResultToggle={setResultToggle}
                    langK={langK} isNs={isNs} setIsNs={setIsNs} /> 
                }

                {
                    resultToggle &&
                    <Result getMBTI={getMBTI} final={final} dataR={dataR} buC={buC}
                    langK={langK} getFin={getFin} finalToggle={finalToggle} setFinalToggle={setFinalToggle}/>
                }
            </div>
        </div>
    );
};

export default Main;

/* 

*/

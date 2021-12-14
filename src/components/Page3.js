import React from 'react';

const Page3 = ({ langK, isNs, setIsNs, page3Toggle, setPage3Toggle, setPage4Toggle }) => {

    // 플러스
    const onPlus = () => {
        setIsNs(isNs + 1)
        onToggle()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage3Toggle(false)
        setPage4Toggle(true)
    }

    // 마이너스
    const onMinus = () => {
        setIsNs(isNs - 1)
        onToggle()
    }

    return (
        <div>
            <div className='pages'>
                {/* 헤더부분 */}

                {/* 질문부분 */}
                <div className='question'>
                    {
                        langK ? <h2>영화를 보고 난 다음 내 감상은?</h2> : <h2>What do you think after watching that film?</h2>
                    }
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div className='answer' onClick={onMinus}>
                        {
                            langK ? <span>배우들의 의상과 소품이 너무 예뻤어!</span> : <span>The actors' costumes and props were so beautiful!</span>
                        }
                    </div>
                    {/* 두번째 선택지 */}
                    <div className='answer' onClick={onPlus}>
                        {
                            langK ? <span>주인공은 왜 그런 행동을 했을까? 만약 나였으면...</span> : <span>Why did the lead character do it? If I did it...</span>
                        }                        
                    </div>
                    <img src="./images/dog3.png" alt="img" className='pageimg' />
                </div>

            </div>
        </div>
    );
};

export default Page3;
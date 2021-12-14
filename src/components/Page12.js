import React from 'react';

const Page12 = ({ langK, isNs, setIsNs, page12Toggle, setPage12Toggle, setResultToggle, getMBTI }) => {
    
    // 플러스
    const onPlus = () => {
        setIsNs(isNs + 1)
        onToggle()
        getMBTI()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage12Toggle(false)
        setResultToggle(true)
        
    }

    // 마이너스
    const onMinus = () => {
        setIsNs(isNs - 1)
        onToggle()
        getMBTI()
    }
    
    return (
        <div>
            <div className='pages'>
                {/* 헤더부분 */}

                {/* 질문부분 */}
                <div className='question'>
                    {
                        langK ? <h2>여행 가기 전날밤 나는?</h2> : <h2>What about me the night before the trip?</h2>
                    }
                    
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div className='answer' onClick={onMinus}>
                        {
                            langK ? <span>필요한 거 다 챙긴 뒤 빨리 잠든다.</span> : <span>Get everything you need and fall asleep quickly.</span>
                        }
                        
                    </div>
                    {/* 두번째 선택지 */}
                    <div className='answer' onClick={onPlus}>
                        {
                            langK ? <span>뭐하고 놀지, 뭘 먹을지 상상하다가 밤샌다.</span> : <span>I can't sleep while imagining what to do and what to eat.</span>
                        }
                    </div>
                    <img src="./images/dog12.png" alt="img" className='pageimg' />
                </div>

            </div>
        </div>
    );
};

export default Page12;
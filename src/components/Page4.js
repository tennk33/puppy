import React from 'react';

const Page4 = ({ langK, isTf, setIsTf, page4Toggle, setPage4Toggle, setPage5Toggle }) => {
    // 플러스
    const onPlus = () => {
        setIsTf(isTf + 1)
        onToggle()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage4Toggle(false)
        setPage5Toggle(true)
    }

    // 마이너스
    const onMinus = () => {
        setIsTf(isTf - 1)
        onToggle()
    }
    
    return (
        <div>
            <div className='pages'>
                {/* 헤더부분 */}

                {/* 질문부분 */}
                <div className='question'>
                    {
                        langK ? <h2>약속에 늦어버렸다! 뭐라고 사과할까?</h2> : <h2>I'm late on a date! How should I apologize?</h2>
                    }
                    
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div className='answer' onClick={onMinus}>
                        {
                            langK ? <span>미안해, 많이 기다렸지.. 진짜진짜 미안! 다음엔 안늦을게!</span> : <span>I'm sorry for keeping you waiting. I'm really sorry! I won't be late next time!</span>
                        }
                        
                    </div>
                    {/* 두번째 선택지 */}
                    <div className='answer' onClick={onPlus}>
                        {
                            langK ? <span>미안, 버스타고 오는데 차가 엄청막혀서</span> : <span>I'm sorry. There was so much traffic on my way here by bus.</span>
                        }
                    </div>
                    <img src="./images/dog4.png" alt="img" className='pageimg' />
                </div>

            </div>
        </div>
    );
};

export default Page4;
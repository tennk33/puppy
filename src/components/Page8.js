import React from 'react';

const Page8 = ({ langK, isPj, setIsPj, page8Toggle, setPage8Toggle, setPage9Toggle }) => {
    // 플러스
    const onPlus = () => {
        setIsPj(isPj + 1)
        onToggle()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage8Toggle(false)
        setPage9Toggle(true)
    }

    // 마이너스
    const onMinus = () => {
        setIsPj(isPj - 1)
        onToggle()
    }

    return (
        <div>
            <div className='pages'>
                {/* 헤더부분 */}

                {/* 질문부분 */}
                <div className='question'>
                    {
                        langK ? <h2>마트에 갔을때 뭘 사야하지?</h2> : <h2>What should I buy at the Market?</h2>
                    }
                    
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div className='answer' onClick={onPlus}>
                        {
                            langK ? <span>일단 가서 구경하다가 사고싶은거 생기면 산다.</span> : <span>First, I go and look around and buy something if I want to buy.</span>
                        }
                        
                    </div>
                    {/* 두번째 선택지 */}
                    <div className='answer' onClick={onMinus}>
                        {
                            langK ? <span>가기전에 뭘 살지 미리 목록을 만들어놓고 간다.</span> : <span>Before I go, I make a list of what to buy in advance.</span>
                        }
                    </div>
                    <img src="./images/dog8.png" alt="img" className='pageimg'/>
                </div>

            </div>
        </div>
    );
};

export default Page8;
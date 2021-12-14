import React from 'react';

const Page5 = ({ langK, isPj, setIsPj, page5Toggle, setPage5Toggle, setPage6Toggle }) => {
    // 플러스
    const onPlus = () => {
        setIsPj(isPj + 1)
        onToggle()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage5Toggle(false)
        setPage6Toggle(true)
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
                        langK ? <h2>여행 계획 세울때 주로 나는..</h2> : <h2>When I make travel plans..</h2>
                    }
                    
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div className='answer' onClick={onPlus}>
                        {
                            langK ? <span>제주도 도착하면 제주식당 가서 밥먹자!</span> : <span>When we arrive on Jeju Island, let's go to Jeju Restaurant and eat!</span>
                        }
                        
                    </div>
                    {/* 두번째 선택지 */}
                    <div className='answer' onClick={onMinus}>
                        {
                            langK ? <span>아침 11시까지 제주도 도착하고 12시30분에 체크인하고 1시에 제주식당에서 꼬막비빔밥 먹고 그다음에 제주카페가서 2시까지...</span> : <span>I'll arrive at Jeju Island by 11am, checked in at 12:30am, ate cockle Bibimbap at Jeju restaurant at 1pm, and went to a Jeju cafe until 2pm...</span>
                        }
                    </div>
                    <img src="./images/dog5.png" alt="img" className='pageimg' />
                </div>

            </div>
        </div>
    );
};

export default Page5;
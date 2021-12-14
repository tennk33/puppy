import React from 'react';

const Page9 = ({ langK, isTf, setIsTf, page9Toggle, setPage9Toggle, setPage10Toggle  }) => {
    // 플러스
    const onPlus = () => {
        setIsTf(isTf + 1)
        onToggle()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage9Toggle(false)
        setPage10Toggle(true)
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
                        langK ? <h2>친구가 시험에서 떨어졌다고 한다, 뭐라고 대답할까?</h2> : <h2>My friend said he failed the test, what would I say?</h2>
                    }
                    
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div className='answer' onClick={onMinus}>
                        {
                            langK ? <span>괜찮아? ㅠㅠ 나랑 맛있는거 먹으러가자! 다음엔 잘될거야!</span> : <span>Are you okay? Let's go eat something delicious! Everything will go well next time!</span>
                        }
                        
                    </div>
                    {/* 두번째 선택지 */}
                    <div className='answer' onClick={onPlus}>
                        {
                            langK ? <span>무슨 시험? 몇점 맞았는데?</span> : <span>What test? What score did you get?</span>
                        }
                    </div>
                    <img src="./images/dog9.png" alt="img" className='pageimg' />
                </div>

            </div>
        </div>
    );
};

export default Page9;
import React from 'react';

const Page7 = ({ langK, isEi, setIsEi, page7Toggle, setPage7Toggle, setPage8Toggle}) => {
    // 플러스
    const onPlus = () => {
        setIsEi(isEi + 1)
        onToggle()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage7Toggle(false)
        setPage8Toggle(true)
    }

    // 마이너스
    const onMinus = () => {
        setIsEi(isEi - 1)
        onToggle()
    }

    return (
        <div>
            <div className='pages'>
                {/* 헤더부분 */}

                {/* 질문부분 */}
                <div className='question'>
                    {
                        langK ? <h2>친구와 만나기로 했는데 갑자기 약속이 취소됐다면?</h2> : <h2>What if you were supposed to meet a friend, but the appointment was cancelled?</h2>
                    }
                    
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div className='answer' onClick={onPlus}>
                        {
                            langK ? <span>벌써 다 준비했는데, 아쉬워서 다른 약속을 잡는다.</span> : <span>I've already prepared everything. I have no choice but to make another appointment with someone.</span>
                        }
                        
                    </div>
                    {/* 두번째 선택지 */}
                    <div className='answer' onClick={onMinus}>
                        {
                            langK ? <span>나가기 귀찮았는데 잘됐다, 집에서 혼자 영화봐야지</span> : <span>Honestly, I didn't want to go out. Good! I'll watch a movie alone at home.</span>
                        }
                    </div>
                    <img src="./images/dog7.png" alt="img" className='pageimg' />
                </div>

            </div>
        </div>
    );
};

export default Page7;
import React from 'react';

const Page2 = ({ langK, isEi, setIsEi, page2Toggle, setPage2Toggle, setPage3Toggle}) => {

    // 플러스
    const onPlus = () => {
        setIsEi(isEi + 1)
        onToggle()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage2Toggle(false)
        setPage3Toggle(true)
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
                        langK ? <h2>모임에서 주로 나는?</h2> : <h2>What do you generally do at parties?</h2>
                    }
                    
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div onClick={onPlus} className='answer'>
                        {
                            langK ? <span>대화를 주도하고 분위기를 이끈다.</span> : <span>Lead the conversation and drive the mood.</span>
                        }
                        
                    </div>
                    {/* 두번째 선택지 */}
                    <div onClick={onMinus} className='answer'>
                        {
                            langK ? <span>다른 사람들이 말을 걸어주길 기다리거나, 적당히 리액션만 한다.</span> : <span>I expect others to speak to me, or I react only moderately.</span>
                        }
                    </div>
                    <img src="./images/dog2.png" alt="img" className='pageimg' />
                </div>

            </div>
        </div>
    );
};

export default Page2;
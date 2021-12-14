import React from 'react';

const Page10 = ({ langK, isNs, setIsNs, page10Toggle, setPage10Toggle, setPage11Toggle }) => {
    // 플러스
    const onPlus = () => {
        setIsNs(isNs + 1)
        onToggle()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage10Toggle(false)
        setPage11Toggle(true)
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
                        langK ? <h2>일할때 선호하는 환경은?</h2> : <h2>What environment do you prefer when you work?</h2>
                    }
                    
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div className='answer' onClick={onMinus}>
                        {
                            langK ? <span>할일을 구체적으로 지시해주는게 편하다.</span> : <span>It is convenient to follow specific instructions on what to do.</span>
                        }
                        
                    </div>
                    {/* 두번째 선택지 */}
                    <div className='answer' onClick={onPlus}>
                        {
                            langK ? <span>방향만 제시해주고 맡겨주는게 편하다.</span> : <span>It's comfortable to just give me directions and leave it to me on my own.</span>
                        }
                    </div>
                    <img src="./images/dog10.png" alt="img" className='pageimg' />
                </div>

            </div>
        </div>
    );
};

export default Page10;
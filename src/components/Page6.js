import React from 'react';

const Page6 = ({ langK, isTf, setIsTf, page6Toggle, setPage6Toggle, setPage7Toggle }) => {
    // 플러스
    const onPlus = () => {
        setIsTf(isTf + 1)
        onToggle()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage6Toggle(false)
        setPage7Toggle(true)
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
                        langK ? <h2>친구가 우울해서 머리를 잘랐다고 한다, 뭐라고 할까?</h2> : <h2>My friend got a haircut because she was depressed. What should I say?</h2>
                    }
                    
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div className='answer' onClick={onMinus}>
                        {
                            langK ? <span>무슨 일 있어? 왜 우울해 ㅠㅠ</span> : <span>Did something happen? Why are you depressed? 😢</span>
                        }
                        
                    </div>
                    {/* 두번째 선택지 */}
                    <div className='answer' onClick={onPlus}>
                        {
                            langK ? <span>얼마나 잘랐어? 사진 보여줘</span> : <span>How long did you cut it? Show me the picture.</span>
                        }
                    </div>
                    <img src="./images/dog6.png" alt="img" className='pageimg' />
                </div>

            </div>
        </div>
    );
};

export default Page6;
import React, { useEffect } from 'react';


const Page1 = ({ langK, isEi, setIsEi, page1Toggle, setPage1Toggle, setPage2Toggle }) => {

    // 플러스
    const onPlus = () => {
        setIsEi(isEi + 1)
        onToggle()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage1Toggle(false)
        setPage2Toggle(true)
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
                        langK ? <h2>한가로운 주말! 뭐하면서 보낼까?</h2> : <h2>A quiet week-end! What should I do?</h2>
                    }
                    
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div className='answer' onClick={onPlus}>
                        {
                            langK ? <span >날씨가 너무 좋다! 친구들하고 놀러가자!</span> : <span>It's such a sunny day! Let's hang out with friends!</span>
                        }
                    </div>
                    {/* 두번째 선택지 */}
                    <div className='answer' onClick={onMinus}>
                        {
                            langK ? <span>집에서 책을 읽거나, 밀린 드라마 정주행!</span> : <span>I read books at home or I watch TV shows!</span>
                        }
                    </div>
                    <img src="./images/dog1.png" alt="img" className='pageimg' />
                </div>
                

            </div>
        </div>
    );
};

export default Page1;
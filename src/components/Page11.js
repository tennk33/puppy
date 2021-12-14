import React from 'react';

const Page11 = ({ langK, isPj, setIsPj, page11Toggle, setPage11Toggle, setPage12Toggle }) => {
    // 플러스
    const onPlus = () => {
        setIsPj(isPj + 1)
        onToggle()
    }

    // 페이지 토글
    const onToggle = () => {
        setPage11Toggle(false)
        setPage12Toggle(true)
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
                        langK ? <h2>과제할때 어느게 더 우선시되나?</h2> : <h2>Which do you put more priority when you do homework?</h2>
                    }
                    
                </div>

                {/* 답변부분 */}
                <div className='section'>
                    {/* 첫번째 선택지 */}
                    <div className='answer' onClick={onPlus}>
                        {
                            langK ? <span>일단 자료부터 조사하자!</span> : <span>Let's research the data first!</span>
                        }
                        
                    </div>
                    {/* 두번째 선택지 */}
                    <div className='answer' onClick={onMinus}>
                        {
                            langK ? <span>어떤식으로 진행할지 순서부터 정하자!</span> : <span>Let's decide the order first!</span>
                        }
                    </div>
                    <img src="./images/dog11.png" alt="img" className='pageimg' />
                </div>

            </div>
        </div>
    );
};

export default Page11;
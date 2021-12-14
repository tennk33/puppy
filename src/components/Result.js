import ResultFinal from "./ResultFinal";

const Result = ({ langK, final, dataR, getFin, resultToggle, finalToggle, setFinalToggle, buC }) => {

    // 다시시작 ; 새로고침
    const Restart = () => {
        window.location.reload();
    }

    
    return (
        <div>
            <div className='result'>
                {/* 헤더 */}
                <div className={buC ? 'reheader' : 'off'}>
                    {
                        langK ? <div><h3>테스트가 완료되었습니다!</h3></div>  : <div><h3>The test is complete!</h3></div>
                    }
                    <button onClick={() => getFin(final)} className="bigbtt">
                        {
                            langK ? '결과보기' : 'Result'
                        }
                    </button>
                    
                </div>
                
                {/* 결과값 */}
                {
                    finalToggle &&
                    <ResultFinal langK={langK} dataR={dataR} Restart={Restart} />
                }

            </div>
        </div>
    );
};

export default Result;

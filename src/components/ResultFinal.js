import React from 'react';

const ResultFinal = ({langK, dataR, Restart}) => {
    const {id, mbti, kdesc, reimg, goodfrk, ktype, etype, goodfre, goodpp, badfrk, badfre, badpp} = dataR

    return (
        <div>
            <div className='final'>
                {
                    langK &&
                    <div>                  
                        <h1>당신은</h1>
                        <img src={dataR.reimg} alt="img" className='reMain' />    
                        <p className='type'>{dataR.ktype}</p>
                        <p className='desc'>{dataR.kdesc}</p>
                        
                        <div className='section'>
                            <div className='article1'>
                                <h2>당신과 잘맞는 친구</h2>
                                <div className='circle'>
                                    <img src={dataR.goodpp} alt="img" className='reFpp' />
                                </div>
                                <p className='frk'>{dataR.goodfrk}</p>       
                            </div>
                            
                            <div className='article2'>
                                <h2>당신과 안맞는 친구</h2>
                                <div className='circle'>
                                    <img src={dataR.badpp} alt="img" className='reFpp' />
                                </div>
                                <p className='frk'>{dataR.badfrk}</p>
                            </div>
                        </div>
                    </div>
                }
                {
                    !langK &&
                    <div>                  
                        <h1>You are</h1>
                        <img src={dataR.reimg} alt="img" className='reMain' />    
                        <p className='type'>{dataR.etype}</p>
                        <p className='desc'>{dataR.edesc}</p>
                        
                        <div className='section'>
                            <div className='article1'>
                                <h2>Might be best friend</h2>
                                <div className='circle'>
                                    <img src={dataR.goodpp} alt="img" className='reFpp' />
                                </div>
                                <p className='frk'>{dataR.goodfre}</p>       
                            </div>
                            
                            <div className='article2'>
                                <h2>Might be bad friend</h2>
                                <div className='circle'>
                                    <img src={dataR.badpp} alt="img" className='reFpp' />
                                </div>
                                <p className='frk'>{dataR.badfre}</p>
                            </div>
                        </div>
                    </div>
                }
                

                {/* 다시하기버튼 */}
                <button onClick={Restart} className='bigbtt'>
                    {
                        langK ? '다시하기' : 'Restart'
                    }
                </button>
            </div>
        </div>
    );
};

export default ResultFinal;
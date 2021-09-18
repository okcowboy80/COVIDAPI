import React, { useState } from 'react';
import monkeyHappy from './img/MonkeyHappy.png';
import monkeyScared from './img/MonkeyScared.png';
import monkeySad from './img/MonkeySad.png';

const Monkeys = () => {
    const [isHappy, setIsHappy] = useState(true);
    const [isScared, setIsScared] = useState(false);
    const [isSad, setIsSad] = useState(false);

    return (
        
            <div className="container">
                <div className="row "></div>
                <div className="d-flex justify-content-center">
                    <h2>Give The Monkey His Vaccination!</h2>
                    
                </div>
                <hr/>
            
                <br />
                <div className="row ">
                    <div>
                        {isHappy && (
                            <div className="d-flex justify-content-center" >
                                <img src={monkeyHappy} alt="Monkey Happy" id="happy"
                                onMouseEnter={() => {setIsHappy(false); setIsScared(true)}}
                                onMouseLeave={() => {setIsScared(false); setIsHappy(true)}}/>
                            </div>
                        )}
                        {isScared && (
                            <div className="d-flex justify-content-center" > 
                                <br />
                                <img src={monkeyScared} alt="Monkey Scared" id="scared"
                                
                                onMouseDown={() => {setIsHappy(false); setIsScared(false); setIsSad(true)}}
                                onMouseEnter={() => {setIsHappy(false); setIsScared(true)}}
                                onMouseLeave={() => {setIsScared(false); setIsHappy(true)}}/>
                            </div>
                        )}
                        {isSad && (
                            <div className="d-flex justify-content-center" >
                                <br />
                                
                                <img src={monkeySad} alt="Monkey Sad" id="sad"
                                onMouseEnter={() => {setIsHappy(false); setIsScared(false)}}
                                onMouseLeave={() => {setIsScared(false); setIsHappy(true); setIsSad(false)}}
                                
                                />
                            </div>
                        )}
                    </div>
                
                </div>
            </div>
    )
}

export default Monkeys;
import React, { useState } from 'react';
import monkeyHappy from './img/MonkeyHappy.png';
import monkeyScared from './img/MonkeyScared.png';

const Monkeys = () => {
    const [isHappy, setIsHappy] = useState(true);
    const [isScared, setIsScared] = useState(false);
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
                            <div className="d-flex justify-content-center">
                                <img src={monkeyHappy} alt="Monkey Happy"
                                onMouseEnter={() => {setIsHappy(false); setIsScared(true)}}
                                onMouseLeave={() => {setIsScared(false); setIsHappy(true)}}/>
                            </div>
                        )}
                        {isScared && (
                            <div className="d-flex justify-content-center">
                                <br />
                                <img src={monkeyScared} alt="Monkey Scared"
                                onMouseEnter={() => {setIsHappy(false); setIsScared(true)}}
                                onMouseLeave={() => {setIsScared(false); setIsHappy(true)}}/>
                            </div>
                        )}
                    </div>
                
                </div>
            </div>
    )
}

export default Monkeys;
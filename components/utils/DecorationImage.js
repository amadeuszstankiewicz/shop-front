import { useEffect, useState } from "react";

function getRandomNumber(min, max) {
    return 50 + Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function DecorationImage({ x, y, w, h, content, z }) {
    let leftPosition = 0
    let topPosition = 0
    let width = 0
    let height = 0
    
    if(x) {
        leftPosition = x + "%"
    }

    if(y) {
        topPosition = y + "%"
    }

    if(w) {
        width = w + "px"
    }

    if(h) {
        height = h + "px"
    }

    const [translate, setTranslate] = useState('translate(-50%, -50%)')
    const [particle1, setParticle1Translate] = useState({top: '50%', left: '50%'})
    const [particle2, setParticle2Translate] = useState({top: '50%', left: '50%'})
    const [particle3, setParticle3Translate] = useState({top: '50%', left: '50%'})

    useEffect(() => {
        setTranslate('translate(-' + getRandomNumber(-10, 10) + '%, -' + getRandomNumber(-10, 10) + '%)')
        setParticle1Translate({top: getRandomNumber(-50, 50) + '%', left: getRandomNumber(-50, 50) + '%'})
        setParticle2Translate({top: getRandomNumber(-50, 50) + '%', left: getRandomNumber(-50, 50) + '%'})
        setParticle3Translate({top: getRandomNumber(-50, 50) + '%', left: getRandomNumber(-50, 50) + '%'})


        const interval1 = setInterval(() => {
            setTranslate('translate(-' + getRandomNumber(-10, 10) + '%, -' + getRandomNumber(-10, 10) + '%)')
        }, 3000);

        const interval2 = setInterval(() => {
            setParticle1Translate({top: getRandomNumber(-50, 50) + '%', left: getRandomNumber(-50, 50) + '%'})
        }, 3500);

        const interval3 = setInterval(() => {
            setParticle2Translate({top: getRandomNumber(-50, 50) + '%', left: getRandomNumber(-50, 50) + '%'})
        }, 2500);

        const interval4 = setInterval(() => {
            setParticle3Translate({top: getRandomNumber(-50, 50) + '%', left: getRandomNumber(-50, 50) + '%'})
        }, 1700);
      
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
        }
    }, [])

    return (
        <div 
            className="absolute glow-effect transform ease-in-out"
            style={{left: leftPosition, top: topPosition,
                    width: width, height: height,
                    transition: "all 5s",
                    transform: translate,
                    zIndex: z}}>
            
            <div className="absolute glowing-particle z-2"
                style={{transition: "all 5s",
                        top: particle1.top, left: particle1.left}}></div>
            <img className="z-5" src={'/decoration/' + content}  alt=""/>
            <div className="absolute glowing-particle z-10"
                style={{transition: "all 5s",
                        top: particle2.top, left: particle2.left}}></div>
            <div className="absolute glowing-particle z-10"
                style={{transition: "all 5s",
                        top: particle3.top, left: particle3.left}}></div>
        </div>
    )
}

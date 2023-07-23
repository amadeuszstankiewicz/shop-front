import { useEffect, useState } from "react";
import FigurineModel from "./FigurineModel";

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function Figurine() {
    const [color, setColor] = useColor("hex", "#ffffff");
    const [figurineColor, setFigurineColor] = useState("0xffffff")
    const [showColorpicker, setShowColorpicker] = useState(false)

    function setNewFigurineColor() {
        setFigurineColor('0x' + color?.hex?.replace(/#/g, ""))
        setShowColorpicker(false)
    }
    return (
        <div className="fixed hidden h-full w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 lg:block">
            <FigurineModel figurineColor={figurineColor}/>
            {showColorpicker ?
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <ColorPicker 
                            width={456} height={228} 
                            color={color} 
                            onChange={setColor} 
                            hideHSV dark />

                        <div className="w-full flex justify-center mt-2">
                            <button 
                                className="rounded-full bg-slate-800 py-2 px-6 text-white hover:bg-slate-700"
                                onClick={setNewFigurineColor}>
                                Apply
                            </button>
                        </div>
                    </div>
                :
                <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className="w-full flex justify-center mt-5">
                        <button 
                            className="rounded-full bg-slate-800 py-2 px-6 text-white hover:bg-slate-700"
                            onClick={() => setShowColorpicker(true)}>
                            Change color
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
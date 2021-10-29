import React from 'react'
import aang from '../../images/aang.png'


// This card is kinda unique so I wont try to make into a customizable component
const ContentBodyEducation = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col justify-center">
            
            {/* Top Part*/}
            <div className="bg-gray-300 flex-1 flex flex-row">
                {/* Left Part */}
                <div className="bg-yellow-500 w-36 flex items-center justify-center">
                    {/* Container for rounded image (cropped) */}
                    <div className="w-32 h-32 overflow-hidden rounded-full">
                        <img src={aang} alt="Profile Pic" className="h-36 pb-3"/>
                    </div>
                </div>

                {/* Right Part */}
                <div className="flex flex-col flex-1 justify-center">
                    <p className="text-lg font-medium text-center">My Full Name</p>
                    <p className="bg-yellow-700 flex-0 text-center text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, vero natus sunt doloribus facilis impedit accusantium nisi libero iste reprehenderit cum eveniet ipsa tempora laborum repellat totam quisquam in tempore.
                    </p>
                </div>
            </div>

            {/* Separator */}
            {/* TODO: Ver se da pra fazer assim. Centralizar... O problema vai ser o de baixo que é com angulo */}
            <div className="bg-red-400 h-5 divide-y-2  divide-green-300">
                <div></div>
                <div></div>
            </div>

            {/* Bottom Part*/}
            <div className="bg-red-400 flex flex-row flex-1 justify-around">
                {/* Left Part */}
                <div className="bg-gray-500 flex-1">
                    <span>abcdefg</span>
                </div>
                
                {/* Separator */}
                <div className="bg-yellow-200 w-5 flex-none">
                </div>

                {/* Right Part */}
                <div className="bg-gray-900 flex-1">
                </div>
            </div>

        </div>
    )
}

export default ContentBodyEducation

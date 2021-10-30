import React from 'react'
import aang from '../../images/aang.png'
import ufrgs from '../../images/ufrgs.png'
import maxiquim from '../../images/maxiquim.png'


// This card is kinda unique so I wont try to make into a customizable component
const ContentBodyEducation = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col justify-center rounded-md overflow-hidden shadow-lg">
            
            {/* Top Part*/}
            <div className=" flex-1 flex flex-row">
                {/* Left Part */}
                <div className=" w-1/4 px-4 min-w-min flex items-center justify-center">
                    {/* Container for rounded image (cropped) */}
                    <div className="h-32 w-32 md:h-38 md:w-38 lg:w-44 lg:h-44 overflow-hidden rounded-full border">
                        <img src={aang} alt="Profile Pic" className="object-cover scale-150 pl-2"/>
                    </div>
                </div>

                {/* Right Part */}
                <div className="flex flex-col flex-1 justify-center px-4 md:mx-10">
                    <p className="text-lg font-medium pl-6 pb-2 text-left">My Full Name</p>
                    <p className=" flex-0 text-left text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, vero natus sunt doloribus facilis impedit accusantium nisi libero iste reprehenderit cum eveniet ipsa tempora laborum repellat totam quisquam in tempore.
                    </p>
                </div>
            </div>

            {/* Separator */}
            <div className="bg white h-5 flex flex-col justify-center items-center">
                <div className="bg-gray-300 w-5/6 h-[1px]"></div>
            </div>

            {/* Bottom Part*/}
            <div className=" flex flex-row flex-1 justify-around">
                {/* Left Part */}
                <div className=" flex-1 flex items-center justify-center gap-2">
                    {/* Logo Part */}
                    <div className="w-24 h-24 overflow-hidden rounded-full bg-white border">
                        <img src={ufrgs} alt="Profile Pic" className=""/>
                    </div>

                    {/* Text Part */}
                    <div>
                        <p className="font-semibold text-center">My University</p>
                        <p className="flex-0 text-center text-sm"> My Graduation Course </p>
                        <p className="flex-0 text-center text-sm"> 1720 - 1725 </p>
                    </div>
                </div>
                
                {/* Separator */}
                <div className=" w-5 flex-none flex flex-col justify-center pl-3">
                    <div className="bg-gray-300 h-3/4 w-[1px] transform rotate-[5deg]"></div>
                </div>

                {/* Right Part */}
                <div className="bg-white flex-1 flex items-center justify-center gap-3">
                    {/* Logo Part */}
                    <div className="w-32 h-24 overflow-hidden rounded-2xl  border">
                        <img src={maxiquim} alt="Profile Pic" className=""/>
                    </div>

                    {/* Text Part */}
                    <div>
                        <p className="font-semibold text-center">Company Name</p>
                        <p className="flex-0 text-center text-sm"> My Job Title </p>
                        <p className="flex-0 text-center text-sm"> 1725 - present </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContentBodyEducation

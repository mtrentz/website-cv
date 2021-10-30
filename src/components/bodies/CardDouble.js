import React from 'react'
import DescriptionText from './DescriptionText'

const CardDouble = ( { cardImage, cardTitle, cardDescription, cardImageBig }) => {
    return (
        <div className="bg-white w-full md:h-56 xl:h-64 2xl:h-96 col-span-2 flex flex-row rounded-md shadow overflow-hidden">

            {/* Logo and Description */}
            <div className="flex flex-col w-[40%]">
                {/* Image Part */}
                <div className="h-[60%] flex justify-center py-[5%]">
                    <img src={cardImage} alt={cardTitle} className="object-fit p-[10%]"/>
                </div>

                {/* Text Part */}
                <div>
                    <DescriptionText cardTitle={cardTitle} cardDescription={cardDescription}/>
                </div>
            </div>

            {/* Big Image */}
            <div className="w-[60%] flex flex-row -space-x-1">
                {/* This is to simmulate a rounded corner of the logo and description part with the image on the bottom of it */}
                <div className="bg-white w-2 rounded-r-lg z-20"></div>
                <div className="flex z-10"><img src={cardImageBig} alt={cardTitle} className="object-cover opacity-80"/></div>
            </div>

        </div>
    )
}

export default CardDouble

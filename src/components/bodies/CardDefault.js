import React from 'react'
import DescriptionText from './DescriptionText'

const CardDefault = ( {cardImage, cardTitle, cardDescription} ) => {
    return (
        <div className="bg-white w-full md:h-56 xl:h-64 2xl:h-80 flex flex-col rounded-md shadow p-[2%]">
            {/* Image Part */}
            <div className="h-[60%] flex justify-center py-[5%]">
                <img src={cardImage} alt={cardTitle} className="object-fit"/>
            </div>

            {/* Text Part */}
            <div>
                <DescriptionText cardTitle={cardTitle} cardDescription={cardDescription}/>
            </div>
        </div>
    )
}

export default CardDefault

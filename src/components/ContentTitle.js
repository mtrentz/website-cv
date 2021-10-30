import React from 'react'

const ContentTitle = ( {title} ) => {
    return (
        <div className="h-[8%] mt-[1%] flex items-end">
            <span className="font-medium text-2xl 2xl:text-3xl ml-[5%]"> {title} </span>
        </div>
    )
}

export default ContentTitle

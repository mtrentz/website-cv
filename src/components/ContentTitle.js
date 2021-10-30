import React from 'react'

const ContentTitle = ( {title} ) => {
    return (
        <div className="h-16 flex items-end">
            <span className="font-medium text-2xl ml-12 mb-2"> {title} </span>
        </div>
    )
}

export default ContentTitle

import React from 'react'

const ContentTitle = ( {title} ) => {
    return (
        <div className="h-12 mt-2 flex items-end">
            <span className="font-medium text-2xl ml-12"> {title} </span>
        </div>
    )
}

export default ContentTitle

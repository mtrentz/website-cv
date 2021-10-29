import React from 'react'

const Content = () => {
    return (
        <div className="bg-gray-100 flex flex-col h-full w-full">
            {/* Content Title */}
            <div className="h-16 bg-blue-400">
                <span> Content Title </span>
            </div>

            {/* ContentNav */}
            <div className="h-16 bg-purple-500">
                <span> Content Nav </span>
            </div>

            {/* Content Body */}
            <div className="flex-grow bg-pink-300">
                <span> Content Body </span>
            </div>
        </div>
    )
}

export default Content

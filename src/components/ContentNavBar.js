import React from 'react'

const ContentNavBar = ( { navbarLinks } ) => {

    return (

        <div className="h-16 bg-purple-500 pl-16 pt-3 flex flex-row gap-3">
            {navbarLinks.map( (links) => (
                <a href={links.link}>
                    <div className="bg-blue-700 h-1.5 w-16 rounded-full"></div>
                </a>
            ))}
        </div>
    )
}

export default ContentNavBar

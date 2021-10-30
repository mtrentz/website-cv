import React from 'react'

const ContentNavBar = ( { navbarLinks } ) => {

    return (

        <div className="h-8 pl-16 flex flex-row gap-3 items-center">
            {navbarLinks.map( (links) => (
                <a href={links.link}>
                    <div className="bg-accent h-2 w-16 rounded-full"></div>
                </a>
            ))}
        </div>
    )
}

export default ContentNavBar

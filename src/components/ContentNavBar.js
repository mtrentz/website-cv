import React from 'react'

const ContentNavBar = ( { navbarLinks, handleClick } ) => {

    return (

        <div className="h-8 pl-16 flex flex-row gap-3 items-center">
            {navbarLinks.map( (links) => (
                <a href={links.link}>
                    <div className={`${ links.selected ? "bg-secondary" : "bg-accent"} h-2 w-16 rounded-full`} onClick={() => handleClick(links.id)}></div>
                </a>
            ))}
        </div>
    )
}

export default ContentNavBar

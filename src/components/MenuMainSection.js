import React from 'react'

const MenuMainSection = ( { sectionTitle, sectionIcon, sectionHref } ) => {
    return (
        <a href={sectionHref} className="flex flex-row flex-nowrap ml-4 my-1 items-center">
            { sectionIcon }
            <span className="ml-1"> { sectionTitle } </span>
        </a>
    )
}

export default MenuMainSection
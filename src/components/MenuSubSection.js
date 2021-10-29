import React from 'react'

const MenuSubSection = ( { sectionTitle, sectionIcon, sectionHref } ) => {
    return (
        <a href={sectionHref} className="flex flex-row flex-nowrap ml-7 my-1 items-center text-sm">
            { sectionIcon }
            <span className="ml-1"> { sectionTitle } </span>
        </a>
    )
}

export default MenuSubSection

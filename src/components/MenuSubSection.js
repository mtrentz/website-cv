import React from 'react'

const MenuSubSection = ( { sectionTitle, sectionIcon, sectionHref } ) => {
    return (
        <a href={sectionHref} className=" flex flex-row flex-nowrap ml-10 my-2 items-center text-md">
            { sectionIcon }
            <span className="ml-1"> { sectionTitle } </span>
        </a>
    )
}

export default MenuSubSection

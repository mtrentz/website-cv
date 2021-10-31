import React from 'react'
import { Link } from 'react-router-dom'

const MenuSubSection = ( { sectionTitle, sectionIcon, sectionHref } ) => {
    return (
        <Link to={sectionHref} className="flex flex-row flex-nowrap ml-10 my-2 items-center text-md">
            { sectionIcon }
            <span className="ml-1"> { sectionTitle } </span>
        </Link>
    )
}

export default MenuSubSection

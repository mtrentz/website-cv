import React from 'react'
import { Link } from 'react-router-dom'

const MenuMainSection = ( { sectionTitle, sectionIcon, sectionHref } ) => {
    return (
        <Link to={sectionHref} className="flex flex-row flex-nowrap ml-6 my-2 items-center">
            { sectionIcon }
            <span className="ml-1"> { sectionTitle } </span>
        </Link>
    )
}

export default MenuMainSection

import React from 'react'
import ContentTitle from './ContentTitle'
import ContentNavBar from './ContentNavBar'
import ContentBodyEducation from './bodies/ContentBodyEducation'
import { useState } from 'react'

const ContentAboutMe = () => {

    const [navbarLinks, setNavbarLinks] = useState([
        {
            id: 1,
            name: 'Education',
            link: '#education',
            selected: true
        },
        {
            id: 2,
            name: 'Tech Skills',
            link: '#tech-skills',
            selected: false
        },
        {
            id: 3,
            name: 'Miscellaneous',
            link: '#miscellaneous',
            selected: false
        }
    ])

    const handleClick = (id) => {
        // If clicked, set that one to true, all other ones to false
        const updatedLinks = navbarLinks.map(link => 
            link.id === id ? {...link, selected:true} : {...link, selected:false}
            )
        setNavbarLinks(updatedLinks)
    }

    return (
        <div className="bg-terciary flex flex-col h-full w-full">
            {/* Content Title */}
            <ContentTitle title="About Me" />

            {/* ContentNav */}
            <ContentNavBar navbarLinks={navbarLinks} handleClick={handleClick}/>

            {/* Content Body */}
            <div className="flex flex-grow items-center justify-center py-5 px-8">
                <ContentBodyEducation/>
            </div>
        </div>
    )
}

export default ContentAboutMe

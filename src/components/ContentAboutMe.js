import React from 'react'
import ContentTitle from './ContentTitle'
import ContentNavBar from './ContentNavBar'
import ContentBodyEducation from './bodies/ContentBodyEducation'

const ContentAboutMe = () => {

    const navbarLinks = [
        {
            name: 'Education',
            link: '#education'
        },
        {
            name: 'Tech Skills',
            link: '#tech-skills'
        },
        {
            name: 'Miscellaneous',
            link: '#miscellaneous'
        }
    ]

    return (
        <div className="bg-gray-100 flex flex-col h-full w-full">
            {/* Content Title */}
            <ContentTitle title="About Me" />

            {/* ContentNav */}
            <ContentNavBar navbarLinks={navbarLinks}/>

            {/* Content Body */}
            <div className="bg-pink-300 flex flex-grow items-center justify-center py-5 px-8">
                <ContentBodyEducation/>
            </div>
        </div>
    )
}

export default ContentAboutMe

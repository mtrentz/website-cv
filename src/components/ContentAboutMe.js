import React from 'react'
import ContentTitle from './ContentTitle'
import ContentNavBar from './ContentNavBar'
import ContentBodyEducation from './bodies/ContentBodyEducation'
import ContentBodyTech from './bodies/ContentBodyTech'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const ContentAboutMe = () => {

    const [navbarLinks, setNavbarLinks] = useState([
        {
            id: 1,
            name: 'Education',
            link: '/education',
            selected: true
        },
        {
            id: 2,
            name: 'Tech Skills',
            link: '/tech-skills',
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
            {/* TODO: Ver some LINK ao invés de ROUTE */}
            <Router>
                {/* Content Title */}
                <ContentTitle title="About Me" />

                {/* ContentNav */}
                <ContentNavBar navbarLinks={navbarLinks} handleClick={handleClick}/>

                {/* Content Body */}
                <div className="flex flex-grow items-center justify-center">
                    <Switch>
                        <Route path="/education" exact>
                            <ContentBodyEducation/>
                        </Route>
                        {/* Create route for ContentBodyTech */}
                        <Route path="/tech-skills" exact>
                            <ContentBodyTech/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default ContentAboutMe

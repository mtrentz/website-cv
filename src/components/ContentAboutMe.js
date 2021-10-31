import React from 'react'
import ContentTitle from './ContentTitle'
import ContentNavBar from './ContentNavBar'
import ContentBodyEducation from './bodies/ContentBodyEducation'
import ContentBodyTech from './bodies/ContentBodyTech'
import ContentBodyComplementary from './bodies/ContentBodyComplementary'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Redirect} from 'react-router-dom'

const ContentAboutMe = () => {

    let { path, url } = useRouteMatch();

    const [navbarLinks, setNavbarLinks] = useState([
        {
            id: 1,
            name: 'Education',
            link: `${path}/education`,
            selected: false
        },
        {
            id: 2,
            name: 'Tech Skills',
            link: `${path}/tech`,
            selected: false
        },
        {
            id: 3,
            name: 'Complementary',
            link: `${path}/Complementary`,
            selected: false
        }
    ])

    const getLinkId = (linkName) => {
        return navbarLinks.find(link => link.name === linkName).id
    }

    const handleMount = (id) => {
        // When certain page is mounted, change color of content navbar
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
                <ContentNavBar navbarLinks={navbarLinks}/>

                {/* Content Body */}
                <div className="flex flex-grow items-center justify-center">
                <Switch>
                    <Route exact path={`${path}/education`} >
                        <ContentBodyEducation linkId={getLinkId("Education")} handleMount={handleMount}/>
                    </Route>
                    <Route exact path={`${path}/tech`} >
                        <ContentBodyTech linkId={getLinkId("Tech Skills")} handleMount={handleMount}/>
                    </Route>
                    <Route exact path={`${path}/complementary`} >
                        <ContentBodyComplementary linkId={getLinkId("Complementary")} handleMount={handleMount}/>
                    </Route>
                </Switch>
                </div>
        </div>
    )
}

export default ContentAboutMe

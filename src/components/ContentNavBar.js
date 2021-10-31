import React from 'react'
import { Link } from 'react-router-dom'

const ContentNavBar = ( { navbarLinks } ) => {

    return (

        //  TODO: A cor do botão nao ta funcionando desde que coloquei ROUTE. E tem que fazer o SideBar mudar a cor do botão
        <div className="h-[3%] pl-[7%] flex flex-row gap-5 items-end">
            {navbarLinks.map( (links) => (
                <Link to={links.link} className="group">
                    <p className="text-terciary group-hover:text-main text-xs text-center transition duration-500 ease-in-out"> { links.name } </p>
                    <div className={`${ links.selected ? "bg-secondary" : "bg-accent"} h-2 w-20 rounded-full`}>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ContentNavBar

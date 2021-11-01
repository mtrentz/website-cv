import React from 'react'
import { useEffect } from 'react'
import CardDefault from './CardDefault'
import CardDouble from './CardDouble'
import unibio from '../../images/unibio.png'
import sdu from '../../images/sdu.png'
import sdu_pic from '../../images/sdu_pic.png'
import dtu from '../../images/dtu.png'
import tableauDash from '../../images/tableau_dashboard.png'
import tableau from '../../images/tableau.png'
import mysql from '../../images/mysql.png'

const ContentBodyComplementary = ( {linkId, handleMount } ) => {

    useEffect(() => {
        handleMount(linkId)
    })

    return (
        <div className="w-[70%] h-[90%] flex items-center justify-center">
            <div className="grid grid-cols-3 gap-x-1 gap-y-2">
                <CardDefault 
                    cardImage={unibio}
                    cardTitle="Unibio - Denmark"
                    cardDescription="Five months full-time internship at a chemical plant"
                />
                <CardDouble 
                    cardImage={sdu}
                    cardTitle="Syddansk Universitet"
                    cardDescription="Two semesters in Denmark studying Chemical Engineering"
                    cardImageBig={sdu_pic}
                />
                <CardDefault 
                    cardImage={dtu}
                    cardTitle="TU Dortmund"
                    cardDescription="Three months summer course studying Chemical Engineering"
                />
            </div>
        </div>
    )
}

export default ContentBodyComplementary

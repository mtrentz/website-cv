import React from 'react'
import MenuMainSection from './MenuMainSection'
import MenuSubSection from './MenuSubSection'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineAcademicCap,  HiOutlineTerminal, HiOutlinePuzzle, HiOutlineSparkles, HiOutlineCode, HiOutlineChartBar, HiOutlineLightBulb} from 'react-icons/hi'
import { IoLogoTableau, IoLogoLinkedin} from 'react-icons/io5'
import { FaGithubSquare } from 'react-icons/fa'


const SideBar = () => {
    return (
        // Acho que a shadow ta indo só pra baixo
        <nav className="bg-white shadow-2xl w-72">
            <div className="flex flex-col h-screen">
                {/* logo */}
                <div className="bg-red-400 h-36 flex-grow-0 flex items-center">
                    <a href="#" className="block m-auto">
                        <svg className="w-24 h-24 rounded-lg opacity-90" viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#67839C" fill-opacity=".9" d="M0 0h143v143H0z"/><path d="M38.908 38.55H22.522l16.386 81.791v-81.79ZM71.679 38.55v65.542L104.45 38.55H71.952v-.273h-.273V22.165h49.156V38.55l-32.77 65.542h32.77v16.385H55.43V38.55h16.249Z" fill="#fff" stroke="#fff" stroke-width="2"/></svg>
                    </a>
                </div>

                {/* menu */}
                <div className="bg-yellow-400 flex-grow">
                    < MenuMainSection sectionTitle="About Me" sectionIcon={<AiOutlineUser />} sectionHref="#"/>
                        < MenuSubSection sectionTitle="Education" sectionIcon={<HiOutlineAcademicCap />} sectionHref="#" />
                        < MenuSubSection sectionTitle="Tech Skills" sectionIcon={<HiOutlineTerminal />} sectionHref="#" />
                        < MenuSubSection sectionTitle="Miscellaneous" sectionIcon={<HiOutlinePuzzle />} sectionHref="#" />
                    < MenuMainSection sectionTitle="Projects" sectionIcon={ <HiOutlineSparkles /> } sectionHref="#"/>
                        < MenuSubSection sectionTitle="Coding" sectionIcon={<HiOutlineCode />} sectionHref="#" />
                        < MenuSubSection sectionTitle="Data Vizzes" sectionIcon={<HiOutlineChartBar />} sectionHref="#" />
                        < MenuSubSection sectionTitle="Others" sectionIcon={<HiOutlineLightBulb />} sectionHref="#" />
                </div>

                {/* socials */}
                <div className="bg-green-400 h-24 flex-grow-0">
                    <p className="text-md mb-2 ml-1">Find me on</p>
                    <div className="flex flex-row justify-center gap-2 items-center">
                        <a href="#" title="Link to my GitHub">
                            < FaGithubSquare className="w-12 h-10"/>
                        </a>
                        <a href="#" title="Link to my Tableau Public">
                            < IoLogoTableau className="w-12 h-10"/>
                        </a>
                        <a href="#" title="Link to my LinkedIn">
                            < IoLogoLinkedin className="w-12 h-10"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar

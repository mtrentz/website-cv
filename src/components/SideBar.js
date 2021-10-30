import React from 'react'
import MenuMainSection from './MenuMainSection'
import MenuSubSection from './MenuSubSection'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineAcademicCap,  HiOutlineTerminal, HiOutlinePuzzle, HiOutlineSparkles, HiOutlineCode, HiOutlineChartBar, HiOutlineLightBulb} from 'react-icons/hi'
import { IoLogoTableau, IoLogoLinkedin} from 'react-icons/io5'
import { FaGithubSquare } from 'react-icons/fa'


const SideBar = () => {
    // TODO: Ver como criar shadow pra direita
    return (
        <div>
            <nav className="xl:w-64 2xl:w-72 bg-white shadow-2xl">
                <div className="flex flex-col h-screen">
                    {/* logo */}
                    <div className="h-[25%] flex-grow-0 flex items-center">
                        <a href="#" className="block m-auto">
                            <svg className="w-24 h-24 md:w-26 md:h-26 lg:w-30 lg:h-30 xl:h-32 xl:w-32 2xl:h-40 2xl:w-40  rounded-lg md:rounded-xl lg: opacity-90" viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#67839C" fill-opacity=".9" d="M0 0h143v143H0z"/><path d="M38.908 38.55H22.522l16.386 81.791v-81.79ZM71.679 38.55v65.542L104.45 38.55H71.952v-.273h-.273V22.165h49.156V38.55l-32.77 65.542h32.77v16.385H55.43V38.55h16.249Z" fill="#fff" stroke="#fff" stroke-width="2"/></svg>
                        </a>
                    </div>

                    {/* menu */}
                    <div className="flex-grow mr-2">
                        < MenuMainSection sectionTitle="About Me" sectionIcon={<AiOutlineUser />} sectionHref="#"/>
                            < MenuSubSection sectionTitle="Education" sectionIcon={<HiOutlineAcademicCap />} sectionHref="/education" />
                            < MenuSubSection sectionTitle="Tech Skills" sectionIcon={<HiOutlineTerminal />} sectionHref="/tech-skills" />
                            < MenuSubSection sectionTitle="Miscellaneous" sectionIcon={<HiOutlinePuzzle />} sectionHref="#" />
                        < MenuMainSection sectionTitle="Projects" sectionIcon={ <HiOutlineSparkles /> } sectionHref="#"/>
                            < MenuSubSection sectionTitle="Coding" sectionIcon={<HiOutlineCode />} sectionHref="#" />
                            < MenuSubSection sectionTitle="Data Vizzes" sectionIcon={<HiOutlineChartBar />} sectionHref="#" />
                            < MenuSubSection sectionTitle="Others" sectionIcon={<HiOutlineLightBulb />} sectionHref="#" />
                    </div>

                    {/* socials */}
                    <div className="h-24 flex-grow-0 mb-3">
                        <p className="mb-2 ml-4 font-medium">Find me on</p>
                        <div className="flex flex-row justify-center gap-3 items-center">
                            <a href="#" title="Link to my GitHub">
                                < FaGithubSquare className="w-12 h-12 text-gray-700"/>
                            </a>
                            <a href="#" title="Link to my Tableau Public">
                                < IoLogoTableau className="w-10 h-10 bg-gray-700 text-white rounded-[4px] p-[2px]"/>
                            </a>
                            <a href="#" title="Link to my LinkedIn">
                                < IoLogoLinkedin className="w-12 h-12 text-gray-700"/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <nav>

            </nav>

        </div>
    )
}

export default SideBar

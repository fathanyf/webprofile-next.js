import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'

const projects = [
    {
      name: "Ndaleme Mbahkung Homestay",
      description:
        "Website profil Ndaleme Mbahkung Homestay.",
      image: "/web-homestay.PNG",
      github: "https://github.com/fathanyf/website-homestay87",
      link: "http://malanghomestay.com/",
    },
    {
      name: "PT Data Services Indonesia",
      description: "Website Resmi PT Data Services Indonesia.",
      image: "/webdsi.PNG",
      github: "https://github.com/fathanyf/DevTest_PT.DSI",
      link: "http://dsi-center.com/",
    },
    {
      name: "Yayasan TROI untuk Indonesia",
      description:
        "Website resmi Yayasan TROI untuk Indonesia.",
      image: "/webtroi.PNG",
      github: "https://github.com/fathanyf/DevTest_Website_TROI",
      link: "https://troi-idn.org/",
    },
    {
        name: "Pengurus Paramotor Jakarta",
        description:
          "Website resmi Yayasan TROI untuk Indonesia.",
        image: "/webparamotorjakarta.PNG",
        github: "https://github.com/fathanyf/Dev_ppg-jakarta",
        link: "http://paramotor-jkt.org/",
      },
  ]

const ProjectsSection = () => {
  return (
    <section id="projects">
        <h1 className="text-center font-bold text-4xl">Portofolio
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
          

          <div className="flex flex-col space-y-28">
            {projects.map((project, idx)=>{
                return <div key={idx}>
                  <SlideUp offset="-300px 0px -300px 0px">
                    <div className="flex flex-col animate-slideUpCubiBezier aniimation-delay-2 md:flex-row md:space-x-12">
                        <div className="mt-8 md:w-1/2">
                          <Link href={project.link} target="_blank">
                          <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                          />
                          </Link>
                        </div>
                        <div className="mt-12 md:w-1/2">
                          <h1 className="text-2xl font-bold mb-6">{project.name}</h1>
                          <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                          {project.description}</p>
                          <div className="flex flex-row allign-bottom space-x-4">
                            <Link href={project.github} target="_blank">
                              <BsGithub 
                              size={30}
                              className="hover:-translate-y-1 transition-transform cursor-pointer"
                              />
                            </Link>
                            <Link href={project.link} target="_blank"> 
                            <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                            </Link>
                          </div>
                        </div>
                    </div>
                    </SlideUp>
                </div>
                })}
          </div>
    </section>
  )
}

export default ProjectsSection
// 39.40

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './App.css'
import ProjectCard from './components/ProjectCard'
import { Link as ReactScrollLink } from 'react-scroll'
import ExperienceAccordion from './components/ExperienceAccordion'
import { Link } from './components/Link'
import { info, projects } from './constants'
function App() {
  return (
    <div className="mx-auto container max-w-screen-lg px-10 pt-5 monokai-white">
      {/* Nav */}
      <div className="flex justify-end">
        <div className="flex justify-between w-full md:w-fit">
          <ReactScrollLink
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            offset={-20}
            className="cursor-pointer transition duration-300 ease-in-out monokai-green hover:monokai-bg-green hover:monokai-white rounded me-2 py-1 px-2 md:py-2 md:px-4"
          >
            Experience
          </ReactScrollLink>
          <ReactScrollLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-20}
            className="cursor-pointer transition duration-300 ease-in-out monokai-orange hover:monokai-bg-orange hover:monokai-white rounded me-2 py-1 px-2 md:py-2 md:px-4"
          >
            Projects
          </ReactScrollLink>
          <a
            href={info.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out monokai-red hover:monokai-bg-red hover:monokai-white rounded me-2 py-1 px-2 md:py-2 md:px-4"
          >
            Resume
          </a>
        </div>
      </div>

      {/* About */}
      <h1 className="text-center text-5xl lg:text-7xl sm:text-9xl font-bold mb-2 name-header">{info.name}</h1>
      <h3 className="text-center text-2xl mb-2 monokai-yellow">{info.title}</h3>
      <p className="text-center mb-2 monokai-white">{info.location}</p>
      <div className="text-center mb-20">
        <Link href={`${info.github}`} target="_blank">
          <FiGithub></FiGithub>
        </Link>
        <Link href={`${info.linkedin}`} target="_blank">
          <FiLinkedin></FiLinkedin>
        </Link>
        <Link href={`mailto:${info.email}`}>
          <FiMail></FiMail>
        </Link>
      </div>
      <p className="mb-40 text-center text-xl monokai-white">{info.description}</p>

      {/* Experience */}
      <h1 className="monokai-green text-4xl text-center text-bold mb-10" id="experience">
        Experience
      </h1>
      <div className="mb-20">
        <ExperienceAccordion />
      </div>

      {/* Projects */}
      <h1 className="monokai-orange text-4xl text-center text-bold mb-10" id="projects">
        Projects
      </h1>
      <div className="mb-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project}></ProjectCard>
        ))}
      </div>

      {/* Contact */}
      <h1 className="monokai-red text-4xl text-center text-bold mb-10" id="contact">
        Contact
      </h1>
      <div className="mb-40 text-center">
        <Link href={`${info.github}`} target="_blank">
          <FiGithub className="text-2xl"></FiGithub>
        </Link>
        <Link href={`${info.linkedin}`} target="_blank">
          <FiLinkedin className="text-2xl"></FiLinkedin>
        </Link>
        <Link href={`mailto:${info.email}`}>
          <FiMail className="text-2xl"></FiMail>
        </Link>
      </div>
    </div>
  )
}

export default App

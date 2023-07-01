import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { ProjectItem } from '../constants'

type ProjectCardProps = {
  project: ProjectItem
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full max-w-full lg:flex shadow-lg rounded-md mb-6 monokai-bg-black-2">
      <div
        className="lg:h-auto lg:w-4/12 flex-none bg-contain bg-no-repeat bg-center rounded-t-md lg:rounded-r-none lg:rounded-l text-center overflow-hidde"
        style={{ backgroundImage: `url(${project.image})` }}
        title={project.imageAlt}
      ></div>
      <div className="rounded-md lg:rounded-l-none lg:border-l-0 p-6 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="monokai-white font-bold text-xl mb-8">
            {project.title} <span className="text-sm font-normal monokai-gray">{project.date}</span>
          </div>
          <p className="monokai-yellow text-base">{project.description}</p>
        </div>
        <div className="mb-4">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="inline-block monokai-bg-gray monokai-white rounded-full px-3 py-1 text-sm mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex">
          <a
            className="inline-block transition duration-300 ease-in-out item-center monokai-blue hover:monokai-white hover:monokai-bg-blue py-2 px-4 rounded me-2"
            href={project.link}
            target="_blank"
          >
            <div className="flex items-center justify-center">
              <span className="mr-1">Site</span>
              <FiExternalLink />
            </div>
          </a>
          {project.github !== '' ? (
            <a
              className="inline-block transition duration-300 ease-in-out monokai-blue hover:monokai-white hover:monokai-bg-blue py-2 px-4 rounded"
              href={project.github}
              target="_blank"
            >
              <div className="flex items-center justify-center">
                <FiGithub className="mr-1" />
                <span className="mr-1">GitHub</span>
              </div>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

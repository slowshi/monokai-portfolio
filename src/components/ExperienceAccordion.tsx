import { experience } from '../constants'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from './Accordion'
import { FiExternalLink } from 'react-icons/fi'

export default function ExperienceAccordion() {
  return (
    <Accordion>
      {experience.map((project, index) => (
        <AccordionItem key={index}>
          <AccordionHeader>
            <span className="flex justify-between w-full monokai-green px-4 py-2">
              <span>
                <span className="monokai-white font-bold">{project.title}</span>{' '}
                <span className="block md:inline-block text-md">{project.employer}</span>
              </span>
              <span className="hidden md:inline-block">{project.date}</span>
            </span>
          </AccordionHeader>
          <AccordionBody>
            <div className="p-4 flex justify-between">
              <div>
                <div className="mb-8">
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
                      <FiExternalLink></FiExternalLink>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hidden md:inline-block">
                <div
                  className="rounded-md bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${project.image})`, width: '100px', height: '100px' }}
                  title={project.imageAlt}
                ></div>
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

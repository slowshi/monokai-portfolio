import React, { ReactNode, FC } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface AccordionProps {
  children: ReactNode
}

interface AccordionItemProps {
  isActive?: boolean
  onClick?: () => void
  children: ReactNode
}

interface AccordionHeaderProps {
  children: ReactNode
}

interface AccordionBodyProps {
  isActive?: boolean
  children: ReactNode
}

const Accordion: FC<AccordionProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="space-y-2">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
          isActive: activeIndex === index,
          onClick: () => toggleAccordion(index),
        }),
      )}
    </div>
  )
}

const AccordionHeader: FC<AccordionHeaderProps> = ({ children }) => <h3 className="w-full">{children}</h3>
AccordionHeader.displayName = 'AccordionHeader'

const AccordionBody: FC<AccordionBodyProps> = ({ isActive, children }) => {
  const bodyRef = React.useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = React.useState(0)
  React.useEffect(() => {
    setMaxHeight(bodyRef.current?.scrollHeight || 0)
  }, [isActive])

  return (
    <div
      ref={bodyRef}
      className="overflow-hidden transition-all duration-300 ease-in-out"
      style={{ maxHeight: isActive ? `${maxHeight}px` : 0 }}
    >
      {children}
    </div>
  )
}
AccordionBody.displayName = 'AccordionBody'

const AccordionItem: FC<AccordionItemProps> = ({ isActive, onClick, children }) => {
  const headerChild = React.Children.toArray(children).find((child) => {
    return React.isValidElement(child) && (child.type as React.ComponentType)?.displayName === 'AccordionHeader'
  }) as React.ReactElement<AccordionHeaderProps> | undefined

  const bodyChildren = React.Children.toArray(children).filter((child) => {
    return React.isValidElement(child) && (child.type as React.ComponentType)?.displayName === 'AccordionBody'
  })

  return (
    <div className="rounded p-2 monokai-bg-black-2 shadow-lg">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => onClick?.()}>
        {headerChild}
        {isActive ? <FiChevronUp className="ms-2 w-5 h-5" /> : <FiChevronDown className="ms-2 w-5 h-5" />}
      </div>
      {React.Children.map(bodyChildren, (child) =>
        React.cloneElement(child as React.ReactElement<AccordionBodyProps>, { isActive }),
      )}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionHeader, AccordionBody }

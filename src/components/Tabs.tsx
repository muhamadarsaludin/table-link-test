import { useState } from "react"
import clsx from "clsx"
import "./tabs.css"

type TabsProps = {
  labels: string[]
  selectedIndex?: number
  onSelect?: (index: number) => void
}

export default function Tabs({labels, selectedIndex, onSelect}: TabsProps) {
  const [active, setActive] = useState(selectedIndex || 0)
  return (
    <div className="tabs">
      {labels.map((label, index) => (
        <a 
          href="" 
          key={index}
          className={clsx("tab", index === active ? 'm-active' : '')}
          onClick={(e) => {
            e.preventDefault()
            setActive(index)
            onSelect?.(index)
          }}
        >
          {label}
        </a>
      ))}
    </div>
  )
}
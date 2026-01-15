import "./modal.css"
import { lockScroll, unlockScroll } from "../../utils/scroll-lock"
import { use, useEffect } from "react"

type ModalProps = {
  isOpen: boolean
  title: string
  content: string
  onClose: () => void 
}

export default function Modal({
  isOpen,
  title,
  content,
  onClose
}: ModalProps) {

  useEffect(() => {
    if (isOpen) {
      lockScroll("modal")
    } else {
      unlockScroll("modal")
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          {content}
        </div>
      </div>
    </div>
  )
}
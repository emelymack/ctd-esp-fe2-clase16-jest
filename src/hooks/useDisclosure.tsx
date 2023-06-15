import { useState } from "react";

export default function useDisclosure () {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    !isOpen && setIsOpen(true)
  }

  const close = () => {
    isOpen && setIsOpen(false)
  }

  const toggle = () => setIsOpen((prevState) => !prevState)

  return {
    isOpen: isOpen,
    isClosed: !isOpen,
    open,
    close,
    toggle
  }
}
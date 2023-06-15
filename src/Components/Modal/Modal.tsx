import React from 'react'

interface Props {
  visible: boolean
}
const Modal = ({visible} : Props) => {
  return (
    <div>
      {visible ? <>Modal</> : null}
    </div>
  )
}

export default Modal
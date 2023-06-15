import React from 'react'

interface Props {
  visible: boolean,
  close: () => void
}
const Modal = ({visible, close} : Props) => {
  return (
    <div>
      {visible ? 
      <>
        <h3>Modal</h3>
        <button onClick={close}>Close</button>
      </> : null}
    </div>
  )
}

export default Modal
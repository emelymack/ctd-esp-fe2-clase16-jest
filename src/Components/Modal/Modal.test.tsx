import { render, screen } from "@testing-library/react"
import Modal from "./Modal"
import userEvent from "@testing-library/user-event"

describe("Modal component", () => {
  const text = "Modal"

  describe('When visible prop is false', () => { 
    it('Should not be in the document', () => {
      render(<Modal visible={false} close={() => {}} />)
     
      const modal = screen.queryByText(text)

      expect(modal).not.toBeInTheDocument()
    })
  })

  describe('When visible prop is true', () => {
    it('Should be in the document', () => {
      render(<Modal visible={true} close={() => {}} />)
    
      const modal = screen.getByText(text)
  
      expect(modal).toBeInTheDocument()
    })
    
    it('Should call close method when user clicks Close button', () => {
      const closeModal = jest.fn()

      render(<Modal visible={true} close={closeModal} />)

      const button = screen.getByRole("button", {name: 'Close'});
      userEvent.click(button)
      expect(closeModal).toBeCalled();
    })
  })

})

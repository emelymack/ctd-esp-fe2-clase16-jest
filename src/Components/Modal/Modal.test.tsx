import { render, screen } from "@testing-library/react"
import Modal from "./Modal"

describe("Modal component", () => {
  const text = "Modal"

  describe('When visible prop is false', () => { 
    it('Should not be in the document', () => {
      render(<Modal visible={false} />)
     
      const modal = screen.queryByText(text)

      expect(modal).not.toBeInTheDocument()
    })
  })

  describe('When visible prop is true', () => {
    it('Should be in th edocument', () => {
      render(<Modal visible={true} />)
    
      const modal = screen.getByText(text)
  
      expect(modal).toBeInTheDocument()
    })
    
  })

})

import { act, renderHook } from "@testing-library/react"
import useDisclosure from "./useDisclosure"

describe('useDisclosure hook', () => {
  describe('When it mounts', () => {
    it('Should be closed', () => {
      const {result} = renderHook(() => useDisclosure())
      
      expect(result.current.isOpen).toBe(false)
    })
  })

  describe('When open is called', () => {
    it('Should be open', () => {
      const {result} = renderHook(() => useDisclosure())

      act(() => {
        result.current.open()
      })
      expect(result.current.isOpen).toBe(true)
      expect(result.current.isClosed).toBe(false)
    })
  })

  describe('When close is called', () => {
    it('Should be closed', () => {
      const {result} = renderHook(() => useDisclosure())

      act(() => {
        result.current.close()
      })
      expect(result.current.isOpen).toBe(false)
      expect(result.current.isClosed).toBe(true)
    })
  })

  describe('When toggle is called', () => {
    it('Should be opposite to the current state', () => {
      const {result} = renderHook(() => useDisclosure())
      const prevState = result.current.isOpen

      act(() => {
        result.current.toggle()
      })

      expect(result.current.isOpen).toBe(!prevState)
    })
  })
})
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/pages/index'
 
describe('Home Page', () => {
  it('renders Hello World!', () => {
    render(<Page />)
 
    const text = screen.getByText('Hello world!')
 
    expect(text).toBeInTheDocument()
  })
})
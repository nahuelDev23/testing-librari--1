import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import { Toggable } from './Toggable'

describe('<Toggable/>', () => {
    let setup = () => render(<Toggable />);

    beforeEach(() => {
        
    })

    test('renders content', () => {
        const { container } = setup()
        expect(container).toHaveTextContent('Toggable')
    })

    test('should have display none', () => {
        setup()
        const element = screen.getByText('hola')
        expect(element).toHaveStyle('display: none')

        const button = screen.getByText('toggle')
        fireEvent.click(button)
        expect(element).toHaveStyle('display: block')
        

    })
})
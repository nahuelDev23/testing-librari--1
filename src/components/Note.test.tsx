import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import { Note } from './Note'

test('renders content', () => {
    const note = {
        content: 'This is a note',
        important: true
    }

    const view = render(<Note note={note} toggleImportance={() => { }} />)

    // screen.getByText('This is a note')
    // screen.getByText('make not important')

    // expect(view.container).toHaveTextContent('This is a note')

})

test('clicking the button calls event handler once', () => {
    const note = {
        content: 'This is a note',
        important: true
    }

    const toggleImportance = jest.fn()
    render(<Note note={note} toggleImportance={toggleImportance} />)

    const button = screen.getByText('make not important')
    fireEvent.click(button)

    // expect(toggleImportance.mock.calls.length).toBe(1)
    expect(toggleImportance).toHaveBeenCalledTimes(1)
})



test('if note importan is false, label is make  important',()=>{
    const note ={
        content:'This is a note',
        important:false
    }
    const toggleImportance = jest.fn()
    render(<Note note={note} toggleImportance={toggleImportance} />)

    const button = screen.getByText('make important')

    expect(button).toHaveTextContent('make important')
})
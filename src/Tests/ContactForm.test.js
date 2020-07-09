import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from '../components/ContactForm'

test('Fill out all required forms', () => {
    render(<ContactForm />);

    const fnInput = screen.getByLabelText(/first name/i)
    const lnInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)

    fireEvent.change(fnInput, { target: { value: 'Nate' } })
    fireEvent.change(lnInput, { target: { value: 'Cowley' } })
    fireEvent.change(emailInput, { target: { value: 'Nate@gmail.com' } })
    fireEvent.change(messageInput, { target: { value: 'This is the testing message please dont fail!' } })
    
})

test('Submit the form', () => {
    render(<ContactForm />);

    const fnInput = screen.getByLabelText(/first name/i)
    const lnInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)

    fireEvent.change(fnInput, { target: { value: 'Nate' } })
    fireEvent.change(lnInput, { target: { value: 'Cowley' } })
    fireEvent.change(emailInput, { target: { value: 'Nate@gmail.com' } })
    fireEvent.change(messageInput, { target: { value: 'This is the next message...PLEASE dont fail!' } })

    const submitButton = screen.getByTestId(/submit/i)
    fireEvent.click(submitButton)

    const newInput = screen.getByText(/cowley/i)
    expect(newInput).toBeInTheDocument()
})


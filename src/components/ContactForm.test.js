import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';


test('ContactForm renders without errors', () => {
    const {getByText} = render(<ContactForm />)
})

test('test for form labels', () => {
    const {getByLabelText} = render(<ContactForm/>)

    getByLabelText(/first name*/i);
    getByLabelText(/last name*/i)
})


test('Form can be filled out and submitted', () => { 
    
    const {getByLabelText, getByTestId} = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first name*/i)
    const lastNameInput = getByLabelText(/last name*/i)
    const emailInput = getByLabelText(/email/i)
    const message = getByLabelText(/message/i)



    fireEvent.change(firstNameInput, {target: { value: 'Ted'},
    })
    fireEvent.change(lastNameInput, {target: { value: 'Cruz'},
    })
    fireEvent.change(emailInput, {target: {value: 'email@email.com'},})
    fireEvent.change(message, {target: {value: 'hello world'},
    })
})

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledBtn,
  StyledContactDiv,
  StyledContactForm,
  StyledInput,
  StyledLabel,
  StyledSpan,
} from './ContactFormStyled';

import { selectContacts } from 'redux/selectors';
import { addContacts } from 'redux/operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onNameChange = event => {
    setName(event.target.value);
  };

  const onPhoneChange = event => {
    setPhone(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (
      contacts.some(value => value.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContacts({ name, phone }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <StyledContactDiv>
      <StyledContactForm onSubmit={handleSubmit}>
        <StyledLabel>
          <StyledSpan>Name</StyledSpan>
          <StyledInput
            value={name}
            onChange={onNameChange}
            type="text"
            name="name"
            placeholder="Your name..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledSpan>Number</StyledSpan>
          <StyledInput
            value={phone}
            onChange={onPhoneChange}
            type="tel"
            name="phone"
            placeholder="Your number..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabel>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledContactForm>
    </StyledContactDiv>
  );
}

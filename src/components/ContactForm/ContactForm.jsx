import { nanoid } from 'nanoid';
import TextField from '@mui/material/TextField';

import React from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/auth/contactsApi';

import style from './ContactForm.module.css';

const ContactForm = () => {
  const id = nanoid();

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const addNewContact = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    const normalizedName = name.toLowerCase();
    let nameOntheList = false;

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    data.forEach(contact => {
      if (contact.name.toLowerCase() === normalizedName) {
        alert(`${contact.name} is already in contacts`);
        nameOntheList = true;
      }
    });

    if (nameOntheList) return;

    addContact(newContact);
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={addNewContact}>
      <label htmlFor={id} className={style.formText}></label>
      
      <TextField
        className={style.formInput}
        label="Name"
        id="demo-helper-text-misaligned"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={id} className={style.formText}></label>
      <TextField
        className={style.formInput}
        label="Phone Number"
        id="demo-helper-text-misaligned"
        required
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       
      />
      <button className={style.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

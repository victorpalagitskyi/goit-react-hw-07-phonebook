import { ErrorMessage, Field, Form, Formik } from "formik";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from "redux/operation";

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => { 
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();


    const handleSubmit = ({ name, number }, action) => {
    
    if (contacts.find(contact => contact.name === name) !== undefined) {
      Notiflix.Notify.failure(`${name} already in your contact book`);
      return;
    } else
          
      dispatch(createContact(name, number));
    Notiflix.Notify.success(`You added ${name} to phonebook`);
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    
    >
      <Form autoComplete="off">
        <label>
          <p>Name</p>
          <Field type="text" name="name" />
          <ErrorMessage component="p"  name="name" />
        </label>

        <label>
          <p>Number</p>
          <Field type="tel" name="number" />
          <ErrorMessage
            component="p"
            name="number"
          />
        </label>
        <br></br>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
export default ContactForm
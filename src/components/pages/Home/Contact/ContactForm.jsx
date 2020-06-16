import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';

import EMAIL_FIELD from './email-field-name';

import { useForm } from '../../../../hooks';
import useModal from '../../../Modal';
import Button from '../../../Button';
import { InputControl, TextAreaControl, HoneyPotInput } from '../../../Form';
import sendData from '../../../../services/sendData';

import ModalContent from './ModalContent';

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 40;
const EMAIL_MIN_LENGTH = 3;
const EMAIL_MAX_LENGTH = 254;
const MESSAGE_MIN_LENGTH = 2;
const MESSAGE_MAX_LENGTH = 256;

const validationSchema = {
  email: {},
  name: {
    required: 'Name is required!',
    validate: (value) =>
      value.length >= NAME_MIN_LENGTH && value.length <= NAME_MAX_LENGTH
        ? ''
        : `Name length should be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH}.`,
    pattern: {
      value: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
      message: 'Only symbols and space allowed',
    },
  },
  [EMAIL_FIELD]: {
    required: true,
    validate: (value) => {
      if (value.length < EMAIL_MIN_LENGTH || value.length > EMAIL_MAX_LENGTH) {
        return `Name length should be between ${EMAIL_MIN_LENGTH} and ${EMAIL_MAX_LENGTH}.`;
      }
      if (!EmailValidator.validate(value)) {
        return 'Invalid E-mail.';
      }
      return '';
    },
  },
  message: {
    required: true,
    validate: (value) =>
      value.length >= MESSAGE_MIN_LENGTH && value.length <= MESSAGE_MAX_LENGTH
        ? ''
        : `Message length should be between ${MESSAGE_MIN_LENGTH} and ${MESSAGE_MAX_LENGTH}.`,
  },
};

/*
let timer;
const timeout = (ms) =>
  new Promise((resolve) => {
    timer = setTimeout(resolve, ms);
    return timer;
  });

async function sendDataMock() {
  await timeout(4000);
  // throw new Error('test error');
}
*/

const ContactForm = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const onClose = () => {
    if (loading) {
      // clearTimeout(timer);
      setLoading(false);
    }
  };

  const [Modal, openModal, closeModal] = useModal('root', { onClose });

  const onSubmitForm = async (values) => {
    setError('');
    setLoading(true);
    try {
      openModal();
      console.warn(values);
      // await sendDataMock();
      return await sendData(values);
    } catch (err) {
      // clearTimeout(timer);
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
      closeModal(10000);
    }
  };

  const { values, errors, handleOnChange, handleOnSubmit /* , disable */ } = useForm(
    validationSchema,
    onSubmitForm
  );

  return (
    <>
      <Modal>
        <ModalContent error={error} loading={loading} handleButtonClick={closeModal} />
      </Modal>

      <form onSubmit={handleOnSubmit} noValidate>
        <HoneyPotInput value={values.email} onChange={handleOnChange} />
        <InputControl
          label="Name"
          name="name"
          required={validationSchema.name.required}
          value={values.name}
          error={errors.name}
          onChange={handleOnChange}
        />
        <InputControl
          label="E-mail"
          name={EMAIL_FIELD}
          type="email"
          required={validationSchema[EMAIL_FIELD].required}
          value={values[EMAIL_FIELD]}
          error={errors[EMAIL_FIELD]}
          onChange={handleOnChange}
        />
        <TextAreaControl
          label="Message"
          name="message"
          required={validationSchema.message.required}
          value={values.message}
          error={errors.message}
          onChange={handleOnChange}
        />
        <Button type="submit" primary>
          Submit
        </Button>
        <Button secondary onClick={onSubmitForm}>
          test
        </Button>
      </form>
    </>
  );
};

export default ContactForm;

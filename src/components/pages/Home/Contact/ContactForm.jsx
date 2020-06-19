import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const validationSchema = {
    email: {},
    name: {
      required: `${t('contact-form.name')} ${t('contact-form.reqired')}`,
      validate: (value) =>
        value.length >= NAME_MIN_LENGTH && value.length <= NAME_MAX_LENGTH
          ? ''
          : `Name length should be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH}.`,
      pattern: {
        value: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
        message: t('contact-form.onlysymbols'),
      },
    },
    [EMAIL_FIELD]: {
      required: `E-mail ${t('contact-form.reqired')}`,
      validate: (value) => {
        if (value.length < EMAIL_MIN_LENGTH || value.length > EMAIL_MAX_LENGTH) {
          return `E-mail length should be between ${EMAIL_MIN_LENGTH} and ${EMAIL_MAX_LENGTH}.`;
        }
        if (!EmailValidator.validate(value)) {
          return t('contact-form.ivalidemail');
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
          label={t('contact-form.name')}
          name="name"
          required={validationSchema.name.required}
          placeholder={t('contact-form.yourname')}
          value={values.name}
          error={errors.name}
          onChange={handleOnChange}
        />
        <InputControl
          label="E-mail"
          name={EMAIL_FIELD}
          type="email"
          required={validationSchema[EMAIL_FIELD].required}
          placeholder={t('contact-form.youremail')}
          value={values[EMAIL_FIELD]}
          error={errors[EMAIL_FIELD]}
          onChange={handleOnChange}
        />
        <TextAreaControl
          label={t('contact-form.message')}
          name="message"
          required={validationSchema.message.required}
          placeholder={t('contact-form.yourmessage')}
          value={values.message}
          error={errors.message}
          onChange={handleOnChange}
        />
        <Button type="submit" primary>
          {t('contact-form.send')}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;

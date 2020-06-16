import React from 'react';

import Spinner from '../../../Spinner';
import Button from '../../../Button';
import Message from '../../../Message';
import { ModalHeader, ModalFooter, ModalBody } from '../../../Modal';

const ModalContent = ({ loading, error, handleButtonClick }) => {
  if (error) {
    return (
      <>
        <ModalHeader>Error</ModalHeader>
        <ModalBody>
          <Message type="error">
            <b>{error}</b>
            <p>
              Sorry. Error happened while your message sending.
              <br />
              Please, try again later or reach us in another way.
            </p>
          </Message>
        </ModalBody>
      </>
    );
  }
  if (loading) {
    return (
      <>
        <ModalHeader>Sending</ModalHeader>
        <ModalBody>
          <p>Please, wait...</p>
        </ModalBody>
        <ModalFooter justify="center">
          <Spinner width={2} />
          <Button onClick={handleButtonClick} primary>
            Cancel
          </Button>
        </ModalFooter>
      </>
    );
  }
  return (
    <>
      <ModalHeader>Success</ModalHeader>
      <ModalBody>
        <Message type="success">
          <p>Thank you for your message!</p>
          <p>We will response you in a nearest time.</p>
        </Message>
      </ModalBody>
    </>
  );
};

export default ModalContent;

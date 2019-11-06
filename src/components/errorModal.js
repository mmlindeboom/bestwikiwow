import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";
import { KIND } from 'baseui/button'


export default function({isOpen, setIsOpen}) {
  return (

    <Modal
      onClose={() => setIsOpen(false)}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
    >
      <ModalHeader>Error!</ModalHeader>
      <ModalBody>
        We've detected intruders.
      </ModalBody>
      <ModalFooter>
        <ModalButton onClick={() => setIsOpen(false)}>Don't Panic</ModalButton>
      </ModalFooter>
    </Modal>
  )
}
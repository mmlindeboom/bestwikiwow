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
      <ModalHeader>THIS SITE IS A JOKE</ModalHeader>
      <ModalBody>
        This site uses an open API that provides sentences from 3 random wikihow articles. This is for technology demonstration purposes, only.
      </ModalBody>
      <ModalFooter>
        <ModalButton onClick={() => setIsOpen(false)}>Okay</ModalButton>
      </ModalFooter>
    </Modal>
  )
}
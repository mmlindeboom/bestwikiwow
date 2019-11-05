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


export default function({isOpen, setIsOpen, searchRef}) {
  const handleCloseandFocus = function() {
    setIsOpen(false)
    debugger
    searchRef.current.focus()
  }

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
        <ModalButton onClick={() => window.location.replace('http://www.google.com')}>Get me out of here</ModalButton>
      </ModalFooter>
    </Modal>
  )
}
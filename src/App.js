import React, { useEffect, useState, useRef } from 'react';
import { Spinner } from 'baseui/spinner';
import { styled } from 'baseui';

import api from './lib/api'
import Base from './components/base'

import SearchBar from './components/searchBar'
import SearchResults from './components/searchResults'
import VideoBg from './components/videoBg'
import Modal from './components/modal'


import ErrorModal from './components/errorModal'
import useAPI from './lib/useAPIHook'


const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: "1200px",
  margin: "0 auto"
});




function App() {
  // Content State
  const [steps, setSteps] = useState(null)
  const [images, setImages] = useState(null)
  const [query, setQuery] = useState(null)

  // Modal State
  const [modalOpen, setModalOpen] = useState(false)


  const runQuery = async function() {
    const textRes = await fetch(`${api.url}/steps`, {
      headers: api.headers
    })
    const imageRes = await fetch(`${api.url}/images`, {
      headers: api.headers
    })

    const textData = await textRes.json()
    const imageData = await imageRes.json()
    setSteps(textData)
    setImages(imageData)
  }


  return (
    <Base>
      <SearchBar runQuery={runQuery} setQuery={setQuery} />

      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}></Modal>

      <Centered>
        <div>

          {!steps && <VideoBg setModalOpen={setModalOpen}/>}

          {steps && images && <SearchResults steps={steps} images={images} query={query} loading={false} />}

        </div>

        </Centered>
    </Base>
  );
}

export default App;

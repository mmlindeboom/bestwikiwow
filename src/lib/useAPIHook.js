import { useEffect, useState } from 'react'
import api from '../lib/api'

export default () => {
  const [steps, setSteps] = useState(null)
  const [images, setImages] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState(null)


  useEffect(() => {

    const runFetch = async () => {
      setError(false)
      setLoading(true)

      try {
        const textRes = await fetch(`${api.url}/steps`, {
          headers: api.headers
        })
        const imageRes = await fetch(`${api.url}/images`, {
          headers: api.headers
        })
        const stepData = await textRes.json()
        const imageData = await imageRes.json()

        setSteps(stepData)
        setImages(imageData)

        } catch (error) {
          setError(true)
        }

        setLoading(false)
    }

    // don't run fetch is query is null
    if (query) runFetch()
  }, [query])


    return [setQuery, {loading, error, data: {query, steps, images}} ]
}
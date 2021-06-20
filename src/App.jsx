import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Filters from "./components/filters/filters"
import Pictures from "./components/pictures/pictures"
import Footer from "./components/footer/footer"

import { fetchPictures } from "./store/actions"
import FullImage from "./components/full-image/full-image"

function App() {
  const dispatch = useDispatch()
  const pictures = useSelector((state) => state.app.pictures)

  useEffect(() => {
    dispatch(fetchPictures())
  }, [dispatch])

  return (
    <main className="App">
      <Filters />
      <Pictures pictures={pictures} />
      <FullImage />
      <Footer />
    </main>
  )
}

export default App

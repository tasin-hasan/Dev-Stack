import { Suspense } from "react"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import Technology from "./components/Technologies/Technology"
import Footer from "./components/Footer"

function App() {
  
 

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Suspense>
        <Technology></Technology>
      </Suspense>

      <Footer></Footer>

    </>
  )
}

export default App

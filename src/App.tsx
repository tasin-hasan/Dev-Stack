import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import type { IDataType } from "./type"
import TechnologySection from "./components/Technologies/TechnologySection"


const fetchData = async():Promise<IDataType[]> => {
  const response = await fetch("/data.json");

  const data = await response.json();

  return data;
}


function App() {

  const [techPromiseData] = useState<Promise<IDataType[]>>(fetchData());
 

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Suspense fallback={<h2>Loading......</h2>}>
        <TechnologySection techPromiseData = {techPromiseData}></TechnologySection>
      </Suspense>

      <Footer></Footer>

    </>
  )
}

export default App

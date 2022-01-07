import {Header, Nav, Section, Footer} from "components"
import {Loading} from "components";
import { IProjectData } from "interface/project.interface";
import { useEffect, useState } from "react";
import { apiProjeto } from "services/data";




const Home = () => {
  // eslint-disable-next-line
 const [projects, setProjects] = useState<IProjectData[]>()
 const [isloading, setIsLoading] = useState(true)


  useEffect(() => {
   async function fetchData() {
     const response = await apiProjeto.index()
     setProjects(response.data)
     setIsLoading(false)
   }
   fetchData()
  }, [])

  return (
  <>
  {
    isloading ? (
    <Loading/>
    ) : (
    <>
      <Header />
      <Nav />
      <Section/>
      <Footer/>
    </>
    )
  }
  </>
  );
}
  export default Home;


import {Header, Nav, Section, Footer} from "components"
import { IProjectData } from "interface/project.interface";
import { useEffect, useState } from "react";
import { apiProjeto } from "services/data";




const Home = () => {
 const [projects, setProjects] = useState<IProjectData[]>()

  useEffect(() => {
   async function fetchData() {
     const response = await apiProjeto.index()
     setProjects(response.data)
   }
   fetchData()
  }, [])

  return (
  <>
    <Header />
    <Nav />
    <Section/>
    <Footer/>
  </>
        
        
  );
};
   export default Home; 

import {Header, NavAdm, Section, Footer} from "components"
import {Loading} from "components";
import { IProjectData } from "interface/project.interface";
import { useEffect, useState } from "react";
import { FcAddDatabase } from "react-icons/fc";
import { apiProjeto } from "services/data";
import { BsPencilSquare, BsTrash2 } from "react-icons/bs";
import Button from "styles/Button";


const AdmProject= () => {
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
      <NavAdm />
      <Section/>
      <div>
        <Button type="button">
            <FcAddDatabase/>
        </Button>
      </div>
      <table>
              <thead>
                <tr>
                  <th>E-mail</th>
                  <th>Projeto</th>
                  <th>Editar</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                {projects &&
                  projects.map((item) => (
                    <tr key={item.id}>
                      <td>{item.user.email}</td>
                      <td>{item.locais}</td>
                      <td>
                        <Button
                          type="button"
                          bgColor="edit"
                          onClick={() =>
                            history.push(`/adm/project/${item.id}`)
                          }
                        >
                          <BsPencilSquare />
                        </Button>
                      </td>
                      <td>
                        <Button
                          type="button"
                          bgColor="remove"
                          onClick={() => item.id && handleDelete(item.id)}
                        >
                          <BsTrash2 />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
      <Footer/>
    </>
    )
  }
  </>
  );
}
  export default AdmProject;


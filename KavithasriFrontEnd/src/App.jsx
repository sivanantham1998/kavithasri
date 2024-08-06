import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Create from "./Create"
import Update from "./Update"
import Usereducer from "./Usereducer"
export default function App()
{
  return(
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Create />}/>
          <Route path="/edit" element={<Update/>}/>
          <Route path="reduce" element={<Usereducer/>}/>
        </Routes>
       </BrowserRouter>
    </>
  )
}
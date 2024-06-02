import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./component/MainPage";
import DataScience from "./component/DataScience";
import CyberSecurity from "./component/CyberSecurity";
import Career from "./component/Career";
import All from "./component/All";
import FullStack from "./component/FullStack";


const router= createBrowserRouter([
 {
  path:"/",
  element:<All/>
 },
 {
  path:"/fullStack",
  element:<FullStack/>
 },
 {
  path:"/dataScience",
  element:<DataScience/>
 },
 {
  path:"/cyberSecurity",
  element:<CyberSecurity/>
 },
 {
  path:"/career",
  element:<Career/>
 },
])

const App=()=>{
  return ( 
<div>
<MainPage />
<RouterProvider router={router}/>
  </div>      
)

}
export default App;
import Career from "./Career";
import CyberSecurity from "./CyberSecurity";
import DataScience from "./DataScience";
import FullStack from "./fullStack";

const All = () => {
    return (
       <div><h5>Full Stack</h5>
       <FullStack/>

       <div><h5>Data science</h5>
       <DataScience/>
       </div>

       <div><h5>Cyber Security</h5>
       <CyberSecurity/>
       </div>

       <div><h5>Career</h5>
       <Career/>
       </div>

       </div>
       

    )
}
export default All;
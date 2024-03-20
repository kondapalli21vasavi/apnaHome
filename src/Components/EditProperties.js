import { useParams } from "react-router-dom";
import Input from "./input";

function EditProperties(){
    const {data}=useParams();
    const decodedData=JSON.parse(decodeURIComponent(data))
    return(
        <div>
            <Input data={decodedData} />
        </div>
    )
}

export default EditProperties;
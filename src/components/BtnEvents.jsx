import { Link } from "react-router-dom"

const BtnEvents = ({key,btn,id}) =>{

    return (
        <Link className="btn btn-teco text-light me-2 ws-nowap" to={`/streams/${id}`}>{btn}</Link>
    )
}
export default BtnEvents
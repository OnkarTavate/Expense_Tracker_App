import { Component } from "react"
import HelloComponent from "./HelloComponent"

// let MessageComponent = () => {
//     return(
//         <div>
//             <HelloComponent 
//             studname = "Onkar"
//             course = "CDAC"/>
//         </div>
//     )
// }


class MessageComponent extends Component{
    render(){
        return(
            <div>
            <HelloComponent 
            studname = "Onkar"
            course = "CDAC"/>
        </div>
        )
    }
}
export default MessageComponent
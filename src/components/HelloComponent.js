// let HelloComponent = (props) => {
//     return <h3>Hello {props.studname} and you are doing {props.course}</h3>
// }

import { Component } from "react";

class HelloComponent extends Component{
    render(){
        return <h3>Hello {this.props.studname} and you are doing {this.props.course}</h3>
    }
}
export default HelloComponent
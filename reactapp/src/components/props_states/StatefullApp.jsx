import React from 'react'
import {Message} from './Message'

class StatefulApp extends React.Component {
    constructor(props) {
       super(props);		
       this.state = {
          data: 
          [
             {
                "id":1,
                "name":"Krishnam",
                "age":"36"
             },
                 
             {
                "id":2,
                "name":"Anvi",
                "age":"30"
             },
                 
             {
                "id":3,
                "name":"Ashrith",
                "age":"6"
             }
          ]
       }
    }
    render()
    {
        return(
            <div>
            <Message data="ACSS grabbed new React Project"/>
            <h3 className="b-">Developers Enrolled            </h3>
            <table className='table table-hover table-striped'>
            <tbody>
                    {this.state.data.map((person, index) =>
                        <TableRow key = {index} data = {person} />)
                    }
                 </tbody>
            </table>
            </div>
        );
    }
}


const TableRow = (props)=>{
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.age}</td>
        </tr>
    )
}

export default StatefulApp;



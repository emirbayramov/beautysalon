import React,{FC,useState} from 'react'
import State from './SettingsStates'
type Props = {
  setState:any
}

const mastersseed = [
  {
    name:'Masha',
    surname:'Bayramova',
    phone:'+905526969192'
  },
  {
    name:'Ulya',
    surname:'Ulyanova',
    phone:'+905526923122'
  },
  {
    name:'Meri',
    surname:'Meriyeva',
    phone:'+905524359192'
  }
]

const Masters:FC<Props>=({setState})=>{
    const [masters,setMasters] = useState(mastersseed)
    return <div className="container-fluid">
      <div className="row">
        <div className="col-2 btn btn-outline-primary " onClick={()=>setState(State.Main)}>
          Back
        </div>
        <div className="col-10">
        </div>
      </div>
      <table className="table table-bordered table-responsive-sm">
            <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone</th>
                <th></th>
            </tr>
            </thead>
            <tbody >
              {masters.map((master)=>{
                return <tr>
                  <td>{master.name}</td>
                  <td>{master.surname}</td>
                  <td>{master.phone}</td>
                  <td>× +</td>
                </tr>
              })}
            </tbody>
      </table>
    </div>
}

export default Masters;

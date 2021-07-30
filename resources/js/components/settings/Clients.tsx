import React,{FC,useState} from 'react'
import State from './SettingsStates'
type Props = {
  setState:any
}

const clientsseed = [
  {
    name:'Anna',
    surname:'Mokina',
    phone:'+905526969192'
  },
  {
    name:'Katya',
    surname:'Berestova',
    phone:'+905526923122'
  },
  {
    name:'Maria',
    surname:'Torgasheva',
    phone:'+905524359192'
  }
]

const Clients:FC<Props>=({setState})=>{
  const [clients,setClients] = useState(clientsseed)
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
              {clients.map((client)=>{
                return <tr>
                  <td>{client.name}</td>
                  <td>{client.surname}</td>
                  <td>{client.phone}</td>
                  <td>× +</td>
                </tr>
            })}
          </tbody>
    </table>
  </div>
}

export default Clients;

import React,{FC,useState} from 'react'
import State from "./SettingsStates"
type Props = {
  setState:any
}

const servicesseed =[
  {
    name:"Protez",
    price:100,
    description:"protez tirnak"
  },
  {
    name:"Pedikur",
    price:200,
    description:"ayak tirnak"
  },
  {
    name:"Manikur",
    price:150,
    description:"manikur tirnak"
  }
]

const Services:FC<Props>=({setState})=>{
  const [services,setServices] = useState(servicesseed)
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
          <th>Description</th>
              <th>Name</th>
              <th>Phone</th>
              <th></th>
          </tr>
          </thead>
          <tbody >
            {services.map((service)=>{
              return <tr>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>{service.price}</td>
                <td>× +</td>
              </tr>
            })}
          </tbody>
    </table>
  </div>
}

export default Services;

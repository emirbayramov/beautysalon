import React,{FC,useState} from 'react'
import ReactDOM from 'react-dom';

const masha = [
  {
    name:'Anna',
    surname:'Ahmatova',
    phone:'+905526969192',
    service:"Manikur"
  },
  {
    name:'Maria',
    surname:'Berestova',
    phone:'+905526923122',
    service:'Pedikur'
  },
  {
    name:'Meri',
    surname:'Meriyeva',
    phone:'+905524359192',
    service:'Protez'
  }
]

const meri = [
  {
    name:'Anna',
    surname:'Ahmatova',
    phone:'+905526969192',
    service:"Manikur"
  },
  {
    name:'Maria',
    surname:'Berestova',
    phone:'+905526923122',
    service:'Pedikur'
  },
  {
    name:'Meri',
    surname:'Meriyeva',
    phone:'+905524359192',
    service:'Protez'
  }
]
const ulya = [
  {
    name:'Anna',
    surname:'Ahmatova',
    phone:'+905526969192',
    service:"Manikur"
  },
  {
    name:'Maria',
    surname:'Berestova',
    phone:'+905526923122',
    service:'Pedikur'
  },
  {
    name:'Meri',
    surname:'Meriyeva',
    phone:'+905524359192',
    service:'Protez'
  }
]
const List:FC=()=>{

    const mmm=['Masha','Meri','Ulya']
    const [masters,setMasters] = useState([masha,meri,ulya])
    return <div className="container-fluid">

      {masters.map((master,i)=> <>
        <h2>{mmm[i]}</h2>
        <table className="table table-bordered table-responsive-sm">
            <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone</th>
                <th>Service</th>
                <th></th>
            </tr>
            </thead>
            <tbody >
              {master.map((order,j)=>{
                return <tr key={j}>
                  <td>{order.name}</td>
                  <td>{order.surname}</td>
                  <td>{order.phone}</td>
                  <td>{order.service}</td>
                  <td>× +</td>
                </tr>
              })}
            </tbody>
      </table></>)}
    </div>
}

ReactDOM.render(
  <React.StrictMode>
    <List/>
  </React.StrictMode>,
  document.getElementById('root1')
);

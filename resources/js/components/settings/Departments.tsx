import React,{FC,useState,useEffect} from 'react';
import State from './SettingsStates';
import axios from 'axios';
import './Masters.css'

type Props = {
  setState:any
}


const Departments:FC<Props>=({setState})=>{
    const [departments,setDepartments] = useState<any>([]);
    const [changed,setChanged] = useState(0);
    //popup
    const [showPopup,setShowPopup] = useState(false);
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [address,setAddress] = useState('');
    const [isCreate,setIsCreate] = useState(true);
    const [selectedDepartment,setDepartment] = useState<any>(null);
    
    const update=()=>setChanged(changed+1);

    const saveButtonOnClick = ()=>{
      const data:any = {
        name:name,
        description:description,
        address:address
      };

      if(isCreate){
        axios.post('/settings/createDepartment',data)
        .then(r=>{update();setShowPopup(false);})
        .catch(err=>console.log(err))
      }else{
        axios.post('/settings/updateDepartment/'+selectedDepartment.id,data)
        .then(r=>{update();setShowPopup(false);})
        .catch(err=>console.log(err))

      }
    };

    useEffect(()=>{
      axios.get('/settings/getDepartments')
        .then(response=>{
          console.log(response.data);
          setDepartments(response.data.data);
        });
    },[changed]);



    return <div className="container-fluid">
      {showPopup && <div className="popup-message-container">
        <div className="popup-message" id="popup-message" tabIndex={0} 
          onKeyPress={evt=>{
            if(evt.key==='Enter')
                saveButtonOnClick();
          }}>
          <div className="popup-message__header">
            <i className="far fa-window-close"
              onClick={()=>setShowPopup(false)}></i>
          </div>
          <div className="container-fluid popup-message__body">
            <div className="row  margin-bottom-20">
              <label htmlFor="depName"  className="col-md-3">Adı:</label>
              <input type="text" id="depName" className="col-md-5" value={name}
                onChange={(evt)=>{setName(evt.target.value)}}/>
            </div>
            <div className="row margin-bottom-20">
              <label htmlFor="Address" className="col-md-3">Adress:</label>
              <input type="text" id="Address" className="col-md-5" value={address}
                onChange={(evt=>{setAddress(evt.target.value)})}/>
            </div>
            <div className="row margin-bottom-20">
              <label htmlFor="description" className="col-md-3">Açıklama:</label>
              <input type="text" id="description" className="col-md-5" value={description}
                onChange={(evt)=>{setDescription(evt.target.value)}}/>
            </div>
            
          </div>
          <div className="popup-message__footer">
                <div className="btn btn-outline-primary popup-message__button"
                  onClick={saveButtonOnClick}>Kayit et</div>
                <div className="btn btn-outline-primary popup-message__button"
                  onClick={()=>setShowPopup(false)}>Iptal</div>
          </div>
        </div>
      </div>}
      <div className="row">
        <div className="col-2" >
          <button className="btn btn-outline-primary btn-sm ml-16" onClick={()=>setState(State.Main)}>Geri</button>
        </div>
        <div className="col-10" style={{textAlign:'center'}}>
          <h1 >Bölümler</h1>
        </div>
      </div>
      <div className="col-md-12">
        <table className="table table-bordered table-responsive-sm">
              <thead>
              <tr>
                  <th>Adı</th>
                  <th>Açıklama</th>
                  <th>Adres</th>
                  <th style={{textAlign:'center',fontSize:'25px',padding:0}}>
                      <i className="far fa-plus-square" 
                        onClick={()=>{
                          setName('');
                          setDescription('');
                          setAddress('');
                          setIsCreate(true);
                          setShowPopup(true);
                          }}></i>
                  </th>
              </tr>
              </thead>
              <tbody >
                {departments.map((dep:any, i:number)=>{
                  return <tr key={i+' '+dep.id}
                    onClick={()=>{
                        setName(dep.name);
                        setDescription(dep.description);
                        setAddress(dep.address);
                        setDepartment(dep);
                        setIsCreate(false);
                        setShowPopup(true);
                    }}>
                    <td>{dep.name}</td>
                    <td>{dep.description}</td>
                    <td>{dep.address}</td>
                    <td style={{textAlign:'center',fontSize:'25px',padding:0}}>
                      <i className="far fa-window-close"
                        onClick={(e)=>{
                          axios.post(`/settings/deleteService/${dep.id}`)
                            .then(resp=>{update()});
                            e.stopPropagation();
                        }}></i>
                    </td>
                  </tr>
                })}
              </tbody>
        </table>
      </div>
    </div>
}

export default Departments;

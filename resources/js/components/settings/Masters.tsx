import React,{FC,useState,useEffect} from 'react';
import State from './SettingsStates';
import axios from 'axios';
import './Masters.css'

type Props = {
  setState:any
}


const Masters:FC<Props>=({setState})=>{
    const [masters,setMasters] = useState<any>([]);
    const [departments,setDepartments] = useState<any>([])
    const [changed,setChanged] = useState(0);
    //popup
    const [showPopup,setShowPopup] = useState(false);
    const [phone,setPhone] = useState("");
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [departmentId,setDepartmentId] = useState(1);
    const [password,setPassword] = useState('');
    const [isCreate,setIsCreate] = useState(true);
    const [role,setRole] = useState('MASTER');
    const [selectedUser,setSelectedUser] = useState<any>(null);
    
    const update=()=>setChanged(changed+1);

    const getDepartmentName=(id:any)=>{
      for(let i=0;i<departments.length;i++)
        if(departments[i].id===id)
          return departments[i].name;
        return "";
    }

    const saveButtonOnClick = ()=>{
      const data:any = {
        name:name,
        email:email,
        department_id:departmentId,
        phone:phone,
        role:role
      };
      if(password!=='') data.password = password;

      if(isCreate){
        axios.post('/settings/createUser',data)
        .then(r=>{update();setShowPopup(false);})
        .catch(err=>console.log(err))
      }else{
        axios.post('/settings/updateUser/'+selectedUser.id,data)
        .then(r=>{update();setShowPopup(false);})
        .catch(err=>console.log(err))

      }
    };

    useEffect(()=>{
      axios.get('/settings/getUsers')
        .then(response=>{
          console.log(response.data);
          setMasters(response.data.data);
        });
      axios.get('/settings/getDepartments')
        .then(response=>{
          console.log(response.data);
          setDepartments(response.data.data);
        })

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
              <label htmlFor="userName"  className="col-md-3">Name:</label>
              <input type="text" id="userName" className="col-md-5" value={name}
                onChange={(evt)=>{setName(evt.target.value)}}/>
            </div>
            <div className="row margin-bottom-20">
              <label htmlFor="userPhone" className="col-md-3">Telefon:</label>
              <input type="phone" id="userPhone" className="col-md-5" value={phone}
                onChange={(evt)=>{setPhone(evt.target.value)}}/>
            </div>
            <div className="row margin-bottom-20">
              <label htmlFor="email" className="col-md-3">Email:</label>
              <input type="text" id="email" className="col-md-5" value={email}
                onChange={(evt=>{setEmail(evt.target.value)})}/>
            </div>
            <div className="row margin-bottom-20">
              <label htmlFor="department" className="col-md-3">Departman:</label>
              <select id="department" className="col-md-5" value={departmentId}
                onChange={(evt)=>{
                      setDepartmentId(parseInt(evt.target.value));
                    }}>
                  <option value={0}>Select service</option>
                  {
                    departments.map((department:any,i:number)=>{
                      return <option key={i} value={department.id}>{department.name}</option>
                    })
                  }
              </select>
            </div>
            <div className="row margin-bottom-20">
              <label htmlFor="role" className="col-md-3">Rol:</label>
              <select id="role" className="col-md-5" value={role}
                onChange={(evt)=>{
                      setRole(evt.target.value);
                    }}>
                  <option value={'MASTER'}>Usta</option>
                  <option value={'MANAGER'}>Yönetici</option>
                  <option value={'ADMIN'}>Müdür</option>
              </select>
            </div>

            <div className="row margin-bottom-20">
              <label htmlFor="password" className="col-md-3">Şifre:</label>
              <input type="text" id="password" className="col-md-5" value={password}
                onChange={evt=>{setPassword(evt.target.value)}}></input>
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
          <h1 >Ustalar</h1>
        </div>
      </div>
      <div className="col-md-12">
        <table className="table table-bordered table-responsive-sm">
              <thead>
              <tr>
                  <th>Adı</th>
                  <th>Email</th>
                  <th>Telefon</th>
                  <th>Departman</th>
                  <th style={{textAlign:'center',fontSize:'25px',padding:0}}>
                      <i className="far fa-plus-square" 
                        onClick={()=>{
                          setPassword('');
                          setPhone('');
                          setName('');
                          setRole('MASTER');
                          setDepartmentId(0);
                          setEmail('');
                          setIsCreate(true);
                          setShowPopup(true);
                          }}></i>
                  </th>
              </tr>
              </thead>
              <tbody >
                {masters.map((master:any, i:number)=>{
                  return <tr key={i+' '+master.id}
                    onClick={()=>{
                        setSelectedUser(master);
                        setPassword('');
                        setPhone(master.phone);
                        setName(master.name);
                        setRole(master.role);
                        setDepartmentId(master.department_id);
                        setEmail(master.email);
                        setIsCreate(false);
                        setShowPopup(true);
                    }}>
                    <td>{master.name}</td>
                    <td>{master.email}</td>
                    <td>{master.phone}</td>
                    <td>{getDepartmentName(master.department_id)}</td>
                    <td style={{textAlign:'center',fontSize:'25px',padding:0}}>
                      <i className="far fa-window-close"
                        onClick={(e)=>{
                          
                          axios.post(`/settings/deleteUser/${master.id}`)
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

export default Masters;

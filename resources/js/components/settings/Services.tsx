import React,{FC,useState,useEffect} from 'react';
import State from './SettingsStates';
import axios from 'axios';
import './Masters.css'

type Props = {
  setState:any
}


const Services:FC<Props>=({setState})=>{
    const [services,setServices] = useState<any>([]);
    const [changed,setChanged] = useState(0);
    //popup
    const [showPopup,setShowPopup] = useState(false);
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState(0);
    const [isCreate,setIsCreate] = useState(true);
    const [selectedService,setService] = useState<any>(null);
    
    const update=()=>setChanged(changed+1);

    const saveButtonOnClick = ()=>{
      const data:any = {
        name:name,
        description:description,
        price:price
      };

      if(isCreate){
        axios.post('/settings/createService',data)
        .then(r=>{update();setShowPopup(false);})
        .catch(err=>console.log(err))
      }else{
        axios.post('/settings/updateService/'+selectedService.id,data)
        .then(r=>{update();setShowPopup(false);})
        .catch(err=>console.log(err))

      }
    };

    useEffect(()=>{
      axios.get('/settings/getServices')
        .then(response=>{
          console.log(response.data);
          setServices(response.data.data);
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
              <label htmlFor="serviceName"  className="col-md-3">Adı:</label>
              <input type="text" id="serviceName" className="col-md-5" value={name}
                onChange={(evt)=>{setName(evt.target.value)}}/>
            </div>
            <div className="row margin-bottom-20">
              <label htmlFor="description" className="col-md-3">Açıklama:</label>
              <input type="text" id="description" className="col-md-5" value={description}
                onChange={(evt)=>{setDescription(evt.target.value)}}/>
            </div>
            <div className="row margin-bottom-20">
              <label htmlFor="sprice" className="col-md-3">Fiyat:</label>
              <input type="number" id="sprice" className="col-md-5" value={price}
                onChange={(evt=>{setPrice(parseInt(evt.target.value))})}/>
            </div>
            <div className="popup-message__footer">
                <div className="btn btn-outline-primary popup-message__button"
                  onClick={saveButtonOnClick}>Kaydet</div>
                <div className="btn btn-outline-primary popup-message__button"
                  onClick={()=>setShowPopup(false)}>Iptal</div>
            </div>  
          </div>
          
        </div>
      </div>}
      <div className="row">
        <div className="col-2" >
          <button className="btn btn-outline-primary btn-sm ml-16" onClick={()=>setState(State.Main)}>Geri</button>
        </div>
        <div className="col-10" style={{textAlign:'center'}}>
          <h1 >Hizmetler</h1>
        </div> 
      </div>
      <div className="col-md-12">
        <table className="table table-bordered table-responsive-sm">
              <thead>
              <tr>
                  <th>Adı</th>
                  <th>Açıklama</th>
                  <th>Fiyatı</th>
                  <th style={{textAlign:'center',fontSize:'25px',padding:0}}>
                      <i className="far fa-plus-square" 
                        onClick={()=>{
                          setName('');
                          setDescription('');
                          setPrice(0);
                          setIsCreate(true);
                          setShowPopup(true);
                          }}></i>
                  </th>
              </tr>
              </thead>
              <tbody >
                {services.map((service:any, i:number)=>{
                  return <tr key={i+' '+service.id}
                    onClick={()=>{
                        setName(service.name);
                        setDescription(service.description);
                        setPrice(service.price);
                        setService(service);
                        setIsCreate(false);
                        setShowPopup(true);
                    }}>
                    <td>{service.name}</td>
                    <td>{service.description}</td>
                    <td>{service.price}</td>
                    <td style={{textAlign:'center',fontSize:'25px',padding:0}}>
                      <i className="far fa-window-close"
                        onClick={(e)=>{
                          axios.post(`/settings/deleteService/${service.id}`)
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

export default Services;

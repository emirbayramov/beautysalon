import React,{FC,useState,useEffect} from 'react';
import State from './SettingsStates';
import axios from 'axios';
import './Masters.css'

type Props = {
  setState:any
}


const Reports:FC<Props>=({setState})=>{
    const [percent,setPercent] = useState(0);
    const [fixed,setFixed]     = useState(0);

    useEffect(()=>{
      axios.get('/settings/getPrices')
        .then(response=>{
          console.log(response.data);
          setPercent(response.data.data.percent);
          setFixed(response.data.data.fixed);
        }).catch(err=>console.log(err));
    
    },[]);

    const saveButtonOnClick = ()=>{
      axios.post('/settings/setPrices',{
          percent:percent,
          fixed:fixed
      }).then(res=>{
        setState(State.Main);
      });  
    }



    return <div className="container-fluid">
     <div className="row">
        <div className="col-12" style={{textAlign:'center'}}>
          <h1 >Maaşlar</h1>
        </div>
      </div>
      
        <div className="row  margin-bottom-20">
          <label htmlFor="percent"  className="col-md-2">Yüzde:</label>
          <input type="number" id="percent" className="col-md-2" value={percent}
             onChange={(evt)=>{setPercent(parseFloat(evt.target.value))}}/>
        </div>
        <div className="row margin-bottom-20">
          <label htmlFor="fixed" className="col-md-2">Sabit miktar:</label>
          <input type="number" id="fixed" className="col-md-2" value={fixed}
            onChange={(evt)=>{setFixed(parseFloat(evt.target.value))}}/>
        </div>
      
      <div className="row flex-space-around">
           <div className=" col-md-2 btn btn-outline-primary popup-message__button"
              onClick={saveButtonOnClick}>Kaydet</div>
           <div className="col-md-2 btn btn-outline-primary popup-message__button"
              onClick={()=>setState(State.Main)}>Iptal</div>
       </div>

    </div>
}

export default Reports;

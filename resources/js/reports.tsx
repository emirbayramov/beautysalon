import React,{FC,useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { cursorTo } from 'readline';

function setToMonday( date:Date ) {
  var day = date.getDay() || 7;  
  if( day !== 1 ) 
      date.setHours(-24 * (day - 1)); 
  return date;
}

function toString(date:Date){
  let month:any = date.getMonth()+1;
  if(month<10) month = '0'+month;
  return date.getFullYear()+'-' + month + '-'+date.getDate();
}

const Reports:FC = () => {
  const [from, setFrom] = useState(toString(setToMonday(new Date())));
  const [to, setTo] = useState(toString(new Date()));
  const [data,setData] = useState<any>([]);
  const [changed,setChanged] = useState(0);

  const update=()=>{ setChanged(changed+1); };

  useEffect(()=>{
    axios.get(`/reports/gerReport?from=${from}&to=${to}`)
      .then(res=>{
        setData(res.data);
      }).catch(err=>console.log(err));
  },[from,to]);
  return <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <label htmlFor="from" className="col-4">İtibaren:</label>
        <input type="date" className="col-6" name="from" id="from" value={from} onChange={e=>setFrom(e.target.value)}/>
      </div>
      <div className="col-md-6 col-sm-12">
        <label htmlFor="to" className="col-4">Kadar:</label>
        <input type="date" name="to" id="to" className="col-6" value={to} onChange={e=>setTo(e.target.value)} />
      </div>
    </div>
    <div className="row">
      <table className="table table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>İşçi</th>
            <th>Toplam</th>
            <th>Kazanç</th>
            <th>Hizmet sayısı</th>
            <th>Malzeme</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry:any,i:number)=>{
            return <tr key={i}>
              <td>{entry.name}</td>
              <td>{entry.sum}</td>
              <td>{entry.earn}</td>
              <td>{entry.count}</td>
              <td>{entry.fixed}</td>
            </tr>;
          })}
          <tr >
              <td><b>Toplam</b></td>
              <td><b>{data.reduce((acc:number,curr:any)=>{return acc+curr.sum},0)}</b></td>
              <td><b>{data.reduce((acc:number,curr:any)=>{return acc+curr.earn},0)}</b></td>
              <td><b>{data.reduce((acc:number,curr:any)=>{return acc+curr.count},0)}</b></td>
              <td><b>{data.reduce((acc:number,curr:any)=>{return acc+curr.fixed},0)}</b></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
}


ReactDOM.render(
  <React.StrictMode>
    <Reports/>
  </React.StrictMode>,
  document.getElementById('root1')
);

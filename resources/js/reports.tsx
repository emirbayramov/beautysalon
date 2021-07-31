import React,{FC,useState} from 'react';
import ReactDOM from 'react-dom';

const Reports:FC = () => {

  return {
    Main:<div className="container-fluid">
    <div className="row" style={{marginBottom:"5px"}}>
      <div className="col-3">
      </div>
      <div className="col-6 btn btn-outline-primary" onClick={()=>{}}>
        Masters
      </div>
      <div className="col-3">
      </div>
    </div>
    <div className="row" style={{marginBottom:"5px"}}>
      <div className="col-3">
      </div>
      <div className="col-6  btn btn-outline-primary" onClick={()=>{}}>
        Services
      </div>
      <div className="col-3">
      </div>
    </div>
    <div className="row" style={{marginBottom:"5px"}}>
      <div className="col-3">
      </div>
      <div className="col-6  btn btn-outline-primary" onClick={()=>{}}>
        Month
      </div>
      <div className="col-3">
      </div>
    </div>
  </div>}["Main"]
}


ReactDOM.render(
  <React.StrictMode>
    <Reports/>
  </React.StrictMode>,
  document.getElementById('root1')
);

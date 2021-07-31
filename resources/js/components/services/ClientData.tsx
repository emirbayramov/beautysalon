import React,{FC,useState} from 'react';
import State from "./ServicesStates";
type Props = {
  setState:any
}

const ClientData:FC<Props> = ({setState}:Props)=>{

  return <><div className="row" style={{marginBottom:"5px"}}>
        <div className="col-1">
          Telefon:
        </div>
        <div className="col-11">
          <input type="text" name="phone" />
        </div>
    </div>
    <div className="row" style={{marginBottom:"5px"}}>
          <div className="col-1">Adı:</div>
          <div className="col-11">
            <input type="text" name="name" />
          </div>
      </div>
    <div className="row" style={{marginBottom:"5px"}}>
        <div className="col-1">Soyadı:</div>
        <div className="col-11">
          <input type="text" name="surname" />
        </div>
    </div>
    <div className="row" style={{marginBottom:"5px"}}>
        <div className="col-1">Doğum yılı:</div>
        <div className="col-11">
          <input type="date" value="1996-06-01" name="birthDate" />
        </div>
    </div>
    <div className="row" style={{marginBottom:"5px"}}>
      <div className="col-sm-3"></div>
      <button className="btn btn-outline-primary col-sm-6" id="next"
        onClick={()=>{
          setState(State.SelectService);
        }}>Make Order</button>
        <div className="col-sm-3"></div>
    </div>
  </>;


}

export default ClientData;

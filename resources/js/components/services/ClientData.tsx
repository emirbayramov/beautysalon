import React,{FC,useState} from 'react';
import State from "./ServicesStates";
type Props = {
  setState:any
}

const ClientData:FC<Props> = ({setState}:Props)=>{

  return <><div key={1} className="row">
      <div className="form-inline col-12">
        <span className="col-3">Telefon:</span>
        <input type="text" className="col-9"/>
      </div>
    </div>
    <div key={2} className="row">
        <div className="form-inline col-12">
          <span className="col-2">Adı:</span>
          <input type="text" className="col-4"/>
          <span className="col-2">Soyadı:</span>
          <input type="text" className="col-4"/>
        </div>
    </div>
    <div key={3} className="row">
        <div className="form-inline col-12">
          <span className="col-sm-1">Gün</span>
          <select className="form-control col-sm-3" name="month"  id="month">
              <option value={0}>1</option>
              <option value={1}>2</option>
              <option value={2}>3</option>
              <option value={3}>4</option>
              <option value={4}>5</option>
              <option value={5}>6</option>
              <option value={6}>7</option>
              <option value={7}>8</option>
              <option value={8}>9</option>
              <option value={9}>10</option>
              <option value={10}>11</option>
              <option value={11}>12</option>
          </select>
          <span className="col-sm-1">Ay</span>
          <select className="form-control col-sm-3" name="month"  id="month">
              <option value={0}>Jan</option>
              <option value={1}>Feb</option>
              <option value={2}>Mar</option>
              <option value={3}>Apr</option>
              <option value={4}>May</option>
              <option value={5}>Jun</option>
              <option value={6}>Jul</option>
              <option value={7}>Aug</option>
              <option value={8}>Sep</option>
              <option value={9}>Oct</option>
              <option value={10}>Nov</option>
              <option value={11}>Dec</option>
          </select>
          <span className="col-sm-1">Yil</span>
          <select className="form-control col-sm-3" name="year" id="year" >
                <option value={2013}>2013</option>
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
                <option value={2027}>2027</option>
                <option value={2028}>2028</option>
                <option value={2029}>2029</option>
                <option value={2030}>2030</option>
                <option value={2031}>2031</option>
                <option value={2032}>2032</option>
                <option value={2033}>2033</option>
                <option value={2034}>2034</option>
                <option value={2035}>2035</option>
                <option value={2036}>2036</option>
                <option value={2037}>2037</option>
            </select>
        </div>
    </div>
    <div key={4} className="row">
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

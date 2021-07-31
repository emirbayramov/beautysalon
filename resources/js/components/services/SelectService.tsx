import React,{FC,useState} from 'react';
import State from './ServicesStates';

interface Props {
  nextState:any
}


const SelectService:FC<Props> = ({nextState})=>{

  const [list,setList] = useState(()=>['Наращивание',"Маникюр","Педикюр","Ресницы"]);
  const [selected,setSSelected] = useState<string[]>([]) ;

  const onServiceSelect = (index:number) => () => {
      setSSelected([...selected,list[index]])
      list.splice(index,1);
      setList(list);
  }

  const onServiceUnSelect = (index:number) => () => {
      setList([...list,selected[index]])
      selected.splice(index,1);
      setSSelected(selected);
  }

  return <div className="row">
    <div className="col-12 col-md-6" style={{textAlign:'center'}}>
      <h2 >Select service</h2>
      <div className="container">

        { list.map((serv,i)=><div className="row" key={i} style={{marginBottom:'5px'}}>
            <div className="col-3">
            </div>
            <div  className="col-6 btn btn-outline-secondary" onClick={onServiceSelect(i)}>
              {serv}
            </div>
            <div className="col-3">
            </div>
          </div> )
        }
      </div>
    </div>
    <div className="col-12 col-md-6">
    <div className="container">
        {selected.length >0?<div className="row" style={{marginBottom:'20px'}}>
              <div className="col-12 btn btn-outline-primary"

              onClick={()=>{
                console.log(nextState);
                nextState(selected,State.SelectTimeAndMaster);
              }}>
              Next
            </div>
            </div>:
            <div className="row" style={{marginBottom:'20px'}}>
              <div className="col-12 btn btn-outline-primary disabled" >
                Next
              </div>
            </div>}
        { selected.map((serv,i)=>
            <div className="row" style={{marginBottom:'5px'}}>
              <div key={i} className="col-12 btn btn-outline-secondary" onClick={onServiceUnSelect(i)}>
                {serv}
              </div>
            </div>) }
      </div>
    </div>
  </div>;
};

export default SelectService;

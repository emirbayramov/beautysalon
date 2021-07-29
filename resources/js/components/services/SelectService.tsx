import React,{FC,useState} from 'react';
import State from './ServicesStates';

interface Props {
  nextState:any
}


const SelectService:FC<Props> = ({nextState})=>{

  const [list,setList] = useState(()=>['Наращивание',"Маникюр калдеж","Педикюр","Ресницы"]);
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
    <div className="col-12 col-md-6">
      <div className="container">
        { list.map((serv,i)=><div key={i} className="row" onClick={onServiceSelect(i)}>{serv}</div>) }
      </div>
    </div>
    <div className="col-12 col-md-6">
    <div className="container">
        {selected.length>0?<div className="row"
          onClick={()=>{
            console.log(nextState);
            nextState(selected,State.SelectTimeAndMaster);
          }}>
          Select
        </div>:<div className="row" >Select</div>}
        { selected.map((serv,i)=><div key={i} className="row" onClick={onServiceUnSelect(i)}>{serv}</div>) }
      </div>
    </div>
  </div>;
};

export default SelectService;

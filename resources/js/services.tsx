import React,{FC,useState} from 'react';
import ReactDOM from 'react-dom';
import SelectService from 'components/services/SelectService'
import SelectMaster from 'components/services/SelectMaster'
import ClientData from 'components/services/ClientData'
import State from 'components/services/ServicesStates'


const Services:FC = () => {

  const [state,setState] = useState(State.SelectService);
  const [selected,setSelected] = useState<string[]>([]);
  const [time,setTime] = useState<Date|null>(null);
  const [master,setMaster] = useState<string|null>(null);

  const setMasterAndDate = (master:string,time:Date)=>{
    setMaster(master);
    setTime(time);
  }

  const nextState = (selected:string[],state:State)=>{
    setSelected(selected);
    setState(state);
  }
  return <div className="container-fluid">
    {{
        [State.SelectService]:<SelectService nextState={nextState}/>,
        [State.SelectTimeAndMaster]:<SelectMaster setState={setState} selected={selected}/>,
        [State.ClientData]:<ClientData setState={setState} />
    }[state]}
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <Services/>
  </React.StrictMode>,
  document.getElementById('root1')
);

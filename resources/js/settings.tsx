import React,{FC,useState} from 'react';
import ReactDOM from 'react-dom';
import State from 'components/settings/SettingsStates'
import Masters from 'components/settings/Masters'
import Services from 'components/settings/Services'
import Clients from 'components/settings/Clients'

const Settings:FC = () => {
  const [state,setState] = useState(State.Main);

  return {
    [State.Main]:<div className="container-fluid">
    <div className="row" style={{marginBottom:"5px"}}>
      <div className="col-3">
      </div>
      <div className="col-6 btn btn-outline-primary" onClick={()=>setState(State.Masters)}>
        Masters
      </div>
      <div className="col-3">
      </div>
    </div>
    <div className="row" style={{marginBottom:"5px"}}>
      <div className="col-3">
      </div>
      <div className="col-6  btn btn-outline-primary" onClick={()=>setState(State.Services)}>
        Services
      </div>
      <div className="col-3">
      </div>
    </div>
    <div className="row" style={{marginBottom:"5px"}}>
      <div className="col-3">
      </div>
      <div className="col-6  btn btn-outline-primary" onClick={()=>setState(State.Clients)}>
        Clients
      </div>
      <div className="col-3">
      </div>
    </div>
  </div>,
  [State.Masters]:<Masters setState={setState} />,
  [State.Services]:<Services setState={setState} />,
  [State.Clients]:<Clients setState={setState} />
  }[state];
}

ReactDOM.render(
  <React.StrictMode>
    <Settings/>
  </React.StrictMode>,
  document.getElementById('root1')
);

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
      <div className="row mb-2">
        <div className="col-3">
        </div>
        <div className="col-6" style={{textAlign:'center'}}>
          <h1  >Ayarlar</h1>
        </div>
        <div className="col-3">
        </div>
      </div>
    <div className="row mb-3" style={{marginBottom:"5px"}}>
      <div className="col-3">
      </div>
      <div className="col-6 btn btn-outline-primary" onClick={()=>setState(State.Masters)}>
        Ustalar
      </div>
      <div className="col-3">
      </div>
    </div>
    <div className="row mb-3" style={{marginBottom:"5px"}}>
      <div className="col-3">
      </div>
      <div className="col-6  btn btn-outline-primary" onClick={()=>setState(State.Services)}>
        Services
      </div>
      <div className="col-3">
      </div>
    </div>
    <div className="row mb-3" style={{marginBottom:"5px"}}>
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

import React,{FC,useState} from 'react';
import ReactDOM from 'react-dom';
import State from 'components/settings/SettingsStates'
import Masters from 'components/settings/Masters'
import Services from 'components/settings/Services'
import Reports from 'components/settings/Reports'
import Departments from 'components/settings/Departments';
import Users from 'components/settings/Users'

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
        Servisler
      </div>
      <div className="col-3">
      </div>
    </div>
    <div className="row mb-3" style={{marginBottom:"5px"}}>
      <div className="col-3">
      </div>
      <div className="col-6  btn btn-outline-primary" onClick={()=>setState(State.Departments)}>
        Departmanlar
      </div>
      <div className="col-3">
      </div>
    </div>
    <div className="row mb-3" style={{marginBottom:"5px"}}>
      <div className="col-3">
      </div>
      <div className="col-6  btn btn-outline-primary" onClick={()=>setState(State.Reports)}>
        Raporlar
      </div>
      <div className="col-3">
      </div>
    </div>
    <div className="row mb-3" style={{marginBottom:"5px"}}>
      <div className="col-3">
      </div>
      <div className="col-6  btn btn-outline-primary" onClick={()=>setState(State.Users)}>
        Kullanıcılar
      </div>
      <div className="col-3">
      </div>
    </div>
  </div>,
  [State.Masters]:<Masters setState={setState} />,
  [State.Services]:<Services setState={setState} />,
  [State.Departments]:<Departments setState={setState} />,
  [State.Reports]:<Reports setState={setState}/>,
  [State.Users]:<Users setState={setState}/>
  }[state];
}

ReactDOM.render(
  <React.StrictMode>
    <Settings/>
  </React.StrictMode>,
  document.getElementById('root1')
);

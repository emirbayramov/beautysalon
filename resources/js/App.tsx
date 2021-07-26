import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Main from 'components/shared/Main'
//import Reducer from 'reducers/index'
import HomePage from 'components/containers/HomePage'

const App: FC = () =>  {
  //const store = createStore(Reducer)
//  <Provider store={store}>
  //</Provider>
  return (
    <div className="container">

          <Main>
            <HomePage />
          </Main>

    </div>
  )
}

export default App

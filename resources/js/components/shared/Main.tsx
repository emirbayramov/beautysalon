import React, { FC } from 'react'
import Sidebar from './Sidebar';
type Props = {}

const Main: FC<Props> = ({children}) => (
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-12">
        <Sidebar/>
      </div>
      <div className="col-md-8 col-sm-12">
        {children}
      </div>
    </div>
  </div>
)

export default Main

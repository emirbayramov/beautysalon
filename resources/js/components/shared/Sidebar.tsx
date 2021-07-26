import React, { FC } from 'react'
import './App.css';


const Sidebar: FC = () => (
  <div className="container">
      <div className="sidebarButton row">
          <div className="col">
              Новый заказ
          </div>
      </div>
      <div className="sidebarButton row">
          <div className="col">
              Сегодняшние записи
          </div>
      </div>
      <div className="row sidebarButton">
          <div className="col">
              Отчеты
          </div>
      </div>
      <div className="row sidebarButton">
          <div className="col">
              Управление
          </div>
      </div>
  </div>
)

export default Sidebar

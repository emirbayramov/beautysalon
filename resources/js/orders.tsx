import React,{FC,useEffect,useState} from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import './orders.css';

const hours=[8,9,10,11,12,13,14,15,16,17,18,19];

const getOrderOrEmpty=(userOrders:any,hour:number)=>{
};

type Props = {
  setState:any
}

const NextOrder:FC<Props> = ({})=>{

};



const Orders:FC=()=>{

    const [ordersTable,setOrdersTable]   = useState<any>([]);
    const [departments,setDepartments]   = useState<any>([]);
    const [selectedDate,setSelectedDate] = useState(new Date());

    const [ordersChanged,setOrdersChanged] = useState(0);
    const [services,setServices] = useState<any>([]);
    const [users,setUsers] = useState<any>([]);
    //popup fields data
    const [showPopup,setShowPopup] = useState(false);
    const [clientPhone,setClientPhone] = useState('');
    const [clientName,setClientName] = useState('');
    const [currentDepartment,setCurrentDepartment] = useState(1);
    const [selectedService,setSelectedService] = useState(0);
    const [amount,setAmount] = useState(200);
    const [comment,setComment] = useState('');
    const [currentUser,setCurrentUser]= useState<any>(-1);
    const [isCreate,setIsCreate] = useState(true);
    const [selectedOrder,setSelectedOrder] = useState<any>(null);
    const [nextUserId,setNextUserId] = useState<any>('');

    useEffect(()=>{
      axios.get(`/orders/getOrdersByDate?date=`+
          `${selectedDate.toISOString().split('T')[0]}&`+
          `department_id=${currentDepartment}`)
        .then((response)=>{
          setOrdersTable(response.data);
        });
      axios.get('/settings/getServices')
        .then((response)=>{
          setServices(response.data.data);
        });
      axios.get('/settings/getDepartments')
        .then((response)=>{
          setDepartments(response.data.data);
        });
      axios.get('/settings/getMasters?department_id='+currentDepartment)
        .then((response)=>{
          setUsers(response.data.data);
        });
    },[currentDepartment,ordersChanged,selectedDate]);

    const getUserName = (id:any) =>{
      for(let i=0;i<users.length;i++)
        if(users[i].id===id)
          return '('+users[i].name+')';
        return "";
    };
    const update = ()=>{
      setOrdersChanged(ordersChanged+1);
    }

    const deleteOrder = (orderId:number)=>{
      axios.post(`/orders/deleteOrder/${orderId}`,{})
        .then((response)=>update());
    };

    const setConfirmedOrder = (orderId:number,confirmed:number)=>{
      axios.post(`/orders/updateOrder/${orderId}`,{confirmed:confirmed})
        .then((response)=>update());

    }

    const getServicePrice=(id:any)=>{
      for(let i=0;i<services.length;i++){
        if(services[i].id === id)
          return services[i].price;
      }

      return 0;
    }

    const saveButtonOnClick = ()=>{
      if(isCreate){
        axios.post('/settings/getOrCreateClient',{
          name:clientName,
          surname:'empty',
          phone:clientPhone,
          birth_date:'1990-09-22'
        }).then((response)=>{
          const data = {
            client_id:response.data.data.id,
            user_id:currentUser,
            service_id:selectedService,
            comment:comment,
            confirmed:0,
            amount:amount,
            next_user_id:nextUserId,
            datetime:selectedDate.toISOString().split('T')[0]+'T'+
            (selectedDate.getHours()<10?'0'+selectedDate.getHours():selectedDate.getHours())+':00'
          };
          axios.post('/orders/createOrder',data).then((response)=>{
            setShowPopup(false);
            update();
          }).catch(err=>{
            console.log(err);
          });
        }).catch(err=>{
          console.log(err);
        });

      } else {
        axios.post(`/settings/updateClient/${selectedOrder.client.id}`,{
          name:clientName,
          surname:'empty',
          phone:clientPhone,
          birth_date:'1990-09-22'
        }).then((response)=>{
          const data = {
            client_id:response.data.data.id,
            user_id:currentUser,
            service_id:selectedService,
            comment:comment,
            amount:amount,
            next_user_id:nextUserId,
            datetime:selectedDate.toISOString().split('T')[0]+'T'+
            (selectedDate.getHours()<10?'0'+selectedDate.getHours():selectedDate.getHours())+':00'
          };
          axios.post(`/orders/updateOrder/${selectedOrder.id}`,data)
          .then((response)=>{
            setShowPopup(false);
            update();
          }).catch(err=>{
            console.log(err);
          });
        }).catch(err=>{
          console.log(err);
        });
      }

    };


    return <div className="container-fluid">
      {showPopup && <div className="popup-message-container">
        <div className="popup-message" id="popup-message" tabIndex={0}
          onKeyPress={evt=>{
            if(evt.key==='Enter')
                saveButtonOnClick();
          }}>
          <div className="popup-message__header">
            <i className="far fa-window-close"
              onClick={()=>setShowPopup(false)}></i>
          </div>
          <div className="container popup-message__body">
            <div className="row margin-bottom-20">
              <label htmlFor="clientPhone" className="col-md-2">Telefon:</label>
              <input type="phone" id="clientPhone" className="col-md-5" value={clientPhone}
                onChange={(evt)=>{setClientPhone(evt.target.value)}}/>
            </div>
            <div className="row  margin-bottom-20">
              <label htmlFor="clientName"  className="col-md-2">Adı:</label>
              <input type="text" id="clientName" className="col-md-5" value={clientName}
                onChange={(evt)=>{setClientName(evt.target.value)}}/>
            </div>
            <div className="row margin-bottom-20">
              <label htmlFor="service" className="col-md-2">Hizmet:</label>
              <select id="service" className="col-md-5" value={selectedService}
                onChange={(evt)=>{
                    setSelectedService(parseInt(evt.target.value));
                    setAmount(getServicePrice(parseInt(evt.target.value)));
                  }}>
                <option value={0}>Hizmet seç</option>
                {
                  services.map((service:any,i:number)=>{
                    return <option key={i} value={service.id}>{service.name}</option>
                  })
                }
              </select>
            </div>
            <div className="row margin-bottom-20">
              <label htmlFor="amount" className="col-md-2">Fiyat:</label>
              <input type="number" id="amount" className="col-md-5" value={amount}
                onChange={(evt=>{setAmount(parseInt(evt.target.value))})}/>
            </div>
            <div className="row margin-bottom-20">
              <label htmlFor="next-user" className="col-md-2">Sonraki usta:</label>
              <select id="next-user" className="col-md-5" value={nextUserId}
                onChange={evt=>{setNextUserId(evt.target.value)}}>
                  <option value={''}>sonraki yok</option>
                  {users.map((user:any,i:number)=>{
                    return <option key={i} value={user.id}>{user.name}</option>
                  })}
              </select>
            </div>
            <div className="popup-message__footer">
                <div className="btn btn-outline-primary popup-message__button"
                  onClick={saveButtonOnClick}>Save</div>
                <div className="btn btn-outline-primary popup-message__button"
                  onClick={()=>setShowPopup(false)}>Cancel</div>
          </div>
          </div>

        </div>
      </div>}
      <div className="row margin-bottom-20">
        <div className="col-md-6  col-sm-12">
          <label htmlFor="selectedDate" className="col-4">Date:</label>
          <input type="date" id="selectedDate" className="col-6 margin-lr-20" value={selectedDate.toISOString().split('T')[0]}
            onChange={(evt)=>{setSelectedDate(new Date(evt.target.value))}}/>
        </div>
        <div className="col-md-6  col-sm-12">
          <label htmlFor="currentDepartment" className="col-4">Department:</label>
          <select id="currentDepartment"  className="col-6 margin-lr-20"
              value={currentDepartment}
              onChange={(evt)=>{setCurrentDepartment(parseInt(evt.target.value))}}>
              {
                departments.map((department:any,i:number)=>{
                  return <option key={i} value={department.id}>{department.name}</option>
                })
              }
          </select>
        </div>

      </div>
      <div className="overflow-scrol" >
        <table className="table table-bordered table-responsive-sm "
          style={{}}>
          <thead>

            <tr>
            <th></th>
              {
                ordersTable.users&&Object.values(ordersTable.users)
                  .map((user:any,i:number)=>{
                    return <th
                      style={{position:'sticky',
                      top:0,
                      backgroundColor:'#f8fafc',
                      zIndex:10
                    }} key={i+user}><div >{user}</div></th>})
                }
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
             ordersTable.orders && hours.map((hour,i)=><tr key={i+" "+hour}>
               <td style={{width:'50px',textAlign:'center' ,backgroundColor:'#f8fafc',zIndex:10,position:'sticky',left:'0'}}>{hour}:00</td>
                {
                  Object.values(ordersTable.orders)
                    .map((userOrders:any,j:number)=>{
                      let order:any=null;
                      for(let i=0;i<userOrders.length;i++){
                        const orderHour = new Date(userOrders[i].datetime).getHours();
                        if(orderHour === hour){
                          order = userOrders[i];
                        }
                      }

                      if(order){
                        //console.log(order);
                        let tdClassName = 'td-order';
                        if(order.confirmed===1)
                          tdClassName = 'order-confirmed td-order';
                        else if(order.confirmed===2)
                          tdClassName = 'order-will-come td-order';

                        return <td key={hour+' '+j+' '+i}
                            className={tdClassName}
                            onClick={()=>{
                              setIsCreate(false);
                              setNextUserId(order.next_user_id);
                              setSelectedOrder(order);
                              setClientName(order.client.name);
                              setClientPhone(order.client.phone);
                              setSelectedService(order.service.id);
                              setAmount(order.amount);
                              setComment(order.comment);
                              setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth(),selectedDate.getDate(),hour))
                              setCurrentUser(Object.keys(ordersTable.orders)[j]);
                              setShowPopup(true);
                            }}>
                          <div className="orders-cell">
                            <div className="order-cell__header">
                              <i className="fas fa-sign-in-alt"
                                style={{marginRight:'10px'}}
                                onClick={(e)=>{
                                  if(order.confirmed!==2)
                                    setConfirmedOrder(order.id,2);
                                  else
                                    setConfirmedOrder(order.id,0);
                                  e.stopPropagation();
                                  }}></i>
                              <i className="far fa-check-square"
                                style={{marginRight:'10px'}}
                                onClick={(e)=>{
                                  if(order.confirmed!==1)
                                    setConfirmedOrder(order.id,1);
                                  else
                                    setConfirmedOrder(order.id,0);
                                  e.stopPropagation();
                                  }}></i>
                              <i className="far fa-window-close"
                                onClick={(e)=>{
                                  deleteOrder(order.id);
                                  e.stopPropagation();
                                   }}></i>
                            </div>
                              <br/>
                              {getUserName(order.next_user_id)}<br/>
                              {order.client.phone}<br/>
                              {order.client.name}<br/>
                              {order.service.name}
                            </div>
                          </td>;
                       }else{
                        return <td key={hour+' '+j+' '+i}
                          style={{width:'100px',minWidth:'125px'}}
                          onClick={()=>{
                            setIsCreate(true);
                            setClientName('');
                            setClientPhone('');
                            setComment('');
                            setSelectedService(0);
                            setNextUserId('');
                            setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth(),selectedDate.getDate(),hour))
                            setCurrentUser(Object.keys(ordersTable.orders)[j]);
                            setShowPopup(true);
                          }}>
                            <div className="orders-cell-empty"></div>
                          </td>;
                      }
                    })
                }
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
}

ReactDOM.render(
  <React.StrictMode>
    <Orders/>
  </React.StrictMode>,
  document.getElementById('root1')
);

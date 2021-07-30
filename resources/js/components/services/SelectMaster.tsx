import React,{FC,useState} from 'react';
import './SelectMaster.css';
import State from './ServicesStates';
type Props = {
  selected:string[],
  setState:any
}

const SelectMaster:FC<Props> = ({selected,setState}:Props)=>{

  const [masters,setMasters]=useState(['Masha','Meri','Ulya','Aygul']);
  const [currentDate,setCurrentDate] = useState(new Date());
  const [mouseOverCell,setMouseOverCell] = useState(-1);
  const [selectedHour,setSelectedHour] = useState(-1);
  const [isTimePicked,setTimePicked] = useState(false);
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const workHours = 3;
  const busyHours = [0,1,2,6,7];
  const [selectedDate,setSelectedDate] = useState(currentDate);

  const firstDay = (new Date(currentYear, currentMonth)).getDay();
  const daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();


  return (<div className="row">
      <div className="col-12 col-md-6">
        <div className="container">
          { masters.map((master,i)=><div key={i} className="row" onClick={()=>alert(i)}>{master}</div>) }
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card">
          <h3 className="card-header" id="monthAndYear"></h3>
          {isTimePicked?
            <button className="btn btn-outline-primary col-sm-12"
              onClick={()=>setState(State.ClientData)}>Next</button>
            :<div className="btn btn-outline-primary col-sm-12">Next</div>
          }
          <div className="form-inline">

              <button className="btn btn-outline-primary col-sm-3" id="previous"
                onClick={()=>{
                  const year = currentDate.getMonth()===0?currentDate.getFullYear()-1:currentDate.getFullYear();
                  const month = (currentDate.getMonth()===0)?11:currentDate.getMonth()-1;
                  setCurrentDate(new Date(year,month));
                }}>◀</button>
              <form className="form-inline col-sm-6">

                  <select className="form-control col-sm-6" name="month" value={currentDate.getMonth()} id="month"
                    onChange={(event)=>{
                      setCurrentDate(
                        new Date(currentDate.getFullYear(),parseInt(event.target.value))
                      )}}>
                      <option value={0}>Jan</option>
                      <option value={1}>Feb</option>
                      <option value={2}>Mar</option>
                      <option value={3}>Apr</option>
                      <option value={4}>May</option>
                      <option value={5}>Jun</option>
                      <option value={6}>Jul</option>
                      <option value={7}>Aug</option>
                      <option value={8}>Sep</option>
                      <option value={9}>Oct</option>
                      <option value={10}>Nov</option>
                      <option value={11}>Dec</option>
                  </select>

                  <select className="form-control col-sm-6" name="year" id="year" value={currentDate.getFullYear()}
                    onChange={(event)=>{
                      setCurrentDate(
                        new Date(parseInt(event.target.value),currentDate.getMonth())
                      )}}>
                  <option value={2013}>2013</option>
                  <option value={2014}>2014</option>
                  <option value={2015}>2015</option>
                  <option value={2016}>2016</option>
                  <option value={2017}>2017</option>
                  <option value={2018}>2018</option>
                  <option value={2019}>2019</option>
                  <option value={2020}>2020</option>
                  <option value={2021}>2021</option>
                  <option value={2022}>2022</option>
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                  <option value={2026}>2026</option>
                  <option value={2027}>2027</option>
                  <option value={2028}>2028</option>
                  <option value={2029}>2029</option>
                  <option value={2030}>2030</option>
                  <option value={2031}>2031</option>
                  <option value={2032}>2032</option>
                  <option value={2033}>2033</option>
                  <option value={2034}>2034</option>
                  <option value={2035}>2035</option>
                  <option value={2036}>2036</option>
                  <option value={2037}>2037</option>
              </select></form>
              <button className="btn btn-outline-primary col-sm-3" id="next"
                onClick={()=>{
                  const year = currentDate.getMonth()===11?currentDate.getFullYear()+1:currentDate.getFullYear();
                  const month = (currentDate.getMonth()+1)%12;
                  setCurrentDate(new Date(year,month));
                }}>▶</button>
          </div>
          <table className="table table-bordered table-responsive-sm" id="calendar">
                <thead>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                </thead>

                <tbody id="calendar-body">
                {(()=>{
                  const rows =[];
                  let date = 1;
                  for (let i = 0; i < 6; i++) {
                      // creates a table row
                      rows[i]=<tr key={i}>{(()=>{
                        const columns=[];
                        //creating individual cells, filing them up with data.
                        for (let j = 0; j < 7; j++) {
                            if (i === 0 && j < firstDay) {
                                columns[j] = <td key={j+""+i}></td>;
                            }
                            else if (date > daysInMonth) {
                                break;
                            }
                            else {
                                const className = date===selectedDate.getDate()&&
                                    currentDate.getFullYear()===selectedDate.getFullYear()&&
                                    selectedDate.getMonth()==currentDate.getMonth()?
                                      "selectedDay":" ";
                                columns[j] = <td key={j+""+i}
                                  className={className}
                                  onClick={(date=>()=>{
                                    setSelectedDate(new Date(currentDate.getFullYear(),currentDate.getMonth(),date));
                                  })(date)}>{date}</td>;
                                date++;
                            }

                        }
                        return columns;
                      })()}</tr>;
                  }
                  return rows;
                } )()}
                </tbody>
            </table>

            <div className="container">
            {
              [0,1,2].map(i=>{
                return <div className="row" key={i}>
                {
                  [0,1,2,3].map(j=>{


                      if(mouseOverCell>-1 && mouseOverCell <= i*4+j
                        && i*4+j < mouseOverCell+workHours
                        && busyHours.every(h => mouseOverCell > h
                          || h >= mouseOverCell+workHours) )
                      {    return <div className="col-3 time-column-mouseover" key={j}
                              onMouseLeave={()=>{
                                setMouseOverCell(-1);
                              }}
                              onClick={()=>{
                                setSelectedHour(i*4+j);
                                setTimePicked(true);
                                alert(`selected hour is ${i*4+j}`);
                              }}
                              onMouseEnter={i*4+j!==mouseOverCell?()=>{
                                setMouseOverCell(i*4+j);
                              }:()=>{}}
                              >
                              {`${8+i*4+j}:00`}
                            </div>
                      }else if(busyHours.includes(i*4+j)){
                        return <div className="col-3 time-column-busy" key={j}>
                                {`${8+i*4+j}:00`}
                              </div>
                      }else{
                        return <div className="col-3 time-columns" key={j}
                                onMouseEnter={()=>{
                                  setMouseOverCell(i*4+j);
                                }}>
                                {`${8+i*4+j}:00`}
                              </div>
                      }
                  })
                }
                </div>
              })
            }
            </div>

        </div>
      </div>
    </div>);


}

export default SelectMaster;
/*\



*/

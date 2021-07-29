import React,{FC,useState} from 'react';
import './SelectMaster.css';
type Props = {
  selected:string[]
}

const SelectMaster:FC<Props> = ({selected}:Props)=>{

  const [masters,setMasters]=useState(['Masha','Meri','Ulya','Aygul']);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const [selectedDay,setSelectedDay] = useState(today.getDate());

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
                  console.log(daysInMonth);
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
                                columns[j] = <td key={j+""+i}
                                  className={`${date===selectedDay?"selectedDay":""}`}
                                  onClick={(date=>()=>{

                                    console.log(date);
                                    setSelectedDay(date);
                                  })(date)}>{date}</td>;
                                //if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                                  //  cell.classList.add("bg-info");
                                //} // color today's date
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
            <form className="form-inline">

                <select className="form-control col-sm-4" name="month" id="month" onChange={()=>{"jump()";}}>
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

                <select className="form-control col-sm-4" name="year" id="year" onChange={()=>{"jump()";}}>
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

            <div className="form-inline">

                <button className="btn btn-outline-primary col-sm-6" id="previous" onClick={()=>{"previous()";}}>Previous</button>

                <button className="btn btn-outline-primary col-sm-6" id="next" onClick={()=>{"next()";}}>Next</button>
            </div>
            <br/>

        </div>
      </div>
    </div>);


}

export default SelectMaster;
/*\



*/

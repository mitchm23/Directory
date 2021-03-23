import {useState} from "react";
import EmployeeCard from './EmployeeCard'


const Nav() {
  const [input,setInput] = useState('')
  const handleChange = (e)=> {
    e.preventDefault();
    setInput(e.target.value)
  }
  if(input.length > 0) {
    employee=employee.filter((i) => {
      return i.name.(input)
    })
  }
  return (
    <div className="row p-3">
      <div className="col-4"></div>
      <div className="col-4">
        <nav onSubmit={handleSubmit}>
          <h4>Search by Name:</h4>
          <input type="text"
          placeholder='Search'
          onChange={handleChange}
          value={input}/>
        </nav>
      </div>
      <div className="col-4"></div>
    </div>
  );
}

export default Nav;
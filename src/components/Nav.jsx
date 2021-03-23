import { useContext } from "react";
import EmployeeCard from "./EmployeeCard";

function Nav() {
  const { handleInputChange } = useContext(EmployeeCard);
  return (
    <div className="row p-3">
      <div className="col-4"></div>
      <div className="col-4">
        <nav>
          <h4>Search by Name:</h4>
          <input
            id="employee-search"
            className="form-control"
            onChange={handleInputChange}
          />
        </nav>
      </div>
      <div className="col-4"></div>
    </div>
  );
}

export default Nav;
import { useContext } from "react";
import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";
import DataContext from "../context/DataContext";

const Employees = () => {
  const {
    employees, handleEmployeeCardClick, handleTeamSelectionChange, selectedTeam,
  } = useContext(DataContext);
  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>
          <select className='form-select form-select-sm'
            id='teams'
            aria-label='teamState'
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value='TeamA'>Team A</option>
            <option value='TeamB'>Team B</option>
            <option value='TeamC'>Team C</option>
            <option value='TeamD'>Team D</option>
          </select>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='card-collection'>
          {
              employees.map((employee) => {
                return (
                  <div id={employee.id}
                    className={(employee.teamName === selectedTeam
                      ? "card m-2 standout"
                      : "card m-2")}
                    key={employee.id.toString()}
                    style={{ cursor: "pointer" }}
                    onClick={handleEmployeeCardClick}
                    aria-hidden='true'
                  >
                    {
                    (employee.gender === "male")
                      ? <img src={maleProfile} className='card-img-top' alt='' />
                      : <img src={femaleProfile} className='card-img-top' alt='' />
                  }
                    <div className='card-body'>
                      <h5 className='card-title'>
                        <b>Name: </b>
                        {employee.fullName}
                      </h5>
                      <p className='card-text'>
                        <b>Job: </b>
                        {employee.designation}
                      </p>
                    </div>
                  </div>
                );
              })
            }
        </div>
      </div>
    </main>
  );
};

export default Employees;

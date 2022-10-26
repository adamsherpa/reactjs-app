import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Employees from "./components/Employees";
import GroupedTeamMembers from "./components/GroupedTeamMembers";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) || [
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    }]);

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange (event) {
    console.log(event.target.value);
    setTeam(event.target.value);
  }
  function handleEmployeeCardClick (event) {
    const transformedEmployees = employees.map((employee) => {
      if (employee.id === parseInt(event.currentTarget.id, 10)) {
        if (employee.teamName === selectedTeam) {
          console.log("id match");
          return { ...employee, teamName: "" };
        }
        console.log("no match team");
        return { ...employee, teamName: selectedTeam };
      }
      console.log("finished returning employee");
      return employee;
    });
    setEmployees(transformedEmployees);
  }

  return (
    <div>
      <Router>
        <Header employees={employees}
          selectedTeam={selectedTeam}
        />
        <Routes>
          <Route path='/'
            element={(
              <Employees employees={employees}
                selectedTeam={selectedTeam}
                handleEmployeeCardClick={handleEmployeeCardClick}
                handleTeamSelectionChange={handleTeamSelectionChange}
              />
            )}
          />
          <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

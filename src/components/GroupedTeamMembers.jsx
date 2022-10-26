import { useState, useContext } from "react";
import DataContext from "../context/DataContext";

const GroupedTeamMembers = () => {
  const { employees, selectedTeam, setTeam } = useContext(DataContext);

  function groupTeamMembers() {
    const teams = [];

    const teamAMembers = employees.filter((employee) => { return employee.teamName === "TeamA"; });
    const teamBMembers = employees.filter((employee) => { return employee.teamName === "TeamB"; });
    const teamCMembers = employees.filter((employee) => { return employee.teamName === "TeamC"; });
    const teamDMembers = employees.filter((employee) => { return employee.teamName === "TeamD"; });

    const teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam !== "TeamA",
    };
    teams.push(teamA);

    const teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam !== "TeamB",
    };
    teams.push(teamB);

    const teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam !== "TeamC",
    };
    teams.push(teamC);

    const teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam !== "TeamD",
    };
    teams.push(teamD);

    return teams;
  }

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function handleTeamClick(event) {
    const newGroupedData = groupedEmployees.map((groupedData) => {
      return (groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
    });
    setGroupedData(newGroupedData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className='container'>
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className='card mt-2' style={{ cursor: "pointer" }}>
              <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick} aria-hidden>
                Team Name: {item.team}
              </h4>
              <div id={`collapse_${item.team}`} className={item.collapsed ? "collpased" : ""}>
                <hr />
                {
                  item.members.map((member) => {
                    return (
                      <div className='mt-2'>
                        <h5 className='card-title mt-2'>
                          <span className='text-dark'>Full Name: {member.fullName}</span>
                        </h5>
                        <p className='card-text text-dark mt-2'>
                          <b>Designation: </b>{member.designation}
                        </p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          );
        })
      }
    </main>
  );
};

export default GroupedTeamMembers;

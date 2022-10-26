import { useState } from "react";

const GroupedTeamMembers = () => {
  const [groupedEmployees, setGroupedData] = useState(groupTeam);

  return (
    <header>
      <div className='row justify-content-center mt-3 mb-4'>
        <div className='col-8'>
          <h1>Grouped Team Members</h1>
        </div>
      </div>
    </header>
  );
};

export default GroupedTeamMembers;

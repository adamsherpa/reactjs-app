const Header = ({ employees, selectedTeam }) => {
  const teamMemberCount = employees.filter((employee) => employee.teamName === selectedTeam).length;
  return (
    <header>
      <div className='row justify-content-center mt-3 mb-4'>
        <div className='col-8'>
          <h1>Team Member Allocation</h1>
          <h3>{selectedTeam} has {teamMemberCount} people!</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;

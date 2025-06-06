const StatsDashboard = ({ stats }) => {
    return (
      <div className="stats-dashboard">
        <h2>Stats</h2>
        <p>Posts: <span className="stat-number">{stats.posts}</span></p>
        <p>Followers: <span className="stat-number">{stats.followers}</span></p>
        <p>Following: <span className="stat-number">{stats.following}</span></p>
      </div>
    );
  };
  
  export default StatsDashboard;
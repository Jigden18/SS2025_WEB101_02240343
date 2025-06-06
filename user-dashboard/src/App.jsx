import { useState } from "react";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import EditForm from "./EditForm";
import StatsDashboard from "./StatsDashboard";

const App = () => {
  const [user, setUser] = useState({
    name: "Jigden Shakya",
    bio: "Software Engineering Student at CST",
    email: "jigdenshakya@gmail.com",
    location: "Phuentsholing",
    avatar: "https://via.placeholder.com/100"
  });

  const [stats] = useState({
    posts: 42,
    followers: 150,
    following: 98
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="app">
      <Header />
      {isEditing ? (
        <EditForm user={user} onSave={handleSave} onCancel={() => setIsEditing(false)} />
      ) : (
        <ProfileCard user={user} onEdit={() => setIsEditing(true)} />
      )}
      <StatsDashboard stats={stats} />
    </div>
  );
};

export default App;

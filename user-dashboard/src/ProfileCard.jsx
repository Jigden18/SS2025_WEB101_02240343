import avatar from './assets/pfp.jpg';

const ProfileCard = ({ user, onEdit }) => {
  return (
    <div className="profile-card">
      <img 
        src={avatar} 
        alt="User Avatar" 
        style={{
          width: '100px', 
          height: '100px', 
          objectFit: 'cover', 
          borderRadius: '50%' 
        }} 
      />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
};

export default ProfileCard;

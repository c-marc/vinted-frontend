import "./user.css";

const User = ({ user }) => {
  // The wrapping div is used to deal with a fallback solution (colored disc)
  return (
    <div className="user-container">
      <div className="avatar">
        {user.account.avatar?.secure_url && (
          <img src={user.account.avatar.secure_url} alt="TODO_avatar" />
        )}
      </div>
      <p>{user.account.username}</p>
    </div>
  );
};

export default User;

const User = ({ user }) => {
  return (
    <div className="user">
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

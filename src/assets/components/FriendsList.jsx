import Friend from "./Friend";

const FriendsList = ({ friends, handleSelect, selectedId }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          handleSelect={handleSelect}
          isSelected={friend.id === selectedId}
        />
      ))}
    </ul>
  );
};

export default FriendsList;

import Button from "./UI/Button";

const Friend = ({ friend, handleSelect, isSelected }) => {
  const handleClick = () => {
    isSelected ? handleSelect(null) : handleSelect(friend);
  };

  const balanceText =
    friend.balance == 0 ? (
      <p>You and {friend.name} are even</p>
    ) : friend.balance < 0 ? (
      <p className="red">
        You owe {friend.name} ${-friend.balance}
      </p>
    ) : (
      <p className="green">
        {friend.name} owes you ${friend.balance}
      </p>
    );
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {balanceText}
      <Button onClick={handleClick}>{isSelected ? "Close" : "Select"}</Button>
    </li>
  );
};

export default Friend;

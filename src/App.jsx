import { useState } from "react";
import "./App.css";
import FriendsList from "./assets/components/FriendsList";
import AddFriend from "./assets/components/AddFriend";
import Button from "./assets/components/UI/Button";
import SplitBill from "./assets/components/SplitBill";

function App() {
  const [friends, setFriends] = useState([]);
  const [addFormVisible, setAddFormVisible] = useState(true);
  const [selectedFriend, setSelectFriend] = useState(null);
  const handleSubmit = (data) => {
    setFriends((prevFriends) => {
      return [...prevFriends, data];
    });
  };
  const buttonText = addFormVisible ? "Close" : "Add Friend";
  const handleClick = () => {
    setAddFormVisible((prev) => !prev);
  };

  const handleSelect = (friend) => {
    setSelectFriend(friend);
    setAddFormVisible(false);
  };

  const handleSplitBill = (value) => {
    const updatedFriend = friends.map((friend) =>
      friend.id === selectedFriend.id
        ? { ...friend, balance: value + friend.balance }
        : friend
    );
    setFriends(updatedFriend);
    setSelectFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          handleSelect={handleSelect}
          selectedId={selectedFriend ? selectedFriend.id : null}
        />
        {addFormVisible && <AddFriend onAdd={handleSubmit} />}
        <Button onClick={handleClick} text={buttonText} />
      </div>
      {selectedFriend && (
        <SplitBill friend={selectedFriend} handleSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

export default App;

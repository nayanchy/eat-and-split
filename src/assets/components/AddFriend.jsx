import { useState } from "react";
import Button from "./UI/Button";

const AddFriend = ({ onAdd }) => {
  const [friendData, setFriendData] = useState({
    id: Math.round(Math.random() * 10000),
    name: "",
    image: "",
    balance: 0,
  });
  const handleChange = (e) => {
    const { value } = e.target;
    e.preventDefault();
    setFriendData((prevData) => {
      return {
        ...prevData,
        name: value,
        image: `https://i.pravatar.cc/48?u=${friendData.id}`,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(friendData);
    setFriendData({
      id: Math.round(Math.random() * 10000),
      name: "",
      image: "",
      balance: 0,
    });
  };
  const isButtonDisabled = friendData.name === "" || friendData.image === "";
  return (
    <form onSubmit={handleSubmit} className="form-add-friend">
      <label htmlFor="name">👫 Friend Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={friendData.name}
      />
      <label htmlFor="image">🩻 Image URL</label>
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={friendData.image}
      />
      <Button disabled={isButtonDisabled}>Add Friend</Button>
    </form>
  );
};
export default AddFriend;

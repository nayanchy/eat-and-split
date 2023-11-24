import { useState } from "react";
import Button from "./UI/Button";

const SplitBill = ({ friend, handleSplitBill }) => {
  const [bill, setBill] = useState({
    bill: 0,
    selfBill: 0,
    payee: "self",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    // Check if selfBill is greater than bill, and if so, set it to the bill value
    if (name === "selfBill" && +value > bill.bill) {
      setBill((prevBill) => ({
        ...prevBill,
        [name]: bill.bill,
      }));
    } else {
      setBill((prevBill) => ({
        ...prevBill,
        [name]: name === "payee" ? value : +value,
      }));
    }
  };

  const friendBill = bill.bill - bill.selfBill;

  const splitBill = (e) => {
    e.preventDefault();
    if (bill.bill === 0) return;

    handleSplitBill(bill.payee === "self" ? friendBill : -bill.selfBill);
  };

  return (
    <form className="form-split-bill" onSubmit={splitBill}>
      <h2>Split A Bill With {friend.name}</h2>
      <label htmlFor="">💰 Bill Value</label>
      <input
        type="number"
        name="bill"
        onChange={handleChange}
        value={bill.bill}
      />

      <label htmlFor="">💵 Your Expense</label>
      <input
        type="number"
        name="selfBill"
        onChange={handleChange}
        value={bill.selfBill}
        max={bill.bill}
      />

      <label htmlFor="">💵 {friend.name} Expense</label>
      <input
        type="number"
        name="friendBill"
        disabled
        onChange={handleChange}
        value={friendBill}
      />

      <label htmlFor="">🤑 Who is paying the bill?</label>
      <select name="payee" id="" onChange={handleChange}>
        <option value="self">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split</Button>
    </form>
  );
};

export default SplitBill;

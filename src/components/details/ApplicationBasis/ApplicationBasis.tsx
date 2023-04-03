import React, { useState } from "react";
import ExpandingWindow from "../../ExpandingWindow/ExpandingWindow";
import { VscError as Basket } from "react-icons/vsc";
import Button from "../UI/Button";
import Modal from "../Modal/Modal";

function ApplicationBasis() {
  const [toggle, setToggle] = useState(false);
  const [arr, setArr] = useState([""]);
  const [value, setValue] = useState("");

  const handleChange = (event: any) => setValue(event.target.value);
  const click = () => setArr([...arr, value]);

  const result = arr.map((element, index) => {
    return (
      <div className="action_flex" key={index}>
        <span className="list_person">{element}</span>
        <Button onChange={() => remove(index)} />
      </div>
    );
  });

  function remove(index: number) {
    setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
  }

  return (
    <div>
      <div className="add_pers">
        <div className="btn_window" onClick={() => setToggle(!toggle)}>
          {!toggle ? "Создать нового" : "Свернуть"}
        </div>
        <div className="person">
          {toggle && (
            <ExpandingWindow
              onChange={handleChange}
              onClick={click}
              value={value}
            />
          )}
        </div>
        <div className="persons">
          {result}
          {/*amendments are needed*/}
        </div>
      </div>
    </div>
  );
}

export default ApplicationBasis;
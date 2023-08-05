import React, { useEffect, useState } from "react";

export default function Test() {
  const empty = {
    id: Math.random(),
    name: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    isChecked: false,
  };
  const [list, setList] = useState(empty);
  const [Info, setInfo] = useState([]);

  let addToInfo = () => {
    console.log(list);
    let newarray = [...Info];
    let index = Info.findIndex((x) => x.id == list?.id);
    console.log(newarray);
    if (index == -1) {
      setInfo([...Info, list]);
    } else {
      newarray[index] = list;
      setInfo(newarray);
    }

    setList(empty);
  };
  const reset = () => {
    setList(empty);
  };

  const remove = (id) => {
    let updatedInfo = [...Info];
    updatedInfo = updatedInfo.filter((x) => x.id != id);
    console.log("updatedInfo", updatedInfo);
    setInfo(updatedInfo);
  };
  const edit = (id) => {
    let editinfo = Info[Info.findIndex((x) => x.id == id)];
    setList(editinfo);
    console.log("ffff", editinfo);
  };
  const [counter, setCounter] = useState(2);

  const blueCheckBox = (targetId) => {
    setInfo(
      Info.map((v) =>
        v.id === targetId ? { ...v, isChecked: !v.isChecked } : v
      )
    );
  };
  return (
    <>
      <form>
        <label htmlFor="name">firstname</label>
        <input
          onChange={(e) => setList({ ...list, name: e.target.value })}
          type="text"
          placeholder="Sarah"
          value={list?.name}
        />
        <label htmlFor="lastName">last name</label>
        <input
          onChange={(e) => setList({ ...list, lastName: e.target.value })}
          type="text"
          placeholder="valizadeh"
          value={list?.lastName}
        />
        <label htmlFor="age">age</label>
        <input
          onChange={(e) => setList({ ...list, age: e.target.value })}
          type="number"
          placeholder="23"
          value={list?.age}
        />
        <label htmlFor="email">email</label>
        <input
          onChange={(e) => setList({ ...list, email: e.target.value })}
          type="email"
          placeholder="dfgh@gmail.com"
          name="email"
          value={list?.email}
        />
        <label htmlFor="password">password</label>
        <input
          onChange={(e) => setList({ ...list, password: e.target.value })}
          type="password"
          placeholder="******"
          value={list?.password}
        />
      </form>
      <button onClick={addToInfo}> done!</button>
      <button onClick={reset}>reset</button>
      <div>
        {Info.map((info, index) => (
          <div key={index} id="form">
            <p>
              {" "}
              your fullname is {info.name} {info.lastName}
            </p>
            <p>you are {info.age} years old.</p>
            <p>you can log in by this mail : "{info.email}".</p>
            <p>you are {index + 1} th person.</p>
            <button onClick={() => remove(info?.id)}>delete</button>
            <button
              onClick={() => {
                edit(info?.id);
              }}
            >
              edit
            </button>
            {/* <br></br>
            <br></br>

            <input type="checkbox" onChange={() => blueCheckBox(info?.id)} />
            <label htmlFor="checkbox">{info.email} is my orginal email</label> */}
          </div>
        ))}
      </div>
    </>
  );
}

import React, { useState } from "react";
// import styel from 
export default function Info(){
    const color = ["red", "green", "blue", "yellow"];
    const num = [12, 23, 72, 41];
    // const [list, setList] = useState([
    //   {
    //     name: "sarah",
    //     lastName: "valizadeh",
    //     age: 23,
    //     gender: "women",
    //     password: 123456,
    //   },
    // ]);
    const [name,setName] = useState("")
    const [lastname,setLastName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log(name)
        console.log(lastname)
        console.log(age)
        console.log(email)
        console.log(password)
    }


    return(

   <>
    <form onSubmit={handlesubmit}>
    <label htmlFor="name">firstname</label>
    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Sarah"/>
    <label htmlFor="lastName">last name</label>
    <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="valizadeh"/>
    <label htmlFor="age">age</label>
    <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="23"/>
    <label htmlFor="email">email</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="dfgh@gmail.com" name="email"/>
    <label htmlFor="password">firstname</label>
    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******"/>
    <button onChange={(e) => setName(e.target.value)} type="submit">done!</button>
    </form>

   </>

    )
}
"use client";
import React from "react";

const NewUserList = ({
  CreatNeweUser,
  userInput,
  setUserInput,
  users,
  setUsers,
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    const createdDate = new Date().toLocaleDateString();
    const UpdatedTime = new Date().toLocaleTimeString();

    let AuDate = new Date().toLocaleDateString("en-AU", {
      timeZone: "Australia/Sydney",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const timeZones = {
      AEST: "Australia/Sydney",
      ACST: "Australia/Adelaide",
      AWST: "Australia/Perth",
      AEDT: "Australia/Melbourne",
      ACDT: "Australia/Adelaide",
    };

    function getTimeInTimeZone(timeZone) {
      return new Date().toLocaleString("en-AU", { timeZone });
    }

    const timesInTimeZones = Object.keys(timeZones).map((zone) => {
      return `${zone}: ${getTimeInTimeZone(timeZones[zone])}`;
    });

    const initialValue = {
      id: "",
      name: "",
      gender: "",
      phone: "",
      age: "",
      hobby: "",
    };

    if (
      userInput.name.trim() === "" ||
      userInput.phone.trim() === "" ||
      userInput.age.trim() === "" ||
      userInput.hobby.trim() === ""
    ) {
      console.log("Please fill out all the fields");
    } else {
      if (userInput.id) {
        const updatedUsers = users.map((user) =>
          user.id === userInput.id ? userInput : user
        );
        setUsers(updatedUsers);
        setUserInput(initialValue);
      } else {
        const newId = Date.now().toString();
        CreatNeweUser({
          ...userInput,
          id: newId,
          date: createdDate,
          time: UpdatedTime,
        });
        setUserInput(initialValue);
      }
    }
  }

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  return (
    <div className="space-y-5 pt-6">
      <div className="mb-1 text-zinc-400 block text-center text-xl capitalize">
        Add user
      </div>
      <form
        onSubmit={handleSubmit}
        className="items-center grid grid-cols-2 gap-4 max-w-96 mx-auto pb-5 p-4"
      >
        <input
          type="text"
          name="name"
          value={userInput.name}
          onChange={handleChange}
          className="p-2 h-11 bg-zinc-900 text-zinc-500"
          placeholder="Name"
        />

        <input
          type="text"
          name="phone"
          value={userInput.phone}
          onChange={handleChange}
          className="p-2 h-11 bg-zinc-900 text-zinc-500"
          placeholder="Phone"
        />

        <input
          type="text"
          name="age"
          value={userInput.age}
          onChange={handleChange}
          className="p-2 h-11 bg-zinc-900 text-zinc-500"
          placeholder="Age"
        />

        <select
          name="hobby"
          value={userInput.hobby}
          onChange={handleChange}
          className="p-2 h-11 bg-zinc-900 text-zinc-400"
        >
          <option value="Hobby">Hobby</option>
          <option value="Volunteering">Volunteering</option>
          <option value="Music">Music</option>
          <option value="Swim">Swim</option>
          <option value="Hiking">Hiking</option>
          <option value="Playing an instrument (e.g., guitar, piano)">
            Playing an instrument (e.g., guitar, piano)
          </option>
          <option value="CookOrBaking">Cooking or baking</option>
          <option value="Sports">Sports</option>
          <option value="Fishing">Fishing</option>
          <option value="crocheting">crocheting</option>
          <option value="DIY projects or crafts">DIY projects or crafts</option>
        </select>

        <div className="flex items-center justify-between">
          <label htmlFor="male" className="flex items-center space-x-2">
            <input
              id="male"
              type="radio"
              name="gender"
              checked={userInput.gender === "male"}
              value="male"
              onChange={handleChange}
              className="p-1 h-4 w-4 rounded-full bg-zinc-900 text-zinc-500 bg:zinc-600 appearance-none"
            />
            <span>Male</span>
          </label>
          <label htmlFor="female" className="flex items-center space-x-2">
            <input
              id="female"
              type="radio"
              name="gender"
              checked={userInput.gender === "female"}
              value="female"
              onChange={handleChange}
              className="p-1 h-4 w-4 rounded-full bg-zinc-900 text-zinc-500 bg:zinc-600 appearance-none"
            />
            <span>Female</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-slate-800 py-2 px-4 top capitalize col-span-2"
        >
          {userInput.id ? "Update" : "save"}
        </button>
      </form>
    </div>
  );
};

export default NewUserList;

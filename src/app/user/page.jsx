"use client";
import NewUserList from "@/Components/NewUserList";
import UserList from "@/Components/UserList";
import React, { useState } from "react";

const page = () => {
  const [users, setUsers] = useState([]);

  const [isVisible, setIsvisible] = useState(false);

  const [removeData, setRemoveData] = useState(null);

  const [userInput, setUserInput] = useState({
    id: "",
    name: "",
    gender: "",
    phone: "",
    age: "",
    hobby: "Hobby",
  });

  function CreatNeweUser(newUser) {
    setUsers([...users, newUser]);
  }

  function EditRowData(id) {
    const updatedUser = users.find((user) => user.id === id);
    setUserInput(updatedUser);
  }

  function ConfirmRemoveData(id) {
    setIsvisible(true);
    setRemoveData(id);
  }

  function RemoveData() {
    if (removeData) {
      const updatedUsers = users.filter((user) => user.id !== removeData);
      setUsers(updatedUsers);
      setIsvisible(false);
      setRemoveData(null);
    }
  }

  function sortDataAscending(users) {
    const sortedUsers = [...users].sort(
      (a, b) => Number(a.age) - Number(b.age)
    );
    setUsers(sortedUsers);
  }

  function sortDesscending(users) {
    const sortedUsers = [...users].sort(
      (a, b) => Number(b.age) - Number(a.age)
    );
    setUsers(sortedUsers);
  }

  return (
    <div className="space-y-3 container mx-auto">
      <NewUserList
        CreatNeweUser={CreatNeweUser}
        userInput={userInput}
        users={users}
        setUsers={setUsers}
        setUserInput={setUserInput}
      />

      <UserList
        users={users}
        editData={EditRowData}
        RemoveData={ConfirmRemoveData}
        sortAscending={sortDataAscending}
        sortDesscending={sortDesscending}
      />

      <div
        className={`h-full w-full text-center bg-black/90 inset-0 space-y-5 flex flex-col justify-center items-center ${
          isVisible ? "fixed" : "hidden"
        }`}
      >
        <p className="block mt-4">Are you sure want to delete this data ?</p>
        <div className="flex items-center justify-center">
          <button
            onClick={RemoveData}
            className="bg-red-500 text-white px-4 py-2"
          >
            Yes
          </button>
          <button
            onClick={() => setIsvisible(false)}
            className="bg-gray-500 text-white px-4 py-2"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

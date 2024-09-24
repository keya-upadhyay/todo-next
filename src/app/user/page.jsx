"use client";
import NewUserList from "@/Components/NewUserList";
import RemoveDataPopUp from "@/Components/RemoveDataPopUp";
import UserList from "@/Components/UserList";
import React, { useState } from "react";
const page = () => {
  const [searchData, setSearchData] = useState("");

  const [isOpen, setIsOpen] = useState(false);

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

  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Rahul Sharma",
      gender: "male",
      phone: "9876543210",
      age: "30",
      hobby: "Cricket",
    },
    {
      id: "2",
      name: "Priya Verma",
      gender: "female",
      phone: "8765432109",
      age: "28",
      hobby: "Dancing",
    },
    {
      id: "3",
      name: "Anil Kumar",
      gender: "male",
      phone: "7654321098",
      age: "35",
      hobby: "Reading",
    },
    {
      id: "4",
      name: "Sneha Patel",
      gender: "female",
      phone: "6543210987",
      age: "25",
      hobby: "Cooking",
    },
    {
      id: "5",
      name: "Vikram Singh",
      gender: "male",
      phone: "5432109876",
      age: "32",
      hobby: "Traveling",
    },
    {
      id: "6",
      name: "Neha Reddy",
      gender: "female",
      phone: "4321098765",
      age: "29",
      hobby: "Painting",
    },
  ]);

  const [originalUsers, setOriginalUsers] = useState([
    {
      id: "1",
      name: "Rahul Sharma",
      gender: "male",
      phone: "9876543210",
      age: "30",
      hobby: "Cricket",
    },
    {
      id: "2",
      name: "Priya Verma",
      gender: "female",
      phone: "8765432109",
      age: "28",
      hobby: "Dancing",
    },
    {
      id: "3",
      name: "Anil Kumar",
      gender: "male",
      phone: "7654321098",
      age: "35",
      hobby: "Reading",
    },
    {
      id: "4",
      name: "Sneha Patel",
      gender: "female",
      phone: "6543210987",
      age: "25",
      hobby: "Cooking",
    },
    {
      id: "5",
      name: "Vikram Singh",
      gender: "male",
      phone: "5432109876",
      age: "32",
      hobby: "Traveling",
    },
    {
      id: "6",
      name: "Neha Reddy",
      gender: "female",
      phone: "4321098765",
      age: "29",
      hobby: "Painting",
    },
  ]);

  const [matchUser, setMatchUser] = useState([]);

  function creatNewUser(newUser) {
    setUsers([...users, newUser]);
    setOriginalUsers([...originalUsers, newUser]);
    setIsOpen(false);
  }

  function editRowData(id) {
    setIsOpen(true);
    const updatedUser = users.find((user) => user.id === id);
    setUserInput(updatedUser);
  }

  function confirmRemoveData(id) {
    setIsvisible(true);
    setRemoveData(id);
  }

  function deleteRowData() {
    if (removeData) {
      const updatedUsers = users.filter((user) => user.id !== removeData);
      setUsers(updatedUsers);
      setIsvisible(false);
      setRemoveData(null);
    }
  }

  function sortAgeAscending(users, isAsc) {
    const sortedUsers1 = users.sort((a, b) =>
      isAsc ? +a.age - +b.age : +b.age - +a.age
    );
    setUsers([...sortedUsers1]);
  }

  function sortNamesByAscending(users) {
    const sortedNames = [...users].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setUsers(sortedNames);
  }

  function handleSearch() {
    // include method won't run when the data in table is stored in capitalize manner and your searching data is in lower case
    // for this you should use toLowercase method

    let searchValue = searchData.toLowerCase();

    let matchedUsers = originalUsers.filter(
      (user) => searchValue && user.name.toLowerCase().includes(searchValue)
    );

    let unmatchedusers = originalUsers.filter(
      (user) => !(searchValue && user.name.toLowerCase().includes(searchValue))
    );

    if (searchValue !== "") {
      if (matchedUsers.length > 0) {
        setMatchUser(matchedUsers);
        setUsers([...matchedUsers, ...unmatchedusers]);
      } else {
        alert("No data found");
      }
    } else {
      alert("Please enter search data first");
    }
  }

  function searchDatas(e) {
    let searchString = e.target.value;
    if (searchString === "") {
      setUsers(originalUsers);
      setMatchUser([]);
    }
    setSearchData(searchString);
  }

  return (
    <>
      <div className="space-y-3 container mx-auto py-5">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 text-zinc-400 bg-zinc-700"
        >
          Add user
        </button>
        <div className="flex items-center space-x-2">
          <input onChange={searchDatas} />
          <button
            onClick={handleSearch}
            className="text-zinc-600 p-2 flex-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
              />
            </svg>
          </button>
        </div>

        <NewUserList
          creatNewUser={creatNewUser}
          userInput={userInput}
          users={users}
          setUsers={setUsers}
          setUserInput={setUserInput}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <UserList
          users={users}
          matchUser={matchUser}
          editData={editRowData}
          removeData={confirmRemoveData}
          sortAscending={sortAgeAscending}
          sortNameByAscending={sortNamesByAscending}
        />

        <RemoveDataPopUp
          isVisible={isVisible}
          deleteData={deleteRowData}
          setIsvisible={setIsvisible}
        />
      </div>
    </>
  );
};

export default page;

"use client";
import NewUserList from "@/Components/NewUserList";
import RemoveDataPopUp from "@/Components/RemoveDataPopUp";
import UserList from "@/Components/UserList";
import { Magnifier } from "@/assets/icons/Maginifier";
import React, { useEffect, useState } from "react";
const page = () => {
  const [searchData, setSearchData] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [isVisible, setIsvisible] = useState(false);

  const [removeData, setRemoveData] = useState(null);

  const [isuserActive, setIsUserActive] = useState(true);

  const [matchUser, setMatchUser] = useState([]);

  const [count, setCount] = useState(0);

  const [userInput, setUserInput] = useState({
    id: "",
    name: "",
    gender: "",
    phone: "",
    age: "",
    hobby: "Hobby",
    isActive: true,
  });

  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Rahul Sharma",
      gender: "male",
      phone: "9876543210",
      age: "30",
      hobby: "Cricket",
      isActive: true,
    },
    {
      id: "2",
      name: "Priya Verma",
      gender: "female",
      phone: "8765432109",
      age: "28",
      hobby: "Dancing",
      isActive: false,
    },
    {
      id: "3",
      name: "Anil Kumar",
      gender: "male",
      phone: "7654321098",
      age: "35",
      hobby: "Reading",
      isActive: true,
    },
    {
      id: "4",
      name: "Sneha Patel",
      gender: "female",
      phone: "6543210987",
      age: "25",
      hobby: "Cooking",
      isActive: true,
    },
    {
      id: "5",
      name: "Vikram Singh",
      gender: "male",
      phone: "5432109876",
      age: "32",
      hobby: "Traveling",
      isActive: true,
    },
    {
      id: "6",
      name: "Neha Reddy",
      gender: "female",
      phone: "4321098765",
      age: "29",
      hobby: "Painting",
      isActive: true,
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
      isActive: true,
    },
    {
      id: "2",
      name: "Priya Verma",
      gender: "female",
      phone: "8765432109",
      age: "28",
      hobby: "Dancing",
      isActive: false,
    },
    {
      id: "3",
      name: "Anil Kumar",
      gender: "male",
      phone: "7654321098",
      age: "35",
      hobby: "Reading",
      isActive: true,
    },
    {
      id: "4",
      name: "Sneha Patel",
      gender: "female",
      phone: "6543210987",
      age: "25",
      hobby: "Cooking",
      isActive: true,
    },
    {
      id: "5",
      name: "Vikram Singh",
      gender: "male",
      phone: "5432109876",
      age: "32",
      hobby: "Traveling",
      isActive: true,
    },
    {
      id: "6",
      name: "Neha Reddy",
      gender: "female",
      phone: "4321098765",
      age: "29",
      hobby: "Painting",
      isActive: true,
    },
  ]);

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

  function handleInputSearch(e) {
    let searchString = e.target.value;
    if (searchString === "") {
      setUsers(originalUsers);
      setMatchUser([]);
    }
    setSearchData(searchString);
  }

  function handleActiveUser(id, flag) {
    let activeUser = users.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: !flag };
      } else {
        return item;
      }
    });

    setUsers(activeUser);
  }

  function handleToggleActive() {
    const activeuUsers = users.filter((item) => {
      return item.isActive === true;
    });

    if (isuserActive === true) {
      setUsers([...activeUsers]);
      setIsUserActive(!activeuUsers);
    } else {
      setUsers([...originalUsers]);
      setIsUserActive(!activeuUsers);
    }
  }

  function handleCountPlus() {
    setCount((prevCount) => {
      if (count === 0) {
        setUsers([originalUsers]);
      }
      return prevCount + 1;
    });
  }

  function handleCountMinus() {
    setCount((prevCount) => {
      if (count === 0) {
        setUsers([originalUsers]);
      }
      return prevCount - 1;
    });
  }

  useEffect(() => {
    if (count === 0) {
      setUsers([originalUsers]);
    }
    const matchCountIndexUser = originalUsers[count % originalUsers.length];
    setUsers([matchCountIndexUser]);
    console.log(count);
  }, [count]);

  function Person(name) {
    this.name = name;
  }

  Person.prototype.country = "india";

  function Child(name) {
    Person.call(thi);
  }

  return (
    <>
      <div className="space-y-3 container mx-auto py-5">
        <div className="flex items-center justify-between">
          {/* add new user */}
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 text-zinc-400 bg-zinc-700"
          >
            Add user
          </button>

          <div className="flex items-center space-x-3">
            <button
              className="p-2 bg-zinc-800 text-zinc-600 h-8 w-8 text-lg leading-none"
              onClick={handleCountMinus}
            >
              -
            </button>
            <span className="px-2">{count}</span>
            <button
              className="p-2 bg-zinc-800 text-zinc-600 h-8 w-8 text-lg leading-none"
              onClick={handleCountPlus}
            >
              +
            </button>
          </div>

          {/* searchData filter */}
          <div className="flex items-center space-x-2">
            <input onChange={handleInputSearch} name="searhInput" />
            <button
              onClick={handleSearch}
              className="text-zinc-600 p-2 flex-none"
            >
              <Magnifier />
            </button>
          </div>

          {/* Show active users */}
          <div className="flex items-center">
            <label className="mr-3 font-medium text-zinc-500">
              Active users:
            </label>

            <div
              onClick={handleToggleActive}
              className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors 
              ${
                isuserActive
                  ? "bg-zinc-500 ransform translate-x-0"
                  : "bg-zinc-700"
              }`}
            >
              <div
                className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform 
            ${!isuserActive ? "transform translate-x-7" : ""}`}
              />
            </div>
          </div>
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
          handleActive={handleActiveUser}
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

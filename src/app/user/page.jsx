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

  const [isUserActive, setIsUserActive] = useState(true);

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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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

  const [years, setUserYears] = useState(null);
  const [months, setUserMonths] = useState(null);
  const [days, setUserDays] = useState(null);
  const [totalAge, setTotalAge] = useState(null);
  const [serchedData, setSerchedData] = useState("");

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

  function handleInputSearchClose(e) {
    setSearchData("");
    setUsers(originalUsers);
    setMatchUser([]);
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
    const activeUsers = users.filter((item) => {
      return item.isActive === true;
    });

    if (isUserActive === true) {
      setUsers([...activeUsers]);
      setIsUserActive(!isUserActive);
    } else {
      setUsers([...originalUsers]);
      setIsUserActive(!isUserActive);
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

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();

  // let currentTime = new Date().getTime();
  // let currentday = new Date().getDay();

  function handleday(e) {
    setUserDays(e.target.value);
  }

  function handlemonth(e) {
    setUserMonths(e.target.value);
  }

  function handleyear(e) {
    setUserYears(e.target.value);
  }

  function calculateAge() {
    let year = currentYear - years;
    if (months < currentMonth) {
      let yearMinusOFcurrentYear = currentYear - 1;
      let yearPlusOne = year - 1;
      return ` ${yearMinusOFcurrentYear} years ${yearPlusOne} month `;
    } else {
      let month = currentMonth - months;
      return `${year} year , ${month} month`;
    }
  }

  useEffect(() => {
    if (count === 0) {
      setUsers([originalUsers]);
    }
    const matchCountIndexUser = originalUsers[count % originalUsers.length];
    setUsers([matchCountIndexUser]);
  }, [count]);

  // let products = [
  //   { name: "Laptop", price: 1000, inStock: true },
  //   { name: "Phone", price: 500, inStock: false },
  //   { name: "Tablet", price: 300, inStock: true },
  //   { name: "Monitor", price: 200, inStock: true },
  // ];

  // let emp = ["KU", { name: "keya" }, "KU", { name: "keya" }];

  // let res = emp.filter((item, index, array) => {
  //   if (array.indexOf(item) === index) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // console.log(res);

  // let ProdutsInStock = products.map((item) => item.name);

  // let ProdutsInStocks = products.filter((item) => {
  //   if (item.price > 500) {
  //     return item;
  //   } else {
  //     return null;
  //   }
  // });

  // let a = ProdutsInStocks;

  // let productsName = a.map((item) => item.name);

  // console.log("Name", ...productsName, ProdutsInStocks);

  // const newArray = products
  //   .filter((item) => item.price >= 500)
  //   .map((item) => item.name);

  // const newArray1 = newArray.map((item) => item.name);

  // let str1 = "hello";
  // let str2 = "olleh";
  // let ss1 = str1.toString().split("").reverse().sort().join();

  // let arr = ["jc", { name: "VK" }, "jc", { name: "VK" }];

  // const ress = arr.filter((item, index, array) => {
  //   if (array.indexOf(item) === index) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // console.log(ress);

  // const num = 5431;

  // function addition(num) {
  //   let sum = 0;
  //   while (num !== 0) {
  //     let rem = num % 10;
  //     sum += rem;
  //     num = parseInt(num / 10);
  //   }
  //   return sum > 9 ? addition(sum) : sum;
  // }
  // const res = addition(num);

  // console.log(res);

  // const number = "9816231529845612";

  // const last = number.slice(-4);

  // console.log(last);

  // const res = last.padStart(number.length, "*");

  // console.log(res);

  // console.log(typeOf(2 - "hello"));

  // var Null = null;

  // console.log(typeof Null);
  // null data type id {}

  // const array = [];
  // array[10] = 0;
  // console.log(array);
  // console.log(array[5], "hello");

  // let a = 5;

  // console.log(++a, "++a");
  // console.log(a++, "a++");
  // console.log(++a, "++a");

  // for (i = 0; i < 5; i++) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, 2000);
  // }

  // const arr = ["12he53", "33llo", "34wor99ld"];
  // const arr2 = ["12he53", "33llo", "34wor99ld"];
  // console.log(arr === arr2);
  // const res = "helowrd";

  // const nums = [1, 2, 3, 2, 4, 3];
  // const res = nums.reduce((acc, curr) => {
  //   return !acc.includes(curr) ? [...acc, curr] : acc;
  // }, []);

  // console.log(res);

  // const num1 = 0;
  // const num2 = "0";

  // const red2 = num1 || null;
  // const red1 = num2 || null;

  // console.log(red2);
  // console.log(red1);

  // const str = "keya-k2*";
  // const result = str.split("-");
  // console.log(str);
  // console.log(result);

  // const arr = [1, 2, 3];

  // arr.fill(0, 1, 3);

  // console.log(arr);

  // let sum = arr.reduceRight((acc, curr) => {
  //   console.log(curr, "hello", acc);
  //   return acc + curr;
  // });

  // console.log(sum);

  // const nums = [2, 7, 11, 15];
  // const target = 9;
  // const output = [];

  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j <= nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       console.log(i, j, "hello");
  //       output.push([i, j]);
  //     }
  //   }
  // }
  // console.log(...output);

  // const array = [1, ["2", 3], "4"];
  // const result = [];

  // for (let item of array) {
  //   if (!Array.isArray(item)) {
  //     result.push(item);
  //   }
  // }
  // console.log(result);

  // let a = 10;
  // let b = 20;
  // [a, b] = [b, a];
  // console.log(a);
  // console.log(b);

  // class Person {
  //   constructor() {
  //     console.log("parent");
  //   }
  // }
  // class Child extends Person {
  //   constructor() {
  //     console.log("child");
  //     super();
  //   }
  // }

  // const virat = new Child();

  // const numbers = [1,2,3,22]

  // const numbres = [1, 2, 3, 2, 2, 3];
  // const obj = {};

  // for (let num of numbres) {
  //   obj[num] = (obj[num] || 0) + 1;
  // }

  // console.log(obj[1]);
  // console.log(obj[2]);

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
            <input
              onChange={handleInputSearch}
              value={serchedData}
              name="searhInput"
            />
            <button onClick={handleInputSearchClose}> X</button>
            <button
              onClick={handleSearch}
              className="text-zinc-600 p-2 flex-none"
            >
              <Magnifier />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <input onChange={handleday} name="searhInput" placeholder="day" />
            <input
              onChange={handlemonth}
              name="searhInput"
              placeholder="month"
            />
            <input onChange={handleyear} name="searhInput" placeholder="year" />
            <button
              onClick={calculateAge}
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

            <button
              onClick={handleToggleActive}
              className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors 
              ${
                isUserActive
                  ? "bg-zinc-500 ransform translate-x-0"
                  : "bg-zinc-700"
              }`}
            >
              <span
                className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform 
            ${!isUserActive ? "transform translate-x-7" : ""}${
                  isUserActive ? "bg-slate-300 " : ""
                }`}
              />
            </button>
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

        {totalAge}

        <UserList
          users={users}
          matchUser={matchUser}
          editData={editRowData}
          removeData={confirmRemoveData}
          sortAscending={sortAgeAscending}
          sortNameByAscending={sortNamesByAscending}
          handleActive={handleActiveUser}
        />

        <block className="bg-gray-500 p-4 block">hello {calculateAge()}</block>

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

"use client";
import React from "react";

const UserList = ({
  users,
  editData,
  RemoveData,
  sortAscending,
  sortDesscending,
}) => {
  return (
    <div className="overflow-x-auto text-zinc-400">
      <table className="min-w-full table-fixed text-left border-collapse border-b border-zinc-800 border-r border-l">
        <thead className="bg-zinc-900">
          <tr>
            <th className="py-2 px-4 font-light border-r border-zinc-800">
              Id
            </th>
            <th className="py-2 px-4 font-light border-r border-zinc-800">
              Name
            </th>
            <th className="py-2 px-4 font-light border-r border-zinc-800">
              Gender
            </th>
            <th className="py-2 px-4 font-light border-r border-zinc-800">
              Phone
            </th>
            <th className="py-2 px-4 font-light border-r border-zinc-800 flex items-center space-x-2 justify-between">
              <button onClick={() => sortDesscending(users)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="h-5 "
                >
                  <path
                    fill="currentColor"
                    d="M19 7h3l-4-4l-4 4h3v14h2M2 17h10v2H2M6 5v2H2V5m0 6h7v2H2z"
                  />
                </svg>
              </button>
              <span>Age</span>

              <button onClick={() => sortAscending(users)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="h-5"
                >
                  <path
                    fill="currentColor"
                    d="M19 17h3l-4 4l-4-4h3V3h2M2 17h10v2H2M6 5v2H2V5m0 6h7v2H2z"
                  />
                </svg>
              </button>
            </th>
            <th className="py-2 px-4 font-light border-r border-zinc-800">
              Hobby
            </th>
            <th className="py-2 px-4 font-light border-r border-zinc-800">
              Created on
            </th>
            <th className="py-2 px-4 font-light border-r border-zinc-800">
              Updated on
            </th>
            <th className="py-2 px-4 font-light border-r border-zinc-800"></th>
            <th className="py-2 px-4 font-light "></th>
          </tr>
        </thead>
        <tbody className="text-left divide-y divide-zinc-800">
          {users?.map((user, index) => (
            <tr
              key={index}
              className="text-left capitalize font-extralight border-b border-b-zinc-800"
            >
              <td className="py-2 px-4 border-r border-zinc-800">{user?.id}</td>
              <td className="py-2 px-4 border-r border-zinc-800">
                {user?.name}
              </td>
              <td className="py-2 px-4 border-r border-zinc-800">
                {user?.gender}
              </td>
              <td className="py-2 px-4 border-r border-zinc-800">
                {user?.phone}
              </td>
              <td className="py-2 px-4 border-r border-zinc-800">
                {user?.age}
              </td>
              <td className="py-2 px-4 border-r border-zinc-800">
                {user?.hobby}
              </td>
              <td className="py-2 px-4 border-r border-zinc-800">
                {user?.date}
              </td>
              <td className="py-2 px-4 border-r border-zinc-800">
                {user?.date} - {user?.time}
              </td>

              <td className="py-2 px-4 border-r border-zinc-800 text-center">
                <button onClick={() => editData(user.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mx-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"
                    />
                  </svg>
                </button>
              </td>

              <td className="py-2 px-4 text-center">
                <button onClick={() => RemoveData(user.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mx-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

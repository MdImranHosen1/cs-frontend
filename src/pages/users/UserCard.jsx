import * as React from "react";
import { Link } from "react-router-dom";

export default function UserCard({users}) {
  
  return (
    <>
      <div class=" w-full p-6 bg-white border border-gray-300 rounded-lg shadow ">
        <Link to="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {users.userName}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 ">{users.userPhone}</p>
        <Link
          to="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}

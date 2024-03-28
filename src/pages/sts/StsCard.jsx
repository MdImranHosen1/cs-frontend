// import * as React from "react";
// import { Link } from "react-router-dom";
// import img from "./../../assets/user.png";

// export default function StsCard({ users }) {
//   console.log(users);
//   return (
//     <div class="  flex  items-center w-full  bg-white border border-gray-100 rounded-lg shadow   hover:bg-gray-200">
//       <img
//         className="ml-5 mr-5 rounded-md object-cover rounded-t-lg h-40 w-40"
//         src={img}
//         alt="Photo"
//       />
//       <div class="flex justify-between w-full">
//         <div class="p-5">
//           <b>
//             <h1 class="mb-1">Name: {users.userName}</h1>
//             <h4 class="mb-1">Type: {users.userType}</h4>
//             <h4 class="mb-1">Phone Number: {users.userPhone}</h4>
//             <h4 class="mb-1">Email: {users.userEmail}</h4>
//             <h4 class="mb-1">Roles: {users.userRoles}</h4>
//           </b>
//           <Link to={`/users/${users.userId}`}>
//             <div class="text-sm w-28 rounded-sm text-blue-800 bg-gray-300 hover:bg-blue-700 hover:text-white   text-center">
//               <b>More Info</b>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

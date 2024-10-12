// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminPanel = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const token = localStorage.getItem('token');
//       const res = await axios.get('http://localhost:5000/api/auth/admin/users', {
//         headers: { Authorization: token }
//       });
//       setUsers(res.data);
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Admin Panel</h1>
//       <h2>User List</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.rollNumber}>{user.rollNumber} - Class: {user.class}, Section: {user.section}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminPanel;

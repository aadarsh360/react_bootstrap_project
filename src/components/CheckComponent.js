import React, { useState } from "react";

const AppCheck = () => {
  // User data array
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 35 },
  ];

  // State for the selected user
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to handle user click
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* User List */}
        <div className="col-4 border border-primary p-3">
          <h5 className="mb-3">Users</h5>
          <ul className="list-group">
            {users.map((user) => (
              <li
                key={user.id}
                className="list-group-item list-group-item-action"
                onClick={() => handleUserClick(user)}
                style={{ cursor: "pointer" }}
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>

        {/* User Details */}
        <div className="col-8 border border-success p-3">
          <h5 className="mb-3">User Details</h5>
          {selectedUser ? (
            <div>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Age:</strong> {selectedUser.age}</p>
            </div>
          ) : (
            <p>Select a user to see their details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppCheck;

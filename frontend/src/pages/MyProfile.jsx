import React, { useState } from "react";
import { assets } from "../assets/assets";

function MyProfile() {
  const [user, setUser] = useState({
    profilePic: assets.profile_pic,
    name: "User Name",
    email: "anymail@gmail.com",
    phone: "+92300-1234567",
    address: "Lorem ipsum dolor sit.",
    gender: "Male",
    birthday: "04-06-2000",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setEditedUser((prevUser) => ({
          ...prevUser,
          profilePic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="px-10 md:px-24 py-10">
      <div className="w-full md:w-1/2 p-3 border-b border-gray-300">
        <img
          src={isEditing ? editedUser.profilePic : user.profilePic}
          className="h-30 w-30 rounded-lg mb-4 object-cover"
          alt="Profile"
        />
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4 p-2 rounded w-52 border-0 border-b border-gray-600"
          />
        )}
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleChange}
            className="p-2 rounded border-0 border-b border-gray-600"
          />
        ) : (
          <h2 className="text-xl font-semibold">{user.name}</h2>
        )}
      </div>

      <h2 className="text-xl font-extralight my-4">Contact Information</h2>
      <div className="flex flex-col gap-4">
        {Object.entries({
          Email: "email",
          Phone: "phone",
          Address: "address",
        }).map(([key, value]) => (
          <div key={key} className="flex gap-3">
            <b>{key}:</b>
            {isEditing ? (
              <input
                type="text"
                name={value}
                value={editedUser[value]}
                onChange={handleChange}
                className="p-1  border-0 border-b border-gray-600"
              />
            ) : (
              <p className="text-gray-500">{user[value]}</p>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-extralight mt-8 mb-4">Basic Information</h2>
      <div className="flex flex-col gap-4">
        {Object.entries({ Gender: "gender", Birthday: "birthday" }).map(
          ([key, value]) => (
            <div key={key} className="flex gap-3">
              <b>{key}:</b>
              {isEditing ? (
                <input
                  type="text"
                  name={value}
                  value={editedUser[value]}
                  onChange={handleChange}
                  className=" p-1 roundedborder-0 border-b border-gray-600"
                />
              ) : (
                <p className="text-gray-500">{user[value]}</p>
              )}
            </div>
          )
        )}
      </div>

      <div className="my-10 flex gap-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-violet-500 text-white min-w-30 px-4 py-2 text-center rounded-full hover:bg-violet-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-violet-500 text-white min-w-30 px-4 py-2 text-center rounded-full hover:bg-violet-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default MyProfile;

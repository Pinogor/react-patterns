import React, { useState, FormEvent, ChangeEvent } from "react";
import "./style.scss";

interface UserProps {
  username: string;
  phone: string;
  website: string;
}

interface FormProps {
  onUserAddition: (user: UserProps) => void;
}

const Form: React.FC<FormProps> = ({ onUserAddition }) => {
  const [formData, setFormData] = useState<UserProps>({
    username: "",
    phone: "",
    website: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const user: UserProps = await response.json();
      onUserAddition(user);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Website:
          <input
            type="url" // изменен type на url
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </label>
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

import { useState } from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';
import { getData } from '../features/auth/authSlice';

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    about: '',
  });

  const [error, setError] = useState({
    username: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    about: '',
  });

  const {
    username,
    firstName,
    lastName,
    address,
    city,
    country,
    postalCode,
    about,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const email = useSelector(getData);

  const validateForm = () => {
    let valid = true;

    const newErrors = {
      username: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      about: '',
    };

    if (!username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }
    if (!firstName.trim()) {
      newErrors.firstName = 'FirstName is required';
      valid = false;
    }
    if (!lastName.trim()) {
      newErrors.lastName = 'LastName is required';
      valid = false;
    }
    if (!address.trim()) {
      newErrors.address = 'Address is required';
      valid = false;
    }
    if (!city.trim()) {
      newErrors.city = 'City is required';
      valid = false;
    }
    if (!country.trim()) {
      newErrors.country = 'Country is required';
      valid = false;
    }
    if (!postalCode.trim()) {
      newErrors.postalCode = 'PostalCode is required';
      valid = false;
    }
    if (!about.trim()) {
      newErrors.about = 'About Me is required';
      valid = false;
    }

    setError(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted');

      setFormData({
        username: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        about: '',
      });

      setError({
        username: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        about: '',
      });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <aside className="w-full border border-b-2 border-slate-300 border-b-black bg-gray-100 px-4 py-6">
      <h2 className="mb-4 text-lg text-slate-500">Edit Profile</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="mainContainer">
          <div className="subContainer">
            <label className="label">COMPANY (DISABLED)</label>
            <input
              disabled
              type="text"
              value={'Creative Code Inc.'}
              className="input rounded-md bg-gray-200 disabled:cursor-not-allowed"
            />
          </div>
          <div className="subContainer">
            <label className="label">USERNAME</label>
            <input
              type="text"
              placeholder="Username"
              className={`input ${error.username && 'border-red-500'}`}
              value={username}
              name="username"
              onChange={handleChange}
            />
            {error.username && (
              <p className="text-sm text-red-500">{error.username}</p>
            )}
          </div>
          <div className="subContainer">
            <label className="label ">EMAIL ADDRESS</label>
            <input
              type="text"
              placeholder="Email Address"
              className="input"
              value={email}
            />
          </div>
        </div>
        <div className="mainContainer">
          <div className="subContainer">
            <label className="label">FIRST NAME</label>
            <input
              type="text"
              placeholder="First Name"
              className={`input ${error.firstName && 'border-red-500'}`}
              value={firstName}
              onChange={handleChange}
              name="firstName"
            />
            {error.firstName && (
              <p className="text-sm text-red-500">{error.firstName}</p>
            )}
          </div>
          <div className="subContainer">
            <label className="label">LAST NAME</label>
            <input
              type="text"
              placeholder="Last Name"
              className={`input ${error.lastName && 'border-red-500'}`}
              value={lastName}
              onChange={handleChange}
              name="lastName"
            />
            {error.lastName && (
              <p className="text-sm text-red-500">{error.lastName}</p>
            )}
          </div>
        </div>

        <div className="subContainer">
          <label className="label">ADDRESS</label>
          <input
            type="text"
            placeholder="Home Address"
            className={`input ${error.address && 'border-red-500'}`}
            onChange={handleChange}
            name="address"
            value={address}
          />
          {error.address && (
            <p className="text-sm text-red-500">{error.address}</p>
          )}
        </div>

        <div className="mainContainer">
          <div className="subContainer">
            <label className="label">CITY</label>
            <input
              type="text"
              placeholder="City"
              className={`input ${error.city && 'border-red-500'}`}
              onChange={handleChange}
              value={city}
              name="city"
            />
            {error.city && <p className="text-sm text-red-500">{error.city}</p>}
          </div>
          <div className="subContainer">
            <label className="label">COUNTRY</label>
            <input
              type="text"
              placeholder="Country"
              className={`input ${error.country && 'border-red-500'}`}
              onChange={handleChange}
              name="country"
              value={country}
            />
            {error.country && (
              <p className="text-sm text-red-500">{error.country}</p>
            )}
          </div>
          <div className="subContainer">
            <label className="label">POSTAL CODE</label>
            <input
              type="text"
              placeholder="ZIP Code"
              className={`input ${error.postalCode && 'border-red-500'}`}
              onChange={handleChange}
              value={postalCode}
              name="postalCode"
            />
            {error.postalCode && (
              <p className="text-sm text-red-500">{error.postalCode}</p>
            )}
          </div>
        </div>
        <div className="subContainer">
          <label className="label">ABOUT ME</label>
          <textarea
            placeholder="Here can be your description"
            rows="5"
            cols="33"
            className={`input resize-none ${error.about && 'border-red-500'}`}
            onChange={handleChange}
            name="about"
            value={about}
          />
          {error.about && <p className="text-sm text-red-500">{error.about}</p>}
        </div>
        <div className="text-right">
          <Button>Update Profile</Button>
        </div>
      </form>
    </aside>
  );
};

export default UserProfileForm;

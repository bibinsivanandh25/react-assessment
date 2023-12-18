import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import Button from '../components/Button';
import OrBlock from '../components/OrBlock';
import ReCaptcha from '../components/ReCaptcha';
import SocialIcons from '../components/SocialIcons';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [capVal, setCapVal] = useState(null);

  const { email, password } = formData;

  const [error, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!email || !password) return;

    if (validateForm()) {
      dispatch(login(email));
      navigate('/profile');

      setFormData({ email: '', password: '' });
      setErrors({ email: '', password: '' });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center font-sans">
      <div className="w-96 rounded-sm border-b-2 border-black bg-gray-100 px-5 py-3 text-slate-600">
        <div className="flex items-center  justify-between">
          <span className="text-lg text-slate-500">Login with</span>
          <IoMdClose className="cursor-pointer text-2xl text-slate-400" />
        </div>
        <SocialIcons />
        <OrBlock />
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                value={email}
                name="email"
                className={`input w-full border ${
                  error.email && 'border-red-500'
                } 1 bg-gray-200 transition-all duration-300 placeholder:text-slate-400 focus:bg-gray-200`}
              />
              {error.email && (
                <p className="text-sm text-red-500">{error.email}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={password}
                name="password"
                className={`input w-full border ${
                  error.email && 'border-red-500'
                } bg-gray-200  transition-all duration-300 placeholder:text-slate-400 focus:bg-gray-200 `}
              />
              {error.password && (
                <p className="text-sm text-red-500">{error.password}</p>
              )}
            </div>
            <div className="mt-3">
              <Button disabled={!capVal} style={'w-full'} type="submit">
                LOGIN
              </Button>
            </div>
            <div className="mt-4 flex justify-center">
              <ReCaptcha setCapVal={setCapVal} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

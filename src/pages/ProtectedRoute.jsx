import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;

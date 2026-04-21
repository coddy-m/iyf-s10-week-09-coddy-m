import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from '../hooks';
import { useAuth } from '../contexts/AuthContext';
import { Input, Button, Card } from '../components/shared';

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [serverError, setServerError] = useState(null);

  const validate = (values) => {
    const errors = {};
    if (!values.username?.trim()) {
      errors.username = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const { 
    values, 
    errors, 
    touched, 
    handleChange, 
    handleBlur, 
    handleSubmit,
    reset 
  } = useForm({ username: '', password: '' }, validate);

  const onSubmit = async (formData) => {
    setServerError(null);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Demo: accept any credentials (for learning purposes)
    if (formData.username && formData.password.length >= 6) {
      login({
        id: 1,
        name: formData.username,
        email: `${formData.username}@example.com`
      });
      navigate('/');
    } else {
      setServerError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card title="Sign In" className="w-full max-w-md">
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit); }} className="space-y-4">
          {serverError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-danger text-sm">
              {serverError}
            </div>
          )}

          <Input
            label="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && errors.username}
            placeholder="Enter your username"
            autoComplete="username"
            required
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />

          <Button type="submit" fullWidth loading={false}>
            Sign In
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary font-medium hover:text-blue-600">
            Create one
          </Link>
        </p>

        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
          <p className="font-medium">Demo Credentials:</p>
          <p>Username: any name</p>
          <p>Password: 6+ characters</p>
        </div>
      </Card>
    </div>
  );
}

export default Login;
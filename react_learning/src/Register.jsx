import { useState } from 'react'

const Register = () => {
  // 1. State for form fields
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // 2. State for validation errors
  const [errors, setErrors] = useState({});
  // State for successful submission message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 3. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 4. Validation logic
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.username.trim()) {
      tempErrors.username = 'Username is required';
    }
    
    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword){
        tempErrors.confirmPassword = "Password must be confirmed"
    }else if (formData.password !== formData.confirmPassword){
        tempErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(tempErrors);
    // Form is valid if the errors object has no keys
    return Object.keys(tempErrors).length === 0;
  };

  // 5. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form Data Submitted:', formData);
      // You would typically call an API here
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Register</h2>
      {isSubmitted && <div style={{ color: 'green', marginBottom: '15px' }}>Registration successful!</div>}
      
      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.username && <span style={{ color: 'red', fontSize: '14px' }}>{errors.username}</span>}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '14px' }}>{errors.email}</span>}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.password && <span style={{ color: 'red', fontSize: '14px' }}>{errors.password}</span>}
        </div>

        {/* Confirm Password Field */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.confirmPassword && <span style={{ color: 'red', fontSize: '14px' }}>{errors.confirmPassword}</span>}
        </div>

        <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
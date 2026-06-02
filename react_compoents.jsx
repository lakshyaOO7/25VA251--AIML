import Greeting from './components/Greeting';  
function App(){   
    return (     
    <div>        
        <Greeting />           
    </div>); 
}
export default App;
function Greeting(){   
    return <h1>Hello, World!</h1>; 
}  
export default Greeting;
function Greeting() { 
    return ( 
    <> 
    <h1>Hello, World!</h1>; 
    </>)
}
export default Greeting;
function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
    const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Registration Successful:", formData);
      alert("Registration Successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.name}</p>
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.email}</p>
      </div>

      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.password}</p>
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.confirmPassword}</p>
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
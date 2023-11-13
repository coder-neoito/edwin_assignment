import { useState, ChangeEvent, FormEvent } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      email: '',
      password: '',
    });
  };
  return (
    <>
      <h1 className="font-bold text-[45px] text-white my-10">Welcome Back</h1>
      <div>
        <span className="text-sm text-[#9d9dbb]">
          Don't have an account.{' '}
          <span className="text-[#0dd] font-medium">Create one now.</span>
        </span>
        <form onSubmit={handleSubmit} className="text-black">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;

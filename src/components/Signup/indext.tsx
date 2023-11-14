import { Hide, Show } from 'assets/Images';
import useAuthContext from 'hooks/UseAuthContext';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: '',
  });
  const navigate = useNavigate();
  const {signUpHandler} = useAuthContext();
  const loginSchema = z
    .object({
      email: z.string().min(1, 'Required').email(),
      password: z
        .string()
        .min(1, 'Required')
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
          {
            message:
              'Password should be 8 characters or more and include lowercase, uppercase, digit, and special character',
          }
        ),
      confirm_password: z.string().min(1, 'Required'),
    })
    .refine((data) => data.confirm_password === data.password, {
      message: 'Password does not match',
      path: ['confirm_password'],
    });
  type FormattedErrorsType = z.inferFormattedError<typeof loginSchema>;
  const [errors, setErrors] = useState<FormattedErrorsType>();

  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const r = loginSchema.safeParse(formData);
    if (!r.success) {
      let err = r.error.format();
      setErrors(err);
    } else {
      setErrors(undefined);
    }

    const { loggedIn, message } = signUpHandler(formData);
    if (loggedIn) navigate('/');
    else
      toast.error(message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
  };

  return (
    <>
      <h1 className="font-bold text-[45px] text-white my-10">Get Started</h1>
      <div>
        <span className="text-sm text-[#9d9dbb]">
          Already have an account.{' '}
          <span
            className="text-[#0dd] font-medium cursor-pointer"
            onClick={() => navigate('/sign-in')}
          >
            Click to sign-in
          </span>
        </span>
        <form onSubmit={handleSubmit} className="text-white max-w-[30rem]">
          <div className="mb-6 w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-bold text-white"
            >
              Email
            </label>
            <div
              className={`border text-sm rounded ${
                errors?.email
                  ? '!border-[#FD4466] focus-within:border-[#FD4466] focus-within:ring-[#FD4466]'
                  : 'border-[#8484a588] focus-within:border-white focus-within:ring-white '
              } block w-full p-3 bg-[#343444]`}
            >
              <input
                type="text"
                id="email"
                name="email"
                className="border-none outline-none !bg-transparent w-full"
                placeholder="Email"
                onChange={handleChange}
                required={false}
              />
            </div>
            <span className="error-message">{errors?.email?._errors[0]}</span>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-bold text-white"
            >
              Password
            </label>
            <div
              className={`border text-sm rounded ${
                errors?.password
                  ? '!border-[#FD4466] focus-within:border-[#FD4466] focus-within:ring-[#FD4466]'
                  : 'border-[#8484a588] focus-within:border-white focus-within:ring-white '
              } w-full p-3 bg-[#343444] flex gap-2`}
            >
              <input
                type={show ? 'text' : 'password'}
                id="password"
                name="password"
                className="border-none outline-none !bg-transparent flex-1"
                placeholder="Password"
                onChange={handleChange}
              />
              <div onClick={() => setShow((pre) => !pre)}>
                {show ? (
                  <img src={Hide} alt="" width={22} height={15} />
                ) : (
                  <img src={Show} alt="" width={22} height={15} />
                )}
              </div>
            </div>
            <span className="error-message">
              {errors?.password?._errors[0]}
            </span>
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-lg font-bold text-white"
            >
              Confirm Password
            </label>
            <div
              className={`border text-sm rounded ${
                errors?.confirm_password
                  ? '!border-[#FD4466] focus-within:border-[#FD4466] focus-within:ring-[#FD4466]'
                  : 'border-[#8484a588] focus-within:border-white focus-within:ring-white '
              }  w-full p-3 bg-[#343444] flex gap-2`}
            >
              <input
                type={showConfirm ? 'text' : 'password'}
                id="confirm-password"
                name="confirm_password"
                className="border-none outline-none !bg-transparent flex-1"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              <div onClick={() => setShowConfirm((pre) => !pre)}>
                {showConfirm ? (
                  <img src={Hide} alt="" width={22} height={15} />
                ) : (
                  <img src={Show} alt="" width={22} height={15} />
                )}
              </div>
            </div>
            <span className="error-message">
              {errors?.confirm_password?._errors[0]}
            </span>
          </div>
          <button
            className="header-button bg-white text-[#292936]"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;

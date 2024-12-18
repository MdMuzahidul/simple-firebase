import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registation = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setErrorMessage("");
    setSuccess(false);
    if (password.length < 6) {
      setErrorMessage("password should be at least 6 characters");
      return;
    }
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
    if (!regex.test(password)) {
      setErrorMessage("password should be at least a-z ,A-Z,!,@,#,$,%,&");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="w-3/12 mx-auto space-y-10">
      <h3 className="text-4xl">welcome to registation page</h3>
      <form onSubmit={handlePassword}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[52px]"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {errorMessage && <p className="text-red-700">{errorMessage}</p>}
      {success && <p className="text-green-800">sign is successful</p>}
    </div>
  );
};

export default Registation;

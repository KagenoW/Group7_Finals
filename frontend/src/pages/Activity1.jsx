// Activity1.jsx

import { useState } from "react";
import {
  LockKeyhole,
  User,
  KeyRound,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
} from "lucide-react";

const SAMPLE_CREDENTIALS = {
  username: "student",
  password: "student123",
};
//Jairus Ilacio
function Activity1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus(null);
      return;
    }

    if (
      username === SAMPLE_CREDENTIALS.username &&
      password === SAMPLE_CREDENTIALS.password
    ) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex h-150 w-full items-center justify-center overflow-hidden bg-[#f4f7fc] px-4">
      <div className="w-full max-w-sm rounded-[24px] border border-slate-200 bg-white p-7 shadow-xl">
        {/* BADGE */}
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-[#f5c400] px-4 py-1.5 text-xs font-bold text-[#001f5b] shadow-sm">
          <LockKeyhole size={14} strokeWidth={2.5} />
          <span>Activity 1</span>
        </div>

        <h1 className="text-center text-2xl font-extrabold leading-tight text-[#001f5b]">
          Login Authentication
        </h1>
        <p className="mt-1.5 text-center text-xs leading-5 text-slate-500">
          Enter your credentials to sign in.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
          {/* USERNAME */}
          <div>
            <div
              className={`flex items-center gap-2.5 rounded-full bg-[#f4f7fc] px-5 py-3 ${
                errors.username ? "ring-1 ring-red-400" : ""
              }`}
            >
              <User size={16} strokeWidth={2.2} className="shrink-0 text-[#003b7a]" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
            {errors.username && (
              <p className="mt-1 pl-4 text-xs font-medium text-red-500">
                {errors.username}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <div
              className={`flex items-center gap-2.5 rounded-full bg-[#f4f7fc] px-5 py-3 ${
                errors.password ? "ring-1 ring-red-400" : ""
              }`}
            >
              <KeyRound size={16} strokeWidth={2.2} className="shrink-0 text-[#003b7a]" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="shrink-0 text-slate-400 transition hover:text-[#003b7a]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 pl-4 text-xs font-medium text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#003b7a] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#002b5c]"
          >
            <span>Login</span>
          </button>
        </form>

        {/* STATUS MESSAGE */}
        {status === "success" && (
          <div className="mt-4 flex items-center gap-2 rounded-full bg-green-50 px-4 py-2.5 text-xs font-semibold text-green-700">
            <CheckCircle2 size={16} strokeWidth={2.3} />
            <span>Login successful! Welcome back.</span>
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 flex items-center gap-2 rounded-full bg-red-50 px-4 py-2.5 text-xs font-semibold text-red-600">
            <AlertCircle size={16} strokeWidth={2.3} />
            <span>Invalid username or password.</span>
          </div>
        )}

        {/* SAMPLE CREDENTIALS */}
        <div className="mt-5 rounded-2xl bg-[#f4f7fc] px-4 py-3 text-center text-xs text-slate-500">
          <span className="font-bold text-[#003b7a]">Sample: </span>
          username <span className="font-semibold text-[#001f5b]">student</span> /
          password <span className="font-semibold text-[#001f5b]">student123</span>
        </div>
      </div>
    </div>
  );
}

export default Activity1;
// End of Activity1.jsx
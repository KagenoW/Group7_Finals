// Activity3.jsx

import { useState } from "react";

import {
  Lock,
  Eye,
  EyeOff,
  KeyRound,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  RotateCcw,
  Info,
} from "lucide-react";
//Jeyan Sandoval
function Activity3() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(""); // "Weak" | "Medium" | "Strong"
  const [message, setMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setChecked(false);
    setError("");
  };

  const handleCheck = () => {
    if (password.length === 0) {
      setError("Please enter a password.");
      setChecked(false);
      return;
    }

    let currentStatus;

    if (password.length < 6) {
      currentStatus = "Weak";
    } else if (password.length < 10) {
      currentStatus = "Medium";
    } else {
      currentStatus = "Strong";
    }

    let currentMessage;

    if (password.length >= 10) {
      currentMessage = "Status: Strong – You can use this password.";
    } else {
      currentMessage = "Status: Weak – Create a stronger password.";
    }

    setStatus(currentStatus);
    setMessage(currentMessage);
    setError("");
    setChecked(true);
  };

  const handleClear = () => {
    setPassword("");
    setShowPassword(false);
    setChecked(false);
    setError("");
    setStatus("");
    setMessage("");
  };

  const tierStyles = {
    Weak: {
      color: "#e2574c",
      bg: "#fbe4e2",
      segs: 1,
      Icon: ShieldX,
    },

    Medium: {
      color: "#c8901c",
      bg: "#fdf1d6",
      segs: 2,
      Icon: ShieldAlert,
    },

    Strong: {
      color: "#1f9d6c",
      bg: "#dcf3e7",
      segs: 3,
      Icon: ShieldCheck,
    },
  };

  const tier = tierStyles[status];

  return (
    <main className="flex h-150 w-full items-center justify-center overflow-hidden bg-[var(--paper,#f5f7fb)] px-6 -translate-y-8">
      <div className="w-full max-w-md rounded-[28px] bg-white p-8 shadow-xl">

        {/* HEADER */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f0b429] px-4 py-1.5 text-xs font-bold text-[#0b1f3f]">
            <KeyRound size={14} strokeWidth={2.5} />
            <span>Activity 3</span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[#001f5b]">
            Password Strength Checker
          </h1>

          <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
            Enter a password to see whether it's Weak, Medium, or Strong.
          </p>
        </div>

        {/* PASSWORD INPUT */}
        <div className="mt-7">
          <div className="flex items-center gap-3 rounded-full bg-[#f4f7fc] px-5 py-3.5">
            <Lock
              size={17}
              strokeWidth={2.2}
              className="shrink-0 text-slate-400"
              color="#001f5b"
            />

            <input
              id="password-input"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="shrink-0 text-slate-400 transition hover:text-[#13407a]"
            >
              {showPassword ? (
                <EyeOff size={17} />
              ) : (
                <Eye size={17} />
              )}
            </button>
          </div>

          {error && (
            <p className="mt-3 flex items-center gap-2 px-1 text-sm font-medium text-[#e2574c]">
              <Info size={16} />
              {error}
            </p>
          )}
        </div>

        {/* ACTIONS */}
        <div className="mt-5 flex items-center gap-3">
          <button
            type="button"
            onClick={handleCheck}
            className="flex flex-1 items-center justify-center rounded-full bg-[#003b7a] py-3.5 text-sm font-bold text-white transition hover:bg-[#002b5c]"
          >
            Check Password
          </button>

          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear"
            className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#f4f7fc] text-slate-500 transition hover:bg-[#d0ddf2] hover:text-[#13407a]"
          >
            <RotateCcw size={18} color="#003b7a" />
          </button>
        </div>

        {/* RESULT PANEL — CONDITIONAL RENDERING */}
        {checked && status && (
          <div
            className="mt-7 rounded-2xl p-6"
            style={{ backgroundColor: tier.bg }}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white"
                style={{ color: tier.color }}
              >
                <tier.Icon size={20} strokeWidth={2.2} />
              </span>

              <div>
                <p
                  className="text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: tier.color }}
                >
                  Password Status
                </p>

                <p className="text-xl font-extrabold text-[#0b1f3f]">
                  {status}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm font-medium leading-6 text-[#0b1f3f]/80">
              {message}
            </p>

            {/* STRENGTH INDICATOR */}
            <div className="mt-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                Strength Indicator
              </p>

              <div className="mt-2 flex gap-2">
                {[1, 2, 3].map((seg) => (
                  <span
                    key={seg}
                    className="h-2.5 flex-1 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor:
                        seg <= tier.segs
                          ? tier.color
                          : "rgba(11,31,63,0.1)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Activity3;
// *Activity5.jsx*

import { useState } from "react";

import {
  UserRound,
  Clock3,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
// ANTONIO PILLA III
function Activity5() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const checkAttendance = () => {
    const t = Number(time);

    // *Employee name validation*
    if (!name.trim()) {
      setError("Employee name is required.");
      setResult(null);
      return;
    }

    // *Time validation*
    if (time === "") {
      setError("Time in is required.");
      setResult(null);
      return;
    }

    // *Invalid time validation*
    if (t < 0.5 || t > 23.5 || t % 0.5 !== 0) {
      setError("Invalid time.");
      setResult(null);
      return;
    }

    setError("");

    setResult({
      name: name.trim(),
      time: t,
      late: t > 8.5,
    });
  };

  const reset = () => {
    setName("");
    setTime("");
    setError("");
    setResult(null);
  };

  const formatTime = (t) => {
    const h = Math.floor(t);
    const m = (t - h) * 60;
    const hour = h % 12 || 12;

    return `${hour}:${String(m).padStart(2, "0")} ${
      h >= 12 ? "PM" : "AM"
    }`;
  };

  return (
    /*
     * Same positioning style as Activity 1.
     * The fixed height prevents the Activity 5 content
     * from increasing the page height and creating a scrollbar.
     */
    <div className="flex h-150 w-full items-center justify-center overflow-hidden bg-[#f4f7fc] px-4">
      
      {/* Main Card */}
      <div className="w-full max-w-[383px] rounded-[24px] border border-slate-200 bg-white px-6 py-5 shadow-xl">

        {/* Activity Badge */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full bg-[#ffc400] px-5 py-2 text-xs font-bold text-[#002f6c] shadow-sm">
            <Clock3 size={15} />
            <span>Activity 5</span>
          </div>
        </div>

        {/* Title */}
        <div className="mt-3 text-center">
          <h1 className="text-[24px] font-extrabold leading-tight text-[#002f6c]">
            Employee Attendance
            <br />
            Checker
          </h1>

          <p className="mt-1 text-xs text-[#718096]">
            Check your attendance status.
          </p>
        </div>

        {/* Inputs */}
        <div className="mt-4 space-y-2.5">

          {/* Employee Name */}
          <div className="flex items-center rounded-full bg-[#f3f6fb] px-4">
            <UserRound
              size={18}
              className="shrink-0 text-[#00519b]"
            />

            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder="Employee Name"
              className="w-full bg-transparent px-3 py-3 text-sm text-[#002f6c] outline-none placeholder:text-[#8a9bb3]"
            />
          </div>

          {/* Time In */}
          <div className="flex items-center rounded-full bg-[#f3f6fb] px-4">
            <Clock3
              size={18}
              className="shrink-0 text-[#00519b]"
            />

            <input
              type="number"
              step="0.5"
              min="-100"
              max="23.5"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                setError("");
              }}
              placeholder="Time In (e.g. 8.5 = 8:30 AM)"
              className="w-full bg-transparent px-3 py-3 text-sm text-[#002f6c] outline-none placeholder:text-[#8a9bb3]"
            />
          </div>
        </div>

        {/* Validation */}
        {error && (
          <p className="mt-2 flex items-center gap-1 px-4 text-[11px] font-medium text-red-500">
            <AlertCircle size={13} />
            {error}
          </p>
        )}

        {/* Buttons */}
        <div className="mt-3 grid grid-cols-2 gap-2">

          {/* Check Attendance */}
          <button
            onClick={checkAttendance}
            className="rounded-full bg-[#004b8d] py-3 text-xs font-bold text-white shadow-[0_5px_12px_rgba(0,75,141,0.2)] transition hover:bg-[#003d73]"
          >
            Check Attendance
          </button>

          {/* Reset */}
          <button
            onClick={reset}
            className="flex items-center justify-center gap-1.5 rounded-full bg-[#f3f6fb] py-3 text-xs font-semibold text-[#004b8d] transition hover:bg-[#e9eef6]"
          >
            <RotateCcw size={14} />
            Reset
          </button>
        </div>

        {/* Attendance Result */}
        {result && (
          <div
            className={`mt-3 rounded-2xl border px-5 py-3.5 ${
              result.late
                ? "border-[#ffd36a] bg-[#fffaf0]"
                : "border-[#b7e4c7] bg-[#f0faf4]"
            }`}
          >
            {/* Employee Name */}
            <p className="text-[11px] font-medium text-[#718096]">
              Employee Name
            </p>

            <p className="mt-0.5 text-sm font-bold text-[#002f6c]">
              {result.name}
            </p>

            {/* Time */}
            <p className="mt-1.5 text-[11px] font-medium text-[#718096]">
              Time In
            </p>

            <p className="mt-0.5 text-sm font-bold text-[#002f6c]">
              {formatTime(result.time)}
            </p>

            {/* Attendance Status */}
            <p className="mt-1.5 text-[11px] font-medium text-[#718096]">
              Attendance Status
            </p>

            <div className="mt-0.5 flex items-center gap-2">
              {result.late ? (
                <>
                  <AlertCircle
                    size={19}
                    className="text-[#e0a400]"
                  />

                  <p className="text-[21px] font-extrabold text-[#004b8d]">
                    Very Late
                  </p>
                </>
              ) : (
                <>
                  <CheckCircle2
                    size={19}
                    className="text-[#16845b]"
                  />

                  <p className="text-[21px] font-extrabold text-[#004b8d]">
                    On Time
                  </p>
                </>
              )}
            </div>

            {/* Message */}
            <p className="mt-1 text-xs text-[#718096]">
              {result.late
                ? "Please report to your supervisor."
                : "Great! You arrived on time."}
            </p>
          </div>
        )}

        {/* Sample */}
        <div className="mt-3 rounded-full bg-[#f3f6fb] px-4 py-2.5 text-center text-[10px] text-[#64748b]">
          <b className="text-[#004b8d]">Sample:</b>{" "}
          Juan Dela Cruz / 8.5
        </div>
      </div>
    </div>
  );
}

export default Activity5;

// *End of Activity5.jsx*
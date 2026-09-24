import { useState } from "react";
import {
  Zap,
  User,
  Gauge,
  AlertCircle,
  RotateCcw,
  Receipt,
} from "lucide-react";
//Jerome Gopela
function Activity4() {
  const [name, setName] = useState("");
  const [units, setUnits] = useState("");
  const [errors, setErrors] = useState({});
  const [output, setOutput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (units.trim() === "") {
      newErrors.units = "Please enter your kWh usage.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setOutput(null);
      return;
    }

    const numUnits = Number(units);

    if (numUnits < 0) {
      setOutput({
        name: name,
        units: units,
        invalid: true,
      });
      return;
    }

    let total;
    let tier;

    if (numUnits <= 100) {
      total = numUnits * 10;
      tier = "Tier 1 (0-100 kWh)";
    } else if (numUnits <= 200) {
      total = 100 * 10 + (numUnits - 100) * 12;
      tier = "Tier 2 (101-200 kWh)";
    } else if (numUnits <= 300) {
      total = 100 * 10 + 100 * 12 + (numUnits - 200) * 15;
      tier = "Tier 3 (201-300 kWh)";
    } else {
      total = 100 * 10 + 100 * 12 + 100 * 15 + (numUnits - 300) * 18;
      tier = "Tier 4 (Above 300 kWh)";
    }

    const usageLevel =
    total >= 5000
    ? "High Electricity Usage"
    : "Normal Electricity Usage";

    setOutput({
      name: name,
      units: numUnits,
      tier: tier,
      total: total.toFixed(2),
      usageLevel: usageLevel,
      invalid: false,
    });
  };

  const handleReset = () => {
    setName("");
    setUnits("");
    setErrors({});
    setOutput(null);
  };

  return (
    <div className="flex min-h-150 w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#eef2fb] to-[#f4f7fc] px-4 py-10">
      <div className="w-full max-w-sm rounded-[24px] border border-slate-200 bg-white p-7 shadow-xl">
        <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-[#f5c400] px-4 py-1.5 text-xs font-bold text-[#001f5b] shadow-sm">
          <Zap size={14} strokeWidth={2.5} />
          <span>Activity 4</span>
        </div>

        <h1 className="text-center text-2xl font-extrabold leading-tight text-[#001f5b]">
          Electricity Bill Calculator
        </h1>
        <p className="mt-1.5 text-center text-xs leading-5 text-slate-500">
          Enter consumption details to calculate the bill.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
          <div>
            <div
              className={`flex items-center gap-2.5 rounded-full bg-[#f4f7fc] px-5 py-3 transition ${
                errors.name
                  ? "ring-1 ring-red-400"
                  : "focus-within:ring-1 focus-within:ring-[#003b7a]/30"
              }`}
            >
              <User
                size={16}
                strokeWidth={2.2}
                className="shrink-0 text-[#003b7a]"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Customer Name"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
            {errors.name && (
              <p className="mt-1 flex items-center gap-1 pl-4 text-xs font-medium text-red-500">
                <AlertCircle size={12} strokeWidth={2.5} />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <div
              className={`flex items-center gap-2.5 rounded-full bg-[#f4f7fc] px-5 py-3 transition ${
                errors.units
                  ? "ring-1 ring-red-400"
                  : "focus-within:ring-1 focus-within:ring-[#003b7a]/30"
              }`}
            >
              <Gauge
                size={16}
                strokeWidth={2.2}
                className="shrink-0 text-[#003b7a]"
              />
              <input
                type="number"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                placeholder="kWh Consumption"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
            {errors.units && (
              <p className="mt-1 flex items-center gap-1 pl-4 text-xs font-medium text-red-500">
                <AlertCircle size={12} strokeWidth={2.5} />
                {errors.units}
              </p>
            )}
          </div>

          <div className="flex gap-2.5">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#003b7a] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#002b5c] active:scale-[0.98]"
            >
              <span>Calculate</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center justify-center gap-2 rounded-full bg-[#f4f7fc] px-5 py-3 text-sm font-bold text-[#003b7a] transition hover:bg-slate-200 active:scale-[0.98]"
              aria-label="Reset"
            >
              <RotateCcw size={15} strokeWidth={2.3} />
            </button>
          </div>
        </form>

        {output && !output.invalid && (
          <div className="mt-5 overflow-hidden rounded-2xl bg-blue-50 ring-1 ring-blue-200">
            <div className="flex items-center justify-between px-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-500 p-1.5">
                  <Receipt size={14} strokeWidth={2.5} className="text-white" />
                </div>
                <span className="text-sm font-bold text-blue-700">
                  {output.tier}
                </span>
              </div>
              <span className="text-2xl font-extrabold text-blue-700">
                ₱{output.total}
              </span>
            </div>

            <div className="mx-4 mt-3.5 border-t border-white/60" />

            <div className="space-y-1.5 px-4 py-3.5 text-xs">
              <p className="flex justify-between">
                <span className="text-slate-500">Customer Name</span>
                <span className="font-semibold text-blue-700">
                  {output.name}
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-500">Consumption</span>
                <span className="font-semibold text-blue-700">
                  {output.units} kWh
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-500">Total Bill</span>
                <span className="font-semibold text-blue-700">
                  ₱{output.total}
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-500">Usage Level</span>
                <span className="font-semibold text-blue-700">
                  {output.usageLevel}
                </span>
              </p>
            </div>
          </div>
        )}

        {output && output.invalid && (
          <div className="mt-5 flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2.5 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
            <AlertCircle size={16} strokeWidth={2.3} />
            <span>
              Invalid consumption. Please enter a value of 0 or higher.
            </span>
          </div>
        )}

        <div className="mt-5 rounded-2xl bg-[#f4f7fc] px-4 py-3 text-center text-xs text-slate-500">
          <span className="font-bold text-[#003b7a]">Rates: </span>
          ₱10 (0-100) / ₱12 (101-200) / ₱15 (201-300) / ₱18 (above 300)
        </div>
      </div>
    </div>
  );
}

export default Activity4;

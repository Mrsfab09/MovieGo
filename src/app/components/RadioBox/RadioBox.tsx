import { useState } from "react";

const RadioBox = () => {
  const [selected, setSelected] = useState("1");

  const options = [
    {
      value: "1",
      title: "Basic",
      desc: "Watch in HD on one device, ad-free.",
    },
    {
      value: "2",
      title: "Premium",
      desc: "Movies and series in 4K, without ads, on four devices simultaneously.",
    },
    {
      value: "3",
      title: "Standard",
      desc: "Full catalog in Full HD, watching two at the same time.",
    },
  ];

  return (
    <>
      <div className="max-w-[600px] grid grid-cols-3 sm:grid-cols-1 gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={`border-2 border-neutral-800 p-4 rounded-lg cursor-pointer transition-colors ${
              selected === option.value ? "bg-neutral-800" : "bg-neutral-900"
            }`}
          >
            <input
              type="radio"
              name="plan"
              value={option.value}
              checked={selected === option.value}
              onChange={() => setSelected(option.value)}
              className="hidden"
            />
            <div className="flex flex-col ml-5 gap-1">
              <div className="font-bold">{option.title}</div>
              <div className="text-neutral-400">{option.desc}</div>
            </div>
          </label>
        ))}
      </div>
    </>
  );
};

export default RadioBox;

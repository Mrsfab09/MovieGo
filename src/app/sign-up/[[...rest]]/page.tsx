"use client";

import { useState } from "react";
import { SignUp } from "@clerk/nextjs";
import { Check } from "lucide-react";
import RadioBox from "@/app/components/RadioBox/RadioBox";
import { Logo } from "@/app/components/Logo/Logo";

export default function SignUpPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const steps = [
    { label: "Create account", description: "Vitae sed mi luctus laoreet." },
    {
      label: "Subscription plan",
      description: "Cursus semper viverra facilisis et some more.",
    },
    { label: "Preview", description: "Penatibus eu quis ante." },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-950">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1300px] min-h-[800px] bg-neutral-950 shadow-lg rounded-lg border border-neutral-800 overflow-hidden p-6">
        {/* Progress bar */}
        <div className="flex flex-col items-start w-96 h-full mt-20 ml-10 pl-6 gap-20">
          <Logo width={40} height={40} font={"3xl"} />
          {steps.map((stepInfo, index) => (
            <div key={index} className="flex items-start gap-4 relative mb-6">
              {index !== steps.length - 1 && (
                <div className="absolute left-5 top-10 w-[2px] h-40 bg-neutral-800"></div>
              )}

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${
                  step === index + 1
                    ? "border-red-800 bg-red-700 text-neutral-300 font-bold"
                    : "border-neutral-700 bg-neutral-800 text-gray-400"
                }`}
              >
                {step > index + 1 ? (
                  <Check size={"18"} color="#A9A9A9" />
                ) : (
                  index + 1
                )}
              </div>

              {/* Opis kroku */}
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    step === index + 1 ? "text-red-800" : "text-gray-500"
                  }`}
                >
                  {stepInfo.label}
                </h3>
                <p className="text-gray-400 text-sm">{stepInfo.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center items-center w-full col-span-2 ml-32">
          {step === 1 && (
            <div className="flex flex-col items-center">
              <SignUp
                routing="hash"
                appearance={{
                  elements: {
                    rootBox: "p-3",
                    card: "bg-neutral-900 text-white p-6 rounded-lg w-full max-w-md",
                    headerTitle: "text-2xl font-bold text-gray-100",
                    socialButtonsBlockButton: "bg-gray-700 hover:bg-gray-600",
                    formFieldInput: "bg-neutral-800 border-none text-white p-3",
                    formButtonPrimary: "hidden",
                  },
                }}
              />

              <button
                onClick={nextStep}
                className="w-96 mt-4 p-3 bg-red-700 text-neutral-300 rounded-lg font-semibold"
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="w-full max-w-md flex flex-col">
              <h2 className="text-3xl font-semibold text-neutral-300 mb-10">
                Choose your plan
              </h2>
              <RadioBox />
              <div className="col-span-3 mt-10">
                <p className="text-neutral-400">
                  Want more information about our plans?{" "}
                  <a
                    href="/pricing"
                    className="relative inline-block text-red-700 transition-colors duration-300 hover:text-red-700 
                            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-800 
                            after:transition-all after:duration-300 after:ease-in-out 
                            hover:after:w-full"
                  >
                    Check here.
                  </a>
                </p>
              </div>

              <div className="flex justify-between w-full gap-4 mt-10">
                <button
                  onClick={prevStep}
                  className="w-full mt-4 p-3 bg-neutral-800 text-neutral-300 rounded-lg"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="w-full mt-4 p-3 bg-red-700 text-neutral-300 rounded-lg"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-semibold text-gray-800">Summary</h2>
              <button
                onClick={prevStep}
                className="mt-4 p-2 bg-neutral-800 text-neutral-300 rounded-lg"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

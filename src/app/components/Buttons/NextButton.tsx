interface ButtonProps {
  onClick: () => void;
}

export function NextButton({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-96 mt-4 p-3 bg-red-700 text-neutral-300 rounded-lg font-semibold"
    >
      Next
    </button>
  );
}

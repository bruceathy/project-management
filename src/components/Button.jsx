export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md text-stone-50 bg-stone-700 hover:bg-stone-800 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}

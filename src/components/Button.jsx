export default function Button({ children, ...restprops }) {
  const bclass =
    "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-tone-400 hover:bg-stone-600 hover:text-stone-100";
  return (
    <button {...restprops} className={bclass}>
      {children}
    </button>
  );
}

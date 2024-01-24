import React, { forwardRef } from "react";

const Input = forwardRef(function ({ label, textarea, ...restprops }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounde-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="tesxt-sm text-stone-500 font-bold uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...restprops} />
      ) : (
        <input ref={ref} className={classes} {...restprops} />
      )}
    </p>
  );
});
export default Input;

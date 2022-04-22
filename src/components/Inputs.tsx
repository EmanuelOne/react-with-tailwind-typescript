import { InputsTypes } from 'src/types';
import './verificationInput.css';
const Input = ({ label, type, name, state, ...rest }: InputsTypes) => {
  return (
    <div className="relative w-full group">
      <input
        type={type}
        className="outline-none bg-transparent px-3 py-3 peer w-full focus:ring-0 focus:border-none border-none ring-white"
        placeholder=" "
        name={name}
        autoComplete="off"
        {...rest}
      />
      <label
        className={`absolute left-[9px] z-20 top-px text-[12px] text-${
          state.isValid || !state.value.length ? 'gray' : 'red'
        }-500 transition-all duration-300 px-1 transform -translate-y-1/2 pointer-events-none 
peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[12px] group-focus-within:!top-px group-focus-within:!text-sm group-focus-within:!text-${
          state.isValid ? 'textBlue' : 'red-500'
        }`}
      >
        {label}
      </label>

      {/* <!--This fieldset+legend is used for the the border and notch transition--> */}
      <fieldset
        className={`inset-0 absolute border border-gray-400 rounded pointer-events-none mt-[-9px] invisible peer-placeholder-shown:visible 
group-focus-within:!border-${
          state.isValid ? 'textBlue' : 'red-500'
        } group-focus-within:border-1 group-hover:border-gray-700`}
      >
        <legend className="ml-2 px-0 text-sm transition-all duration-300 invisible max-w-[0.01px] group-focus-within:max-w-full group-focus-within:px-1 whitespace-nowrap">
          {label}
        </legend>
      </fieldset>

      {/* <!--This fieldset+legend always has a notch and is shown when the input is filled, instead of the other, so the notch doesnt vanish when you unfocus the field--> */}
      <fieldset
        className={`inset-0 absolute border border-gray-400 rounded pointer-events-none mt-[-9px] visible peer-placeholder-shown:invisible 
group-focus-within:border-1 group-focus-within:!border-${
          state.isValid ? 'textBlue' : 'red-500'
        } group-hover:border-gray-700`}
      >
        <legend className="ml-2 text-sm invisible px-1 max-w-full whitespace-nowrap">
          {label}
        </legend>
      </fieldset>
    </div>
  );
};

export default Input;

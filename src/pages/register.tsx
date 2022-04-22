import { Link } from 'react-router-dom';
import { Logo } from 'src/assets/logo';
import { RiErrorWarningFill } from 'react-icons/ri';
import Input from 'src/components/Inputs';
import { useState } from 'react';
import VerificationInput from 'react-verification-input';
const Register = () => {
  const [email, setEmail] = useState({
    value: '',
    isValid: false,
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const { value } = e.target;
    emailRegex.test(value);
    if (emailRegex.test(value)) {
      setEmail({
        value,
        isValid: true,
      });
    } else {
      setEmail({
        value,
        isValid: false,
      });
    }
    // console.log(e.target.value);
  };
  return (
    <div className="px-28 py-20">
      <Logo />
      <div className="flex">
        <div className="w-full">
          <h1 className="text-primary text-5xl font-extrabold">
            Growth wealth Conformtably.
          </h1>
          <p className="text-textGray text-2xl font-bold">
            No stress, No hassle.
          </p>
        </div>
        <div className="w-full">
          <form
            action=""
            className="bg-white px-12 py-8 flex flex-col gap-6 rounded-md"
          >
            <div>
              <Input
                type="email"
                label="Email Address"
                name="email"
                required
                {...{ onChange, state: email }}
              />
              {!email.isValid && email.value.length ? (
                <small className="text-red-500 text-sm font-thin flex items-center gap-2">
                  <RiErrorWarningFill /> Email address is invalid
                </small>
              ) : (
                ''
              )}
            </div>
            <VerificationInput
              length={4}
              validChars="0-9"
              placeholder=""
              //   removeDefaultStyles
              classNames={{
                container: 'container',
                character: 'character',
                characterInactive: 'character--inactive',
                characterSelected: 'character--selected',
              }}
            />
            <div>
              <small className="text-textBlue font-extrabold">
                Got an invite code?
              </small>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <small className="text-textGray">
                  Got an account?
                  <Link className="text-textBlue" to="/login">
                    Sign in
                  </Link>
                </small>
              </div>
              <div>
                <button className="bg-textBlue hover:bg-primary focus:bg-primary text-white font-bold py-2 rounded px-8">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

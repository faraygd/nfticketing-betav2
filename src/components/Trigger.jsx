import { AiOutlineMenu } from "react-icons/ai";

export const Trigger = ({ setStatus }) => {
  return (
    <div className="lg:hidden cursor-pointer text-white">
      <AiOutlineMenu onClick={() => setStatus((prev) => !prev)} size={18} />
    </div>
  );
};
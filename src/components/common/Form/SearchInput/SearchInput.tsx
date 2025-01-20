// base
import { FC } from "react";
// lib
import { BsSearch } from "react-icons/bs";

interface IPropType {
  searchText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<IPropType> = ({ searchText, handleChange }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="search"
        placeholder="جستجوی کلمات کلیدی..."
        value={searchText} // اتصال ورودی به state
        onChange={handleChange} // مدیریت تغییرات ورودی
        className="h-7 focus:outline-none focus:border-none text-black w-[400px] px-3"
      />
      <button
        className="flex items-center justify-center h-[60px] w-[120px] bg-gt-gradient-1 rounded-l font-bold text-lg"
        type="submit"
      >
        <BsSearch className="text-white" />
      </button>
    </div>
  );
};

export { SearchInput };

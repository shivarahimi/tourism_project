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
      <div className="bg-white p-4 shadow-lg rounded-r relative w-[100%]">
        <input
          type="search"
          placeholder="جستجوی کلمات کلیدی..."
          value={searchText} // اتصال ورودی به state
          onChange={handleChange} // مدیریت تغییرات ورودی
          className="h-7 focus:outline-none focus:border-none text-black w-[400px]"
        />
      </div>
      <button
        className="flex items-center justify-center h-[60px] w-[120px] bg-gt-gradient-1 rounded-l font-bold text-lg"
        type="submit"
      >
        <BsSearch />
      </button>
    </div>
  );
};

export { SearchInput };

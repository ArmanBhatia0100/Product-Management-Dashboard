import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
  return (
    <div className="flex flex-row bg-[#f0f5ff] p-2 rounded-md min-w-96">
      <span className="mr-1">
        <IoSearch size={24} color="#292929" />
      </span>
      <input
        type="search"
        name=""
        id=""
        className="bg-transparent w-full outline-none"
        placeholder="Seacrh here.."
      />
    </div>
  );
}

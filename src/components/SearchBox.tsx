import React from "react";

interface SearchBoxProps {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <div className="pa2 shadow-5">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function Search() {
  return (
    <div className="px-2 py-3 ">
      <div className="border font-IRANSansWeb rounded-2xl w-full flex gap-2 items-center justify-center bg-gray-100">
        <input
          dir="rtl"
          type="text"
          placeholder="جستجو و جوی محتوا، سخنرانی ها ،مقالات و ..."
          className="py-4 rounded-2xl outline-none text-sm lg:text-lg w-full lg:w-[400px] bg-gray-100"
        />

        <div className="flex justify-center px-1 bg-gray-100">
          <FontAwesomeIcon
            className="text-[25px] h-full bg-gray-100 mr-1"
            icon={faSearch}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}

export default Search;

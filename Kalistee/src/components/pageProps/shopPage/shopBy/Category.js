import React from "react";
import NavTitle from "./NavTitle";

const Category = ({ selectedCategory, setSelectedCategory, categories }) => {
  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => setSelectedCategory(category.title)}
              className={`border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between cursor-pointer ${
                selectedCategory === category.title
                  ? "text-black font-extrabold"
                  : ""
              }`}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;

"use client";

import Container from "../Container";
import CategoryBox from "../CategoryBox";

import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {},
];

const Categories = () => {
  return (
    <Container>
      <div
        className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
      "
      >
        {categories.map((item) => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;

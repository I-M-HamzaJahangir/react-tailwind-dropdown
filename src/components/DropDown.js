import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";
const DropDown = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "item one",
      path: "#",
    },
    {
      title: "item two",
      path: "#",
    },
    {
      title: "item three",
      path: "#",
    },
    {
      title: "item four",
      path: "#",
    },
  ];
  const linkItems = links.map(({ path, title }) => {
    return (
      <li className=" border-grey border-b last:border-b-0 hover:bg-slate-300/40">
        <a href={path} className="px-6 py-1 block text-base">
          {title}
        </a>
      </li>
    );
  });

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="relative flex items-center gap-2 bg-white text-black uppercase font-mono px-6 py-2 focus:outline-none rounded-sm"
      >
        <span>DropDown</span>
        <span className="text-lg">
          {open ? <BiChevronDown /> : <BiChevronUp />}
        </span>
        <div
          className={`absolute top-full w-full left-0 mt-1 bg-white rounded-sm transition-all ease-in 
          ${open ? "visible opacity-100 z-50" : "invisible opacity-0 z-[-1]"}`}
        >
          <ul className="text-start rounded-sm ">{linkItems}</ul>
        </div>
      </button>
    </div>
  );
};

export default DropDown;

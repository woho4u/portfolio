import React from "react";

interface Props {
  title: string;
  link?: string;
  bgClass?: string;
}

const Navlink = ({ title, link = "#", bgClass }: Props) => {
  return (
    <div className={`${bgClass} p-1 mx-8`}>
      <a className="navlink fantasy" href={link}>
        {title}
      </a>
    </div>
  );
};

export default Navlink;

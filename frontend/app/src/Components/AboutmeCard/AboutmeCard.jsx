import React from "react";

const AboutmeCard = () => {
  const arr = [
    { num: [1, 2, 3] },
    { title: ["Who I am", "What do I do", "How can I help"] },
    {
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-12 w-[50rem] gap-y-[4rem]">
      {arr[0].num.map((number, index) => (
        <div key={index} className="w-[25rem]">
          <div className="w-[25rem]">
            <div className="text-4xl text-[#244d4d] font-medium pb-5">{number}</div>
            <div>
              <h2 className="text-2xl text-[#244d4d] pb-3">
                {arr[1].title[index]}
              </h2>
            </div>
            <div>
              <p className="text-[64717C]">{arr[2].description[index]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutmeCard;

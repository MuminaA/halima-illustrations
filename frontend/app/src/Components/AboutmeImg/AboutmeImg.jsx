import React from "react";

const AboutmeImg = () => {
    return (
        <div className="images md:flex items-start gap-[23px] height-[494px] min-w-[700px]  mobile:hidden">
          <div className="flex-col flex items-start self-end gap-[16px] min-h-[436px] w-[350px] mt-14">
            <img
              src="assets/intDesign1.jpg"
              className="w-full max-w-[350px] h-[230px] object-cover"
              alt=""
            ></img>
            <img src="assets/intDesign2.jpg" className="w-[350px] h-[350px]" alt=""></img>
          </div>
          <div className="flex-col-1">
            <img
              src="assets/intDesign3.jpg"
              className="w-[350px] h-[350px] mb-[23px]"
              alt=""
            ></img>
            <img
              src="assets/intDesign4.jpg"
              className="w-[350px] h-[230px] object-cover"
              alt=""
            ></img>
          </div>
        </div>
    )
}

export default AboutmeImg;
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <section className="flex flex-col items-center justify-center px-10 sm:px-28">
      <span className="text-[20px] font-[400]">Education</span>
      <h2 className="text-[40px] font-[500]">My Education</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center mt-10">
        <div className="hidden sm:grid grid-rows-3 place-items-center gap-[15rem]">
          <div className="flex items-start flex-col justify-start gap-[8px]">
            <span>Tokyo University</span>
            <span>4 years (2019-2022)</span>
          </div>
          <div className="flex items-start flex-col justify-start gap-[8px]">
            <span>Oxim Studio Intership</span>
            <span>4 years (2019-2022)</span>
          </div>
          <div className="flex items-start flex-col justify-start gap-[8px]">
            <span>Freelancer</span>
            <span>(Then-Now)</span>
          </div>
        </div>
        <div className="w-full sm:w-[70%]">
          <VerticalTimeline
            layout={"1-column-left"}
            lineColor={"black"}
            className={"p-0"}
            animate={"true"}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work py-0 pl-10"
              iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Informatic Engineering
              </h3>

              <p className={"mt-20"}>
                Studying Computer Science at Tokyo University opens up a world
                of unparalleled opportunities for academic and personal growth.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work py-0 pl-10"
              iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Junior UI Designer
              </h3>

              <p className={"mt-20"}>
                Embarking on the role of a Junior UI Designer through an
                internship is an exciting step in my professional journey.{" "}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work py-0 pl-10"
              iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Junior UI Designer & Web Developer
              </h3>

              <p className={"mt-20"}>
                I am enthusiastic about working on real-world projects, gaining
                exposure to industry-standard tools, and receiving constructive
                feedback to refine and elevate my design capabilities.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Education;

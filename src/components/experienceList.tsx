import Markdown from "markdown-to-jsx";
import React from "react";
import config from "../resume.json";
import { TimeLine, TimelineIcon, TimelineItem } from "./timeline";
import { ReactComponent as BriefcaseIcon } from "../icons/briefcase.svg";

interface IProps {
  data: typeof config.work;
}

export function ExperienceList({ data }: IProps) {
  const dataWithFields = React.useMemo(() => {
    return data.map((item) => {
      return {
        ...item,
        id: `${item.company}${item.startDate}`,
        slug: item.company
          .split(" ")
          .map((p) => p.charAt(0))
          .join("")
          .slice(0, 3),
      };
    });
  }, [data]);

  return (
    <>
      <h3 className="heading">
        <BriefcaseIcon
          style={{ maxWidth: "1.5rem", position: "relative", top: 5 }}
        />{" "}
        Experience
      </h3>

      <TimeLine>
        {dataWithFields.map((item, index, all) => {
          const isNotSameCompany =
            index == 0 || all[index - 1].company !== item.company;

          return (
            <TimelineItem key={item.id}>
              {isNotSameCompany && (
                <TimelineIcon bgColor="#5a67d8" color="#FFF">
                  {item.slug}
                </TimelineIcon>
              )}

              <div>
                {isNotSameCompany && <h2>{item.company}</h2>}

                <h3 style={{ fontWeight: 500 }}>{item.position}</h3>
                <sub
                  style={{
                    marginTop: "-0.25rem",
                    display: "block",
                    color: "#666",
                  }}
                >
                  {item.startDate}{" "}
                  {item.endDate ? ` - ${item.endDate}` : " - current"}
                </sub>
                <sub
                  style={{
                    marginTop: "-0.1rem",
                    display: "block",
                    color: "#666",
                  }}
                >
                  {item.location}
                </sub>

                {item.summary && (
                  <Markdown
                    options={{ forceBlock: true }}
                    style={{ color: "#222", maxWidth: "800px" }}
                  >
                    {item.summary}
                  </Markdown>
                )}
              </div>
            </TimelineItem>
          );
        })}
      </TimeLine>
    </>
  );
}

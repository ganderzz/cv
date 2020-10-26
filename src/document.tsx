import * as React from "react";
import { Header } from "./components/header";
import { Section } from "./components/section";
import * as config from "./resume.example.json";
import { ReactComponent as InformationIcon } from "./icons/information.svg";
import { ReactComponent as PhoneIcon } from "./icons/phone.svg";
import { ExperienceList } from "./components/experienceList";

export function Document() {
  return (
    <main className="container">
      <Header name={config.name} />

      <aside aria-hidden="true" className="skewed bg-gray-900" />

      <section className="content">
        <div>
          <Section
            header={
              <>
                <InformationIcon
                  style={{ maxWidth: "1.5rem", position: "relative", top: 5 }}
                />{" "}
                About
              </>
            }
          >
            {config.about}
          </Section>

          <Section
            header={
              <>
                <PhoneIcon
                  style={{ maxWidth: "1.5rem", position: "relative", top: 5 }}
                />{" "}
                Contact
              </>
            }
          >
            {Object.entries(config.contact).map(([key, value]) => (
              <div key={key} style={{ marginBottom: "0.6rem" }}>
                <strong
                  style={{
                    display: "block",
                    textTransform: "capitalize",
                    color: "#333",
                  }}
                >
                  {key}
                </strong>

                <p
                  style={{
                    margin: 0,
                    position: "relative",
                    top: "-0.2rem",
                    userSelect: "all",
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </Section>
        </div>

        <div>
          <ExperienceList data={config.work} />
        </div>
      </section>
    </main>
  );
}

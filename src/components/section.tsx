import * as React from "react";

interface IProps {
  header: React.ReactNode;
}

export function Section({ header, children }: React.PropsWithChildren<IProps>) {
  return (
    <div className="section">
      <h3 className="heading">{header}</h3>

      <div style={{ marginBottom: "0.6rem", marginLeft: "1.8rem" }}>
        {children}
      </div>
    </div>
  );
}

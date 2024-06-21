import Image from "next/image";
import mountains from "../public/Content 2.png";
import { TextGenerateEffect } from "./ui/TextGenerateEffect2";

export default function Responsive() {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div
        style={{
          flex: "1",
        }}
      >
        <Image alt="Mountains" src={mountains} layout="responsive" />
      </div>

      <div
        style={{
          flex: "1",
          marginBottom: "300px",
          marginRight: "100px",
        }}
      >
        <p
          style={{
            textAlign: "left",
            color: "#7A2FF4",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          WHO WE ARE
        </p>
        <p
          style={{
            textAlign: "left",
            fontSize: "40px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Creators <br></br>
          of the Digital Frontier
        </p>

        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "black",
            marginTop: "20px",
            marginRight: "200px",
          }}
        >
          <TextGenerateEffect
            className=""
            words="Our spirit of exploration drives us to discover and implement the
              latest advancements in software development. Committed to
              excellence, we deliver top-tier quality in every project, while our
              adaptability ensures we thrive in the ever-evolving digital landscape."
          />
        </p>
      </div>
    </div>
  );
}

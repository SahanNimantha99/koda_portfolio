import React from "react";
import Image from "next/image";
import pic1 from "../../public/pic1.png";

const ContentHero2 = () => {
  return (
    <div
      style={{
        margin: "1vw",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2vw",
            marginLeft: "2vw",
          }}
        >
          <Image src={pic1} alt="Picture of the author" width={3500} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "6vw",
            marginRight: "10vw",
          }}
        >
          <p
            style={{
              color: "#7A2FF4",
              fontSize: "1vw",
              fontWeight: "bold",
            }}
          >
            WHO WE ARE
          </p>

          <h1
            style={{
              color: "black",
              fontSize: "3vw",
              fontWeight: "bold",
            }}
          >
            Creators<br></br>
            of the Digital Frontier
          </h1>

          <p
            style={{
              marginTop: "2vw",
              paddingLeft: "4vw",
              color: "black",
              fontSize: "1vw",
              textAlign: "center",
            }}
          >
            Our spirit of exploration drives us to discover and implement the
            latest advancements in software development. Committed to
            excellence, we deliver top-tier quality in every project, while our
            adaptability ensures we thrive in the ever-evolving digital
            landscape.
          </p>

          <div
            style={{
              display: "flex",
              marginTop: "5vw",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "1vw",
                }}
              >
                <div
                  style={{
                    width: "3vw", // Set width based on viewport width
                    height: "6vh", // Set height based on viewport height
                    backgroundColor: "gray",
                    marginRight: "1vw",
                  }}
                />
                <div
                  style={{
                    width: "3vw", // Set width based on viewport width
                    height: "6vh", // Set height based on viewport height
                    backgroundColor: "gray",
                    marginRight: "1vw",
                  }}
                />
                <div
                  style={{
                    width: "3vw", // Set width based on viewport width
                    height: "6vh", // Set height based on viewport height
                    backgroundColor: "gray",
                    marginRight: "1vw",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    width: "3vw", // Set width based on viewport width
                    height: "6vh", // Set height based on viewport height
                    backgroundColor: "gray",
                    marginRight: "1vw",
                  }}
                />
                <div
                  style={{
                    width: "3vw", // Set width based on viewport width
                    height: "6vh", // Set height based on viewport height
                    backgroundColor: "gray",
                    marginRight: "1vw",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHero2;

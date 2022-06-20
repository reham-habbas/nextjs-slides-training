import React, { useEffect } from "react";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import "reveal.js/plugin/highlight/monokai.css";
import Image from "next/image";

export default function Presentation() {
  useEffect(() => {
    let deck = new Reveal();
    deck.initialize({
      hash: true,
      transitionSpeed: "slow",
      backgroundTransition: "slide",
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
    });
  });
  return (
    <div className="reveal">
      <div className="slides">
        <section>
          <h1>NextJS Training</h1>
          <p className="yellow-color">Quizzy Bees Team</p>
          <div className="r-stack team-images">
            <div className="fragment">
              <Image
                src="/images/saad.jpg"
                alt="saad"
                width={280}
                height={300}
              />
            </div>
            <div className="fragment">
              <Image
                src="/images/reham.jpg"
                alt="reham"
                width={280}
                height={300}
              />
            </div>
            <div className="fragment">
              <Image
                src="/images/zain.jpg"
                alt="zain"
                width={280}
                height={300}
              />
            </div>
            <div className="fragment">
              <Image
                src="/images/sadawi.jpg"
                alt="sadawi"
                width={280}
                height={300}
              />
            </div>
          </div>
        </section>
        <section data-auto-animate>
          <h2 className="r-fit-text"> Review Last Training Session Topics</h2>
          <div data-auto-animate>
            <ul>
              <li>
                Rendering Techniques in NextJS (SSR, CSR, SSG, ISG & On-demand)
              </li>
              <li>SWR Hook</li>
            </ul>
          </div>
        </section>
        <section>
          <section id="fragments">
            <h2 className="r-fit-text">Our Agenda for Today</h2>
            <ul>
              <li className="fragment"> Why NextJS ?</li>
              <li className="fragment">
                Compare between Create React App and NextJs?
              </li>
              <li className="fragment"> Dynamic Routing</li>
              <li className="fragment"> Url Imports </li>
              <li className="fragment"> What's coming next in Next.js?</li>
              <li className="fragment"> Quizzy Bees Game</li>
            </ul>
          </section>
        </section>
        <section>
          <h2 className="r-fit-text">Why NextJS ?</h2>
          <img src="https://www.macmillandictionary.com/external/slideshow/thumb/emoji_thinking_face_thumb.jpg" />
        </section>
        <section data-auto-animate style={{ height: "600px" }}>
          <div
            data-id="1"
            style={{
              background: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "400px",
              height: "400px",
              margin: "-200px 0 0 -200px",
              borderRadius: "400px",
            }}
          ></div>
          <div
            data-id="2"
            style={{
              background: "#000000",
              position: "absolute",
              top: " 50%",
              left: "50%",
              width: "300px",
              height: "300px",
              margin: " -150px 0 0 -150px",
              borderRadius: "400px",
            }}
          ></div>
          <div
            data-id="3"
            style={{
              background: "rgb(255 241 0)",
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "200px",
              height: "200px",
              margin: "-100px 0 0 -100px",
              borderRadius: "400px",
            }}
          ></div>
          <div
            data-id="4"
            style={{
              background: "#ffc813",
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100px",
              height: "100px",
              margin: "-50px 0 0 -50px",
              borderRadius: "400px",
            }}
          ></div>
        </section>
        <section data-auto-animate style={{ height: "100px" }}>
          <div
            data-id="1"
            style={{
              background: "#ffc813",
              position: "absolute",
              top: "250px%",
              left: "16%",
              width: "60px",
              height: "60px",
            }}
          ></div>
          <div
            data-id="2"
            style={{
              background: "rgb(255 241 0)",
              position: "absolute",
              top: "250px%",
              left: "36%",
              width: "60px",
              height: "60px",
            }}
          ></div>
          <div
            data-id="3"
            style={{
              background: "black",
              position: "absolute",
              top: "250px%",
              left: "56%",
              width: "60px",
              height: "60px",
            }}
          ></div>
          <div
            data-id="4"
            style={{
              background: "white",
              position: "absolute",
              top: "250px%",
              left: "76%",
              width: "60px",
              height: "60px",
            }}
          ></div>
        </section>
        <section data-auto-animate data-auto-animate-unmatched="fade">
          <h2 className="r-fit-text">NextJS = React ++</h2>
        </section>
      </div>
    </div>
  );
}

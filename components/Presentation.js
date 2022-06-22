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
            <strong>Why NextJS ?</strong>
           
            <ul>
              <li className="fragment"> Differences between next over create react app</li>
              <li className="fragment">Performance Benefits</li>
              <li className="fragment">Image Component</li>
              <li className="fragment">Dynamic Routing / multi-language support</li>
              <li className="fragment">App Deployment</li>
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
          <h2 className="r-fit-text">NextJS = React++;</h2>
        </section>

        {/* Saad's Slides */}

        <section id="fragments">
          <img src="https://blog.logrocket.com/wp-content/uploads/2019/06/ssr-explanation.png" width="700" />
        </section>

        <section id="fragments">
          <img src="https://blog.logrocket.com/wp-content/uploads/2019/06/csr-explanation.png" width="700" />
        </section>

        <section>
          <h3>Does SSR improve application performance?</h3>

          <p className="r-fit-text">Theoretically, the diagrams show us SSR is more performant than CSR.</p>

          <p className="r-fit-text"><strong>Hypothesis:</strong> a web application built with SSR is more performant than one built with CSR.</p>
        </section>

        <section id="fragments">
          <h3>Performance Benefits</h3>
        </section>

        <section id="fragments">
          <h3>Code Splitting?</h3>

          <p className="r-fit-text">We usually split our applications into multiple pages that can be accessed from different URLs. Each of these pages becomes a unique entry point into the application.</p>

          <p className="r-fit-text">Code-splitting is the process of splitting the application’s bundle into smaller chunks required by each entry point. The goal is to improve the application's initial load time by only loading the code required to run that page.</p>

          <img src="https://nextjs.org/static/images/learn/foundations/code-splitting.png" height="300px" />
        </section>

        <section id="fragments">
          <p className="r-fit-text">Next.js has built-in support for code splitting. Each file inside your <code data-trim data-noescape>{`pages/`}</code> directory will be automatically code split into its own JavaScript bundle during the build step.</p>

          
          <p className="r-fit-text">Any code shared between pages is also split into another bundle to avoid re-downloading the same code on further navigation.</p>
          <p className="r-fit-text">After the initial page load, Next.js can start pre-loading the code of other pages users are likely to navigate to.</p>
        </section>

        <section id="fragments">
          <h3>Font Optimization</h3>
          <p className="r-fit-text">By default, Next.js will automatically inline font CSS at build time, eliminating an extra round trip to fetch font declarations.</p>

          <Image
            src="/images/fonts.png"
            alt="fonts"
            width={670}
            height={308}
          />
        </section>

        <section id="fragments">
          <h3>Largest Contentful Paint (LCP)</h3>

          <p className="r-fit-text">Largest Contentful Paint (LCP) is one of the three Core Web Vitals metrics, and it represents how quickly the main content of a web page is loaded. Specifically, LCP measures the time from when the user initiates loading the page until the largest image or text block is rendered within the viewport.</p>

          <p className="r-fit-text">To provide a good user experience, sites should strive to have an LCP of 2.5 seconds or less for at least 75% of page visits.</p>
        </section>

        <section id="fragments">
          <h3>Cumulative Layout Shift (CLS)</h3>

          <p className="r-fit-text">The Cumulative Layout Shift (CLS) metric is a measure of your site’s overall layout stability. A site that unexpectedly shifts layout as the page loads can lead to accidental user error and distraction.</p>

          <img src="https://nextjs.org/static/images/learn/seo/cls-example.png" />
        </section>

        <section id="fragments">
          <h3>How does Next tackle this?</h3>

          <Image src="/images/image-tag.png" width={670} height={308} alt="image" />

          <p className="r-fit-text"><code data-trim data-noescape>{`height`}</code> and <code data-trim data-noescape>{`width`}</code> properties are both optional in the <code data-trim data-noescape>{`img`}</code> tag. As a result, many developers tend to ignore it, causing a bad CLS score. The Next.js Image component makes height and width required props, keeping the developer honest. It also maintains <code data-trim data-noescape>{`aspect-ratio`}</code> out of the box</p>
        </section>

        <section>
          <img src="https://blog-img.speedcurve.com/img/lighthouse-1024x1024.png?auto=format,compress&fit=max&w=2000" width="500" height="500" />
        </section>

        {/* End Saad's Slides */}

        <section>
        <h2 className="r-fit-text" style={{ marginTop: "2rem" }}>Image Component</h2>
        <p>Are you tired of writing code to serve the right image size for different screen sizes and use image optimization services?</p>
        <p>Next.js has already solved these problems for us with a built-in component called 
        <pre>
               <code data-trim data-noescape>{`<Image>`}</code>
            </pre>its just a matter of learning how to use it to make our developer lives easier.</p>
        </section>
        <section>
        <h2 className="r-fit-text" style={{ marginTop: "2rem" }}>Webp Images</h2>
        <p>WebP is a modern image format that provides superior lossless and lossy compression for images on the web. Using WebP web developers can create smaller, richer images that make the web faster. WebP lossless images are 26% smaller in size compared to PNGs</p>
        </section>
        <section>
           <h2 className="r-fit-text" style={{ marginTop: "2rem" }}> How it works ?</h2>
        </section>
        <section>
           <h2 className="r-fit-text" style={{ marginTop: "2rem" }}> Under the hood, the image component is an extension of the HTML  <code data-trim data-noescape>{`<img />`}</code> element that evolved over time for the modern web. It does the following:</h2>
        </section>
        <section>
        <section id="fragments">
            <ul>
                <li className="fragment">Optimizes the image automatically to avoid usage of large images on smaller viewports.</li>
                <li className="fragment">Serves images in next generation formats (like WebP) if the browser supports them.</li>
                <li className="fragment">Optimizes images on demand as users request them so that the build time wont increase.</li>
                <li className="fragment">Provides lazy load functionality so that the images load as they are scrolled into the viewport.</li>
                <li className="fragment">Allows for the specification of different image sizes for custom resolutions.</li>
                <li className="fragment">Renders images in a way to avoid Cumulative Layout Shift</li>
                <li className="fragment">Automatically changes the quality of images to a lower threshold of 75 percent, which can be updated for your needs.</li>
            </ul>
            </section>
        </section>
        <section>
            <h2 className="r-fit-text" style={{ marginTop: "2rem" }}>i18n routing support</h2>
            <section id="fragments">
            <ul>
                <li className="fragment">Building a Multi-Language Website with i18n</li>
                <li className="fragment">Automatic browser detection</li>
                <li className="fragment">Serving language based on suburl or domain</li>
            </ul>
            </section>
        </section>
        <section>
            <h2 className="r-fit-text" style={{ marginTop: "2rem" }}>App Deployment</h2>
            <img src="https://i.makeagif.com/media/1-10-2019/5XKmV8.gif" />
        </section>
        <section>
            <h2>Build Time and Runtime?</h2>
        </section>
        <section>
           <h2 className="r-fit-text" style={{ marginTop: "2rem" }}>NextJS Production Build</h2>
           <p>First, ensure your package.json has the "build" and "start" scripts:</p>
           <pre>
               <code data-trim data-noescape>{`
                "scripts": {
                    "dev": "next dev",
                    "build": "next build",
                    "start": "next start"
                  }
                }`}</code>
            </pre>
            <pre><code data-trim data-noescape>npm run build</code></pre>
            <pre><code data-trim data-noescape>npm run start</code></pre>
        </section>
        <section>
           <h2 className="r-fit-text" style={{ marginTop: "2rem" }}>Deployment</h2>
           <h5>Using Docker Image, Example of Docker File:</h5>
           <pre>
               <code data-trim data-noescape>{`
                    FROM node:12.20.1-alpine3.12 as build
                    WORKDIR /app
                    COPY package*.json .npmrc ./
                    RUN npm install
                    COPY . ./
                    RUN npm run build

                    FROM node:12.20.1-alpine3.12 as release
                    WORKDIR /appå
                    COPY --from=build /app/ ./
                    CMD ["npm", "start"]
                `}</code>
            </pre>
        </section>
        <section data-transition="zoom-in fade-out">
            <h2>What's Changing in NextJS?</h2>
            <img src="https://c.tenor.com/mcJGur7kwgQAAAAd/the-office-dwight-schrute.gif" height={200} />
        </section>
        <section>
            <h2>Nested Layouts</h2>
        </section>
        <section>
            <h2 className="r-fit-text" style={{ marginTop: "2rem" }}>Layouts RFC</h2>
            <section id="fragments">
                <div className="fragment">Requests</div>
                <div className="fragment">For</div>
                <div className="fragment">Comments</div>
            </section>
        </section>
        <section>
            <img src="https://miro.medium.com/max/1400/1*7i76-AVGjDZkjqriy5mFUw.jpeg" />
        </section>
        <section>
            <h2 className="r-fit-text">Quizzy Bees Game</h2>
        </section>
        <section>
            <h2>Thank You :")</h2>
            <img src="https://media.giphy.com/media/26FxCOdhlvEQXbeH6/giphy.gif" />
        </section>
      </div>
    </div>
  );
}

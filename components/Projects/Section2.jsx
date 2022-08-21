import Image from "next/image";
import React from "react";
import { myLoader } from "../../Utils/loader";

const Section2 = () => {
  return (
    <section className="project2">
      <div className="container">
        <div className="project2_cards">
          <div
            className="project2_card"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1300"
          >
            <div className="project2_img">
              <Image
                src="/assets/project1.png"
                alt="projects"
                width={553}
                height={320}
              />
            </div>
            <div className="project2_content">
              <p>
                Welko is a game-changing decentralized marketplace for buying
                and selling NFTs.
              </p>
            </div>
          </div>

          <div
            className="project2_card"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1300"
          >
            <div className="project2_img">
              <Image
                src="/assets/project2.png"
                alt="projects"
                width={553}
                height={320}
              />
            </div>
            <div className="project2_content">
              <p>
                Burger Web app for delivering fast food at the convience of your
                house.
              </p>
            </div>
          </div>

          <div
            className="project2_card"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1300"
          >
            <div className="project2_img">
              <Image
                src="/assets/image27.png"
                alt="projects"
                width={553}
                height={320}
              />
            </div>
            <div className="project2_content">
              <p>Quick navigation to satisfy your cravings</p>
            </div>
          </div>

          <div
            className="project2_card"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1300"
          >
            <div className="project2_img">
              <Image
                src="/assets/image28.png"
                alt="projects"
                width={553}
                height={320}
              />
            </div>
            <div className="project2_content">
              <p>
                Food for everyone. Just tap and swipe conveniently to get yours
              </p>
            </div>
          </div>

          <div
            className="project2_card"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1300"
          >
            <div className="project2_img">
              <Image
                src="/assets/image29.png"
                alt="projects"
                width={553}
                height={407}
              />
            </div>
            <div className="project2_content">
              <p>
                With this app, you purchase your favourite football kit
                hitchfree
              </p>
            </div>
          </div>

          <div
            className="project2_card"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1300"
          >
            <div className="project2_img">
              <Image
                src="/assets/image30.png"
                alt="projects"
                width={553}
                height={407}
              />
            </div>
            <div className="project2_content">
              <p>Use easy navigations to get jobs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

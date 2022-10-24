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
              <p>
                Expand Your Boundaries & Reach Out To Even Wider Audience By
                Creating A Food Delivery App
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
                src="/assets/image28.png"
                alt="projects"
                width={553}
                height={320}
              />
            </div>
            <div className="project2_content">
              <p>
                Mobile App for finding and meeting new people interested in
                camping
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
                A mobile app that keep track of your NFT collection and help you
                discover new items from the world’s first and largest digital
                marketplace
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
              <p>Adamas , Explore historical museum artifacts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

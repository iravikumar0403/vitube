import landingImage from "asset/landing-page.png";
import { VideoCard } from "components";

export const Homepage = () => {
  return (
    <main className="main container">
      <section className="grid grid-50-50 align-center">
        <div>
          <h2 className="text-primary">Grow your video editing skills</h2>
          <p className="text-justify pr-5">
            Learn everything you need to know about video editing from experts
            with real-world experience. Explore our courses and tutorials below
            and start taking your video editing skills to the next level today!
          </p>
        </div>
        <img src={landingImage} alt="" />
      </section>
      {[...Array(4).keys()].map(() => (
        <section className="container">
          <h2>Category name</h2>
          <div className="video-grid">
            {[...Array(8).keys()].map(() => (
              <VideoCard />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

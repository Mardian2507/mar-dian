import Layout from "@components/Layout";
import propertyImg from "@public/assets/projects/property.jpg";
import cryptoImg from "@public/assets/projects/crypto.jpg";
import netflixImg from "@public/assets/projects/netflix.jpg";
import twitchImg from "@public/assets/projects/twitch.jpg";
import ProjectItem from "components/ProjectItem";

export default function Projects() {
  return (
    <Layout title="My Projects">
      <div id="projects" className="w-full">
        <div className="lg:max-w-7xl mx-auto px-2 py-16">
          <h2
            className="pt-2 text-center tracking-widest uppercase text-primary"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Projects
          </h2>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Property Finder"
              backgroundImg={propertyImg}
              projectUrl="/project1"
              tech="React JS"
            />
            <ProjectItem
              title="Crypto App"
              backgroundImg={cryptoImg}
              projectUrl="/project2"
              tech="React JS"
            />
            <ProjectItem
              title="Netflix App"
              backgroundImg={netflixImg}
              projectUrl="/project3"
              tech="React JS"
            />
            <ProjectItem
              title="Twitch UI"
              backgroundImg={twitchImg}
              projectUrl="/project4"
              tech="Next JS"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

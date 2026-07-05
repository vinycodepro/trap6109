import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Music from "./components/Music";
import Videos from "./components/Videos";
import Shows from "./components/Shows";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  const videos = [
  {
    id: "1",
    title: "TESTIMONY",
    category: "Official Music Video",
    thumbnail: "/images/trap.jpg",
    url: "https://www.youtube.com/watch?v=NhPfeYacZEY",
  },
  {
    id: "2",
    title: "Isolation",
    category: "Official Music Video",
    thumbnail: "/images/trap.jpg",
    url: "https://www.youtube.com/watch?v=EefXHHJUoCY",
  },
  {
    id: "3",
    title: "Envy",
    category: "Official Music Video",
    thumbnail: "/images/trap.jpg",
    url: "https://www.youtube.com/watch?v=z1Ylz7JLb3I",
  },
];
  return (
    <>
      <Navbar />
      <Hero />

      <Music
        image="/images/trap.jpg"
        badge="New Album"
        title="Midnight Frequency"
        description="Twelve tracks of dark melodic trap recorded between dusk and dawn. Immersive bass, cinematic strings, and unfiltered storytelling."
        streamUrl="https://youtube.com/@Trap6109-f9e"
      />
      <Videos videos={videos} />
      <Shows />
      <Newsletter />
      <Footer />
    </>
  );
}
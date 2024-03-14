import HomepageHero from "@/app/common/components/organisms/HomepageHero/HomepageHero"

// TODO - all of the data fetching from Sanity is handled in this layer and passed down to the components
const homepageHeroData = {
  heading: "Wzorzec <strong>jakości</strong>",
  caption: "Nowoczesne budownictwo dla Ciebie i Twojej rodziny",
  video: "videos/hero-video.mp4",
}

const Home = () => {
  return (
    <main>
      <HomepageHero content={homepageHeroData} />
    </main>
  )
}

export default Home
import HomepageHero from "@/app/common/components/organisms/HomepageHero/HomepageHero"
import BlogFeed from "@/app/common/components/organisms/BlogFeed/BlogFeed"

// TODO - all of the data fetching from Sanity is handled in this layer and passed down to the components
const homepageHeroData = {
  heading: "Wzorzec <strong>jakości</strong>",
  caption: "Nowoczesne budownictwo dla Ciebie i Twojej rodziny",
  video: "videos/hero-video.mp4",
}

const blogFeedData = {
  heading: "Nasze <strong>inwestycje mieszkaniowe</strong>",
  caption: "Zajmujemy się budową oraz sprzedażą mieszkań  i nowoczesnych domów szeregowych w spokojnych, komfortowych lokalizacjach. Nasze inwestycje położone są w Chodzieży i jej okolicach – staramy się, aby nasze budynki wpisywały się w bieżący krajobraz, oferując klientom dostęp do zieleni, bez szkodliwej ingerencji w środowisko naturalne.",
  posts: [
    {
      image: "images/lesna-polana.png",
      heading: "Leśna Polana",
      caption: "Domy wolnostojące",
      slug: "nowa-inwestycja-w-chodziezy",
    },
    {
      image: "images/lesna-polana.png",
      heading: "Leśna Polana",
      caption: "Domy wolnostojące",
      slug: "nowa-inwestycja-w-chodziezy",
    },
    {
      image: "images/lesna-polana.png",
      heading: "Leśna Polana",
      caption: "Domy wolnostojące",
      slug: "nowa-inwestycja-w-chodziezy",
    },
    {
      image: "images/lesna-polana.png",
      heading: "Leśna Polana",
      caption: "Domy wolnostojące",
      slug: "nowa-inwestycja-w-chodziezy",
    },
  ],
}

const Home = () => {
  return (
    <main>
      <HomepageHero content={homepageHeroData} />
      <BlogFeed content={blogFeedData} />
    </main>
  )
}

export default Home
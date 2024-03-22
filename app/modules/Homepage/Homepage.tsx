import HomepageHero from "@/app/common/components/organisms/HomepageHero/HomepageHero"
import BlogFeed from "@/app/common/components/organisms/BlogFeed/BlogFeed"
import CTA from "@/app/common/components/organisms/CTA/CTA"

// TODO - all of the data fetching from Sanity is handled in this layer and passed down to the components
const homepageHeroData = {
  heading: "Wzorzec <strong>jakości</strong>",
  caption: "Nowoczesne budownictwo dla Ciebie i Twojej rodziny",
  video: "videos/hero-video.mp4",
}

const blogFeedData = {
  heading: "Nasze <br><strong>inwestycje mieszkaniowe</strong>",
  caption: "Zajmujemy się budową oraz sprzedażą mieszkań  i nowoczesnych domów szeregowych w spokojnych, komfortowych lokalizacjach. Nasze inwestycje położone są w Chodzieży i jej okolicach – staramy się, aby nasze budynki wpisywały się w bieżący krajobraz, oferując klientom dostęp do zieleni, bez szkodliwej ingerencji w środowisko naturalne.",
  posts: [
    {
      image: "images/lesna-polana.png",
      heading: "Leśna Polana",
      caption: "Domy wolnostojące",
      slug: "inwestycje/lesna-polana-1",
    },
    {
      image: "images/osiedle-sadowa.png",
      heading: "Osiedle Sadowa",
      caption: "Nowoczesne domy dwulokalowe",
      slug: "inwestycje/osiedle-sadowa",
    },
    {
      image: "images/osiedle-gajowa.jpeg",
      heading: "Osiedle Gajowa",
      caption: "Mieszkania",
      slug: "inwestycje/osiedle-gajowa",
    },
    {
      image: "images/lesna-polana-2.jpeg",
      heading: "Leśna Polana",
      caption: "Domy bliźniacze",
      slug: "inwestycje/lesna-polana-2",
    },
  ],
}

const CTAData = {
  heading: "Sprzedaż <strong>mieszkań i domów</strong>",
  caption: "ul. Słoneczna 23K <br> 64-800 Chodzież",
  contactInfo: true,
  phone: "+48 601 566 829",
  email: "biuro@firmaszajowski.pl",
}

const Home = () => {
  return (
    <main>
      <HomepageHero content={homepageHeroData} />
      <BlogFeed content={blogFeedData} />
      <CTA content={CTAData} />
    </main>
  )
}

export default Home
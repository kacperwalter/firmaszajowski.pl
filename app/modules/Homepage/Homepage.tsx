// @ts-nocheck
import HomepageHero from "@/app/common/components/organisms/HomepageHero/HomepageHero"
import BlogFeed from "@/app/common/components/organisms/BlogFeed/BlogFeed"
import CTA from "@/app/common/components/organisms/CTA/CTA"
import { getInvestments } from "@/sanity/sanity-utils"

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
      image: {
        src: "images/lesna-polana.jpg",
        alt: "Leśna Polana - Domy wolnostojące",
      },
      heading: "Leśna Polana",
      caption: "Domy wolnostojące",
      slug: "lesna-polana-1",
    },
    {
      image: {
        src: "images/osiedle-sadowa.jpg",
        alt: "Osiedle Sadowa - Nowoczesne domy dwulokalowe",
      },
      heading: "Osiedle Sadowa",
      caption: "Nowoczesne domy dwulokalowe",
      slug: "osiedle-sadowa",
    },
    {
      image: {
        src: "images/osiedle-gajowa.jpeg",
        alt: "Osiedle Gajowa - Mieszkania",
      },
      heading: "Osiedle Gajowa",
      caption: "Mieszkania",
      slug: "osiedle-gajowa",
    },
    {
      image: {
        src: "images/lesna-polana-2.jpeg",
        alt: "Leśna Polana - Domy bliźniacze",
      },
      heading: "Leśna Polana",
      caption: "Domy bliźniacze",
      slug: "lesna-polana-2",
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

const Home = async () => {
  const investments = await getInvestments()
  console.log(investments)
  
  return (
    <main>
      <HomepageHero content={homepageHeroData} />
      <BlogFeed content={blogFeedData} />
      <CTA content={CTAData} />
    </main>
  )
}

export default Home
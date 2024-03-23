import SwitchableMenu from "@/app/common/components/organisms/SwitchableMenu/SwitchableMenu"

const switchableMenuData = {
  heading: "Kontakt",
  items: [
    {
      name: "Inwestycje mieszkaniowe",
      heading: "Szajowski Inwestycje sp. z o.o.",
      caption: "ul. Słoneczna 23K <br> 64-800 Chodzież <br> NIP: 6070089882",
      phone: "+48 601 566 829",
      email: "biuro@firmaszajowski.pl",
    },
    {
      name: "Usługi budowlane",
      heading: "Szajowski spółka cywilna <br> Maciej Szajowski Aleksandra Szajowska",
      caption: "ul. Słoneczna 23K <br> 64-800 Chodzież <br> NIP: 6070032480 <br> Santader Bank Polska S.A. 10 1090 1317 0000 0001 0593 3970",
      phone: "+48 601 566 829",
      email: "biuro@firmaszajowski.pl",
    },
    {
      name: "Materiały budowlane",
      heading: "Firma Budowlana Paweł Szajowski",
      caption: "ul. Słoneczna 23K <br> 64-800 Chodzież <br> NIP: 6070032480 <br> Santader Bank Polska S.A. 10 1090 1317 0000 0001 0593 3970",
      phone: "+48 601 566 829",
      email: "pawel@firmaszajowski.pl",
    }
  ]
}

const Contact = () => {
  return (
    <main>
      <SwitchableMenu content={switchableMenuData}/>
    </main>
  )
}

export default Contact
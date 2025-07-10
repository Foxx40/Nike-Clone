import {
  Hero,
  Popular,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReview,
  Subcribe,
  Footer,
  Nav,
} from "./components";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero/>
      </section>
      <section className="padding">
        {" "}
        <Popular />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subcribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
    </main>
  );
}

export default App;

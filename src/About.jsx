import FAQSection from "./page-components/FAQSection";
import Icon from "./components/Icon";
import LinkButton from "./components/LinkButton";

export default function About() {
  return (
    <>
      <section className="full-width grid-layout bg-[url(/images/about-hero-bg.jpg)] bg-cover overlay py-12 text-white px-2 md:px-0 text-center">
        <h1 className="text-secondary mb-6">About Us</h1>
        <p className="text-center">
          Your number one solution for professional electrical solutions from
          qualified experts.
        </p>
      </section>

      <section className="full-width grid-layout bg-white p-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="pr-2">
            <div>
              <h2 className="text-primary">About Our Company</h2>
              <p className="mt-4 mb-6">
                Electrical Solutions Pty(Ltd) is a locally owned and operated
                electrical company based in Kwagga, Mpumalanga. We have over 15
                years of experience providing professional elctrical services to
                homes, business, and small industrial sites.
                <br />
                <br />
                Our mission is to deliver safe, affordable, and high-quality
                electrical work to our community and nearby areas around
                KwaNdebele.
              </p>
              <LinkButton text="Contact Us" path="/contact" />
            </div>
            <div className="flex align-center gap-4 mt-8 text-primary">
              <div className="hero-stat">
                <span>+15</span>
                <p>years</p>
              </div>
              <div className="hero-stat">
                <span>+32</span>
                <p>clients</p>
              </div>
              <div className="hero-stat">
                <span>+57</span>
                <p>projects</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/about-hero-bg.jpg"
              alt=""
              className="rounded-sm h-full"
            />
          </div>
        </div>
      </section>

      <section className="full-width grid-layout bg-accent py-12">
        <h2 className="text-secondary capitalize text-center mb-8">
          Why we are the <span className="text-primary">right choice</span> for
          you
        </h2>
        <div className="grid grid-cols-1 px-2 md:px-0 md:grid-cols-3 md:grid-rows-2 gap-2">
          <div className="md:order-1 bg-white p-6 rounded-sm shadow">
            <div className="flex items-center gap-2">
              <Icon src="/icons/dollar-icon.svg" />
              <h3 className="text-primary capitalize">Affordable Pricing</h3>
            </div>
            <p className="mt-6">
              Whether you're a home owner, a busines, or looking for specialized
              servies, we guarantee quality work from our years of experience in
              providing electrical services.
            </p>
          </div>
          <div className="md:order-2 bg-white p-6 rounded-sm shadow">
            <div className="flex items-center gap-2">
              <Icon src="/icons/clock-icon.svg" />
              <h3 className="text-primary capitalize">Fast and reliable</h3>
            </div>
            <p className="mt-6">
              Whether you're a home owner, a busines, or looking for specialized
              servies, we guarantee quality work from our years of experience in
              providing electrical services.
            </p>
          </div>
          <div className="order-first md:order-3 md:row-span-2 bg-primary text-white p-6 rounded-sm shadow">
            <div className="flex items-center gap-2">
              <Icon src="/icons/star-icon.svg" />
              <h3 className="capitalize">Qualified and experienced</h3>
            </div>
            <p className="my-6">
              We pride ourselves in providing quality service from our team of
              experienced electricians. In every project, we understand the
              importance of giving our clients quality results that they find
              satisfactory.
              <br />
              <br />
              Whether you're a home owner, a busines, or looking for specialized
              servies, we guarantee quality work from our years of experience in
              providing electrical services.
            </p>
          </div>
          <div className="md:order-4 bg-white md:col-span-2 p-6 rounded-sm shadow">
            <div className="flex items-center gap-2">
              <Icon src="/icons/caution-icon.svg" />
              <h3 className="text-primary capitalize">emergency call-outs</h3>
            </div>
            <p className="mt-6">
              Whether you're a home owner, a busines, or looking for specialized
              servies, we guarantee quality work from our years of experience in
              providing electrical services.
            </p>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}

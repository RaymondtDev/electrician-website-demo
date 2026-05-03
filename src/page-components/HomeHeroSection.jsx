import LinkButton from "../components/LinkButton";

export default function HomeHeroSection() {
  return (
    <section className="text-white full-width grid-layout bg-[url(/images/hero-background.jpg)] bg-cover overlay">
      <div className="w-full px-2 py-16 md:w-1/2 md:py-20 md:px-0">
        <h1 className="text-secondary mb-4">
          EXPERT ELECTRICAL SOLUTIONS FOR HOME AND BUSINESS
        </h1>
        <p className="mb-12">
          We provide solutions to many of your household electrical problems.
          Our team of professionals will work with you in solving electrical
          faults and keeping your lights on.
        </p>
        <LinkButton text="Contact Us" path="/contact" />
        <div className="flex align-center gap-4 mt-8">
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
    </section>
  );
}

import LinkButton from "../components/LinkButton";
import ReviewCard from "../components/ReviewCard";

export default function ReviewsSection() {
  return (
    <section className="full-width grid-layout bg-white py-12">
      <div className="flex flex-col md:flex-row">
        <div className="px-2 md:px-0 md:w-1/3 mb-3 md:mb-0">
          <div className="h-7 w-fit mb-1">
            <img
              className="w-full h-full object-contain"
              src="/icons/google-icon.svg"
              alt=""
            />
          </div>
          <h2 className="text-primary">
            What our <span className="text-secondary">clients</span> are saying
          </h2>
          <p className="mt-2 mb-9">
            See what our clients have to say about the services we provided
            them.
          </p>
          <LinkButton text="Contact Us" path="/contact" />
        </div>
        <div className="grid grid-cols-1 px-2 md:px-0 md:grid-cols-2 gap-2 md:gap-4 md:w-2/3">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  );
}

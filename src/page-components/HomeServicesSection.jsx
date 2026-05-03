import Icon from "../components/Icon";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export default function HomeServicesSection() {
  const { ref: cardRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="full-width grid-layout bg-accent py-12">
      <h2 className="text-secondary text-center mb-12">What We Do</h2>
      <div
        ref={cardRef}
        className="flex flex-col items-center gap-4 md:gap-0 md:flex-row justify-center"
      >
        <div
          className={clsx(
            "service-card md:transition ease-in-out duration-[800ms]",
            inView
              ? "md:opacity-100 md:translate-y-0"
              : "md:opacity-0 md:translate-y-20",
          )}
        >
          <div className="flex justify-center items-center gap-3 mb-5">
            <Icon src="/icons/residential-icon.svg" />
            <h3 className="text-primary">Residential</h3>
          </div>
          <p>
            Safe,complete wiring solutions for new homes from start to fininsh.
          </p>
        </div>
        <div
          className={clsx(
            "service-card md:transition ease-in-out duration-[800ms] delay-[0.2s]",
            inView
              ? "md:opacity-100 md:translate-y-0"
              : "md:opacity-0 md:translate-y-20",
          )}
        >
          <div className="flex justify-center items-center gap-3 mb-5">
            <Icon src="/icons/commercial-icon.svg" />
            <h3 className="text-primary">Commercial</h3>
          </div>
          <p>Reliable electrical setups tailored for business environments.</p>
        </div>
        <div
          className={clsx(
            "service-card md:transition ease-in-out duration-[800ms] delay-[0.4s]",
            inView
              ? "md:opacity-100 md:translate-y-0"
              : "md:opacity-0 md:translate-y-20",
          )}
        >
          <div className="flex justify-center items-center gap-3 mb-5">
            <Icon src="/icons/specialized-icon.svg" />
            <h3 className="text-primary">Specialized</h3>
          </div>
          <p>
            Professional solutions for broder electrical setups like solar
            installations.
          </p>
        </div>
      </div>
    </section>
  );
}

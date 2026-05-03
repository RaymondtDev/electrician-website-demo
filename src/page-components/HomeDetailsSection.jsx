import ArrowLink from "../components/ArrowLink";
import { useInView } from "react-intersection-observer";
import Icon from "../components/Icon";
import clsx from "clsx";

export default function HomeDetailsSection() {
  const { ref: colOne, inView: viewColOne } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: colTwo, inView: viewColTwo } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: colThree, inView: viewColThree } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: col, inView: viewCol } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <section className="bg-white full-width grid-layout py-4">
        <div
          ref={colOne}
          className="flex flex-col md:flex-row gap-4 mb-4 overflow-hidden"
        >
          <div
            className={clsx(
              "basis-1/2 relative rounded-sm md:transition md:ease-in md:duration-[300ms]",
              viewColOne ? "md:opacity-100" : "md:opacity-0",
            )}
          >
            <img
              src="/images/res-service-img.jpg"
              alt="Hand fixing electrical wires"
              className="img"
            />
          </div>
          <div className="basis-1/2 px-2 md:px-0 pt-4 pb-8">
            <h2
              className={clsx(
                "text-primary capitalize mb-5 md:transition md:ease-in md:duration-[500ms]",
                viewColOne
                  ? "md:opacity-100 md:translate-x-0"
                  : "md:opacity-0 md:-translate-x-20",
              )}
            >
              From faulty wires to stove and geyser connections, we make sure
              your home is powered from day one
            </h2>
            <p
              className={clsx(
                "w-[clamp(90%,60%,80%)] mb-5 md:transition md:ease-in md:duration-[500ms] md:delay-[0.2s]",
                viewColOne
                  ? "md:opacity-100 md:translate-x-0"
                  : "md:opacity-0 md:-translate-x-20",
              )}
            >
              Whether you're just staring out or upgrading your home's
              electrical system, you can count on us for quality work that is
              reliable, safe, and efficient.
            </p>
            <ul
              className={clsx(
                "mb-4 md:transition md:ease-in md:duration-[500ms] md:delay-[0.4s]",
                viewColOne
                  ? "md:opacity-100 md:translate-x-0"
                  : "md:opacity-0 md:-translate-x-20",
              )}
            >
              <li>New house wiring installations</li>
              <li>Rewiring and upgrages</li>
              <li>Fault finding and repairs</li>
              <li>Installation of plugs, lights, and switches</li>
              <li>Stove and geyser connections</li>
            </ul>
            <ArrowLink path="/services" />
          </div>
        </div>

        <div
          ref={colTwo}
          className="flex flex-col md:flex-row gap-4 mb-4 overflow-hidden"
        >
          <div className="basis-1/2 px-2 md:px-0 pt-4 pb-8 order-2 md:order-1">
            <h2
              className={clsx(
                "text-primary capitalize mb-5 md:transition md:ease-in md:duration-[500ms]",
                viewColTwo
                  ? "md:opacity-100 md:translate-x-0"
                  : "md:opacity-0 md:translate-x-20",
              )}
            >
              From faulty wires to stove and geyser connections, we make sure
              your home is powered from day one
            </h2>
            <p
              className={clsx(
                "w-[clamp(90%,60%,80%)] mb-5 md:transition md:ease-in md:duration-[500ms] md:delay-[0.2s]",
                viewColTwo
                  ? "md:opacity-100 md:translate-x-0"
                  : "md:opacity-0 md:translate-x-20",
              )}
            >
              Whether you're just staring out or upgrading your home's
              electrical system, you can count on us for quality work that is
              reliable, safe, and efficient.
            </p>
            <ul
              className={clsx(
                "mb-4 md:transition md:ease-in md:duration-[500ms] md:delay-[0.4s]",
                viewColTwo
                  ? "md:opacity-100 md:translate-x-0"
                  : "md:opacity-0 md:translate-x-20",
              )}
            >
              <li>New house wiring installations</li>
              <li>Rewiring and upgrages</li>
              <li>Fault finding and repairs</li>
              <li>Installation of plugs, lights, and switches</li>
              <li>Stove and geyser connections</li>
            </ul>
            <ArrowLink path="/services" />
          </div>
          <div
            className={clsx(
              "basis-1/2 relative rounded-sm md:transition md:ease-in md:duration-[300ms] order-1",
              viewColTwo ? "md:opacity-100" : "md:opacity-0",
            )}
          >
            <img
              src="/images/com-service-img.jpg"
              alt="Hand fixing electrical wires"
              className="img"
            />
          </div>
        </div>

        <div
          ref={colThree}
          className="flex flex-col md:flex-row gap-4 mb-4 overflow-hidden"
        >
          <div
            className={clsx(
              "basis-1/2 relative rounded-sm transition ease-in duration-[300ms]",
              viewColThree ? "md:opacity-100" : "md:opacity-0",
            )}
          >
            <img
              src="/images/spec-service-img.jpg"
              alt="Hand fixing electrical wires"
              className="img"
            />
          </div>
          <div className="basis-1/2 px-2 md:px-0 pt-4 pb-8">
            <h2
              className={clsx(
                "text-primary capitalize mb-5 md:transition md:ease-in md:duration-[500ms]",
                viewColThree
                  ? "md:opacity-100 md:translate-x-0"
                  : "md:opacity-0 md:-translate-x-20",
              )}
            >
              From faulty wires to stove and geyser connections, we make sure
              your home is powered from day one
            </h2>
            <p
              className={clsx(
                "w-[clamp(90%,60%,80%)] mb-5 md:transition md:ease-in md:duration-[500ms] md:delay-[0.2s]",
                viewColThree
                  ? "md:opacity-100 md:translate-x-0"
                  : "md:opacity-0 md:-translate-x-20",
              )}
            >
              Whether you're just staring out or upgrading your home's
              electrical system, you can count on us for quality work that is
              reliable, safe, and efficient.
            </p>
            <ul
              className={clsx(
                "mb-4 md:transition md:ease-in md:duration-[500ms] md:delay-[0.4s]",
                viewColThree
                  ? "md:opacity-100 md:translate-x-0"
                  : "md:opacity-0 md:-translate-x-20",
              )}
            >
              <li>New house wiring installations</li>
              <li>Rewiring and upgrages</li>
              <li>Fault finding and repairs</li>
              <li>Installation of plugs, lights, and switches</li>
              <li>Stove and geyser connections</li>
            </ul>
            <ArrowLink path="/services" />
          </div>
        </div>
      </section>

      <section className="full-width grid-layout bg-accent py-12">
        <h2 className="text-secondary capitalize text-center mb-8">
          Why we are the <span className="text-primary">right choice</span> for
          you
        </h2>
        <div
          ref={col}
          className="grid grid-cols-1 px-2 md:px-0 md:grid-cols-3 md:grid-rows-2 gap-2"
        >
          <div
            className={clsx(
              "md:order-1 bg-white p-6 rounded-sm shadow transition ease-in duration-[500ms]",
              viewCol
                ? "md:opacity-100 md:translate-y-0"
                : "md:opacity-0 md:translate-y-20",
            )}
          >
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
          <div
            className={clsx(
              "md:order-2 bg-white p-6 rounded-sm shadow transition ease-in duration-[500ms] delay-[0.2s]",
              viewCol
                ? "md:opacity-100 md:translate-y-0"
                : "md:opacity-0 md:translate-y-20",
            )}
          >
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
          <div
            className={clsx(
              "order-first md:order-3 md:row-span-2 bg-primary text-white p-6 rounded-sm shadow transition ease-in duration-[500ms] delay-[0.4s]",
              viewCol
                ? "md:opacity-100 md:translate-y-0"
                : "md:opacity-0 md:translate-y-20",
            )}
          >
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
          <div
            className={clsx(
              "md:order-4 bg-white md:col-span-2 p-6 rounded-sm shadow transition ease-in duration-[500ms] delay-[0.6s]",
              viewCol
                ? "md:opacity-100 md:translate-y-0"
                : "md:opacity-0 md:translate-y-20",
            )}
          >
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
    </>
  );
}

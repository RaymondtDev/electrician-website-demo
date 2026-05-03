import ReviewsSection from "./page-components/ReviewsSection";

export default function Services() {
  return (
    <>
      <section className="full-width grid-layout bg-[url(/images/services-hero-bg.jpg)] bg-cover overlay py-12 text-white text-center">
        <h1 className="text-secondary mb-6">Our Services</h1>
        <p className="text-center">
          We provide a wide range of professional electrical serives for
          residential, commercial, and specialized needs.
        </p>
      </section>
      <section className="full-with grid-layout bg-accent py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto_auto] gap-2">
          <div className="rounded-sm shadow-md p-4 bg-white md:grid md:grid-rows-subgrid md:row-span-3">
            <h2 className="mb-4">Residential Services</h2>
            <p className="mb-6">
              Some paragraph explaining the service in small detail
            </p>
            <div className="flex flex-col gap-2">
              <div>
                <h4 className="text-secondary">
                  House Wiring (New Installations)
                </h4>
                <p>
                  Safe, complete wiring solutions for new homes from start to
                  finish.
                </p>
              </div>
              <div>
                <h4 className="text-secondary">Rewiring and Upgrades</h4>
                <p>
                  Upgrade outdated wiring to improve safety and performance.
                </p>
              </div>
              <div>
                <h4 className="text-secondary">Fault Finding and Repairs</h4>
                <p>
                  Fast diagnosis and repair of electrical faults and power
                  issues.
                </p>
              </div>
              <div>
                <h4 className="text-secondary">
                  Plugs, Lights, and Switches Installation
                </h4>
                <p>
                  Professional installation of all essential electrical
                  fittings.
                </p>
              </div>
              <div>
                <h4 className="text-secondary">Stove and Geyser Connections</h4>
                <p>
                  Secure and efficient appliance connections you can rely on.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-sm shadow-md p-4 bg-primary text-white md:grid md:grid-rows-subgrid md:row-span-3">
            <h2 className="mb-4">Commercial Services</h2>
            <p className="mb-6">
              Some paragraph explaining the service in small detail
            </p>
            <div className="flex flex-col gap-2">
              <div>
                <h4 className="text-secondary">Office and Shop Wiring</h4>
                <p>
                  Reliable electrical setups tailored for business environments.
                </p>
              </div>
              <div>
                <h4 className="text-secondary">Maintenance Contracts</h4>
                <p>
                  Ongoing electrical maintenance to prevent costly downtime.
                </p>
              </div>
              <div>
                <h4 className="text-secondary">Backup Power Solutions</h4>
                <p>
                  Keep your business running during outages with backup systems.
                </p>
              </div>
              <div>
                <h4 className="text-secondary">DB Board Upgrades</h4>
                <p>
                  Modernize your distribution board for improved safety and
                  capacity.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-sm shadow-md p-4 bg-white md:grid md:grid-rows-subgrid md:row-span-3">
            <h2 className="mb-4">Specialized Services</h2>
            <p className="mb-6">
              Some paragraph explaining the service in small detail
            </p>
            <div className="flex flex-col gap-2">
              <div>
                <h4 className="text-secondary">Solar System Installation</h4>
                <p>
                  Reduce electricity costs with simple and effective solar
                  setups.
                </p>
              </div>
              <div>
                <h4 className="text-secondary">Generator Connections</h4>
                <p>
                  Seamless generator integration for dependable backup power.
                </p>
              </div>
              <div>
                <h4 className="text-secondary">Outdoor/Security Lighting</h4>
                <p>Enhance visibility and security around your property.</p>
              </div>
              <div>
                <h4 className="text-secondary">Electric Fence Connections</h4>
                <p>
                  Reliable electric fence installations for added protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReviewsSection />
    </>
  );
}

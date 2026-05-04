import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(null);

  const handleSumbit = (e) => {
    e.preventDefault();

    setMessage("This is a demo site, thank your for visiting");

    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <>
      <section className="full-width grid-layout bg-[url(/images/services-hero-bg.jpg)] bg-cover overlay py-12 text-white px-2 md:px-0 text-center">
        <h1 className="text-secondary mb-6">Contact Us</h1>
        <p className="text-center">
          Send us a message for whatever queries you might have and we'll get
          back to you as soon as possible.
        </p>
      </section>
      <section className="full-width grid-layout bg-white py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 px-2 lg:px-0">
          <div className="pr-3">
            <h2 className="text-primary mb-4">
              Send us a message and we'll get back to you
            </h2>
            <p>
              We're looking forward to hearing from and working with you. For
              emergencies please call:{" "}
              <a
                href="tel: +27623456789"
                className="text-secondary hover:underline"
              >
                079 123 4567
              </a>
              .
            </p>
            <h3 className="text-secondary mt-8">Service Locations</h3>
            <ul>
              <li>KwaMhlanga</li>
              <li>Tweefontein</li>
              <li>Kwagga</li>
              <li>Siyabuswa</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <form onSubmit={handleSumbit}>
              {message && (
                <p className="text-center text-secondary font-bold capitalize">
                  {message}
                </p>
              )}
              <div className="grid grid-cols-2 gap-2">
                <label htmlFor="name" className="flex flex-col">
                  First Name
                  <input type="text" name="name" id="name" placeholder="Name" />
                </label>
                <label htmlFor="name" className="flex flex-col">
                  Last Name
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="Surname"
                  />
                </label>
              </div>
              <label htmlFor="phone-number" className="flex flex-col">
                Phone Number
                <input
                  type="number"
                  name="phone-number"
                  id="phone-number"
                  placeholder="Phone Number"
                />
              </label>
              <label htmlFor="email" className="flex flex-col">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </label>
              <div className="grid grid-cols-2 gap-2">
                <label htmlFor="service" className="flex flex-col">
                  Service
                  <select name="service" id="service">
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="specialized">Specialized</option>
                  </select>
                </label>
                <label htmlFor="location" className="flex flex-col">
                  Location
                  <select name="location" id="location">
                    <option value="kwagga">Kwagga</option>
                    <option value="siyabuswa">Siyabuswa</option>
                    <option value="kwamhlanga">KwaMhlanga</option>
                    <option value="tweefontein">Tweefontein</option>
                  </select>
                </label>
              </div>
              <label>
                Message
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </label>
              <button type="submit" value="Send" className="link-btn w-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="full-width grid-layout py-8">
        <div className="px-2 lg:px-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.358275693851!2d28.93857897538554!3d-25.312313477637037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec0138bab914fcd%3A0xef26cb9f52565615!2sKwagga%20Mall!5e1!3m2!1sen!2sza!4v1777661270313!5m2!1sen!2sza"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-sm"
          ></iframe>
        </div>
      </section>
    </>
  );
}

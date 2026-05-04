import FAQCard from "../components/FAQCard";

export default function FAQSection() {
  const FAQs = [
    {
      no: 1,
      question: "How much is your consultation fee?",
      answer:
        "We don't charge a consultation fee. We just come to assess the work that needs to be done and then give you a quote. There's no charge towards you should you choose to not use our services.",
    },
    {
      no: 2,
      question: "How much is your consultation fee?",
      answer:
        "We don't charge a consultation fee. We just come to assess the work that needs to be done and then give you a quote. There's no charge towards you should you choose to not use our services.",
    },
    {
      no: 3,
      question: "How much is your consultation fee?",
      answer:
        "We don't charge a consultation fee. We just come to assess the work that needs to be done and then give you a quote. There's no charge towards you should you choose to not use our services.",
    },
    {
      no: 4,
      question: "How much is your consultation fee?",
      answer:
        "We don't charge a consultation fee. We just come to assess the work that needs to be done and then give you a quote. There's no charge towards you should you choose to not use our services.",
    },
  ];
  return (
    <section className="full-width grid-layout bg-white py-12" id="FAQs">
      <h2 className="text-primary text-center capitalize">
        Frequently asked questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 mt-6 gap-2 px-2 md:px-0">
        {FAQs.map((faq) => (
          <FAQCard key={faq.no} faq={faq} />
        ))}
      </div>
    </section>
  );
}

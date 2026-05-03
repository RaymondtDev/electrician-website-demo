export default function FAQCard({ faq }) {
  return (
    <div className="p-6 bg-primary text-white rounded-sm shadow grid grid-rows-subgrid row-span-2">
      <div className="flex items-center gap-2 mb-6">
        <p className="bg-secondary rounded-full aspect-square w-6 flex items-center justify-center">{ faq.no }</p>
        <h3>{ faq.question }</h3>
      </div>
      <p>{ faq.answer }</p>
    </div>
  )
}

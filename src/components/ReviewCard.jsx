import ReviewStar from "./ReviewStar";

export default function ReviewCard() {
  return (
    <div className="rounded-sm bg-primary text-white p-4 shadow">
      <div className="flex gap-2">
        <ReviewStar />
        <ReviewStar />
        <ReviewStar />
        <ReviewStar />
        <ReviewStar />
      </div>
      <div className="relative mb-5 mt-6">
        <div className="w-4 aspect-square absolute bottom-full">
          <img src="/icons/quote-icon.svg" alt="" />
        </div>
        <p>
          My home's electrical systems runs well and their service was quick and
          professional
        </p>
      </div>
      <div>
        <p className="text-lg font-bold">Anonymous</p>
      </div>
    </div>
  );
}

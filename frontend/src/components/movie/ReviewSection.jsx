import { Star } from "lucide-react";

const reviews = [
  {
    user: "Alex",
    rating: 5,
    review:
      "A masterpiece with incredible performances and stunning cinematography.",
  },
  {
    user: "Sophia",
    rating: 4,
    review:
      "Brilliant storytelling and an unforgettable soundtrack.",
  },
];

const ReviewSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <h2 className="text-3xl font-bold mb-10">
        User Reviews
      </h2>

      <div className="space-y-8">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-8
            "
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-xl">
                {review.user}
              </h3>

              <div className="flex">

                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    fill="gold"
                    className="text-yellow-400"
                    size={18}
                  />
                ))}

              </div>

            </div>

            <p className="text-gray-300 mt-5 leading-8">
              {review.review}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default ReviewSection;
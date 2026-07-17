import { Star } from "lucide-react";

const ReviewSection = ({ reviews }) => {

  if (!reviews?.length) return null;

  return (

    <section className="max-w-7xl mx-auto px-8 py-16">

      <h2 className="text-3xl font-bold mb-10">

        User Reviews

      </h2>

      <div className="space-y-8">

        {reviews.map((review) => (

          <div
            key={review.id}
            className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-8
            "
          >

            <div className="flex justify-between">

              <h3 className="font-semibold text-xl">

                {review.author}

              </h3>

              {review.rating && (

                <div className="flex items-center gap-2">

                  <Star
                    fill="gold"
                    className="text-yellow-400"
                    size={18}
                  />

                  {review.rating}

                </div>

              )}

            </div>

            <p className="text-gray-300 mt-5 leading-8">

              {review.content}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

};

export default ReviewSection;
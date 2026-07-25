import { Star, ExternalLink } from "lucide-react";

const WriteReviewCard = ({ movieId }) => {
  return (
    <section className="mt-14">

      <div className=" rounded-3xl border border-white/10 bg-gradient-to-br from-[#17171A] to-[#0E0E10] p-8">
        <div className="flex items-center gap-3 mb-4"><Star className="text-yellow-400 fill-yellow-400" /><h2 className="text-3xl font-bold">Write a Review</h2></div>
        <p className="text-gray-400 mb-8">Share your thoughts with the movie community.</p>
        <div className="flex gap-3 mb-8">{[1, 2, 3, 4, 5].map((star) => (<Star key={star} size={34} className="text-gray-500 hover:text-yellow-400 transition cursor-pointer"/>))}</div>
        <div className=" bg-white/5 border border-white/10 rounded-2xl p-6"> <p className="text-gray-300 leading-7">Reviews are managed by<span className="font-semibold text-white">{" "}TMDB</span>.Click below to write your review and join the discussion.</p></div>
        <button onClick={() =>window.open(`https://www.themoviedb.org/movie/${movieId}/reviews`,"_blank")} className="mt-8 flex items-center gap-3 bg-red-600 hover:bg-red-700 transition px-7 py-4 rounded-full font-semibold"><ExternalLink size={20} />Write Review on TMDB</button>
      </div>
    </section>
  );
};

export default WriteReviewCard;
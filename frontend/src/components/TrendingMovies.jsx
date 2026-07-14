import MovieCard from "./MovieCard";

const movies = [

{
title:"Interstellar",
year:"2014",
rating:"8.7",
image:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
},

{
title:"The Batman",
year:"2022",
rating:"8.2",
image:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
},

{
title:"Dune",
year:"2021",
rating:"8.0",
image:"https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
},

{
title:"Joker",
year:"2019",
rating:"8.4",
image:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
},

{
title:"Avatar",
year:"2022",
rating:"7.8",
image:"https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
},

{
title:"Oppenheimer",
year:"2023",
rating:"8.8",
image:"/featured/oppenheimer-poster.jpg"
},

];

const TrendingMovies = () => {
  return (

<section className="py-24 bg-[#09090B]">

<div className="max-w-7xl mx-auto px-6">

<div className="flex justify-between items-center mb-12">

<div>

<p className="uppercase tracking-[5px] text-red-500">

Trending

</p>

<h2 className="hero-title text-5xl">

Trending Now

</h2>

</div>

<button
className="
border
border-white/20
px-6
py-3
rounded-full
hover:border-red-500
transition
"
>

View All

</button>

</div>

<div
className="
flex
gap-7
overflow-x-auto
scrollbar-hide
pb-5
"
>

{movies.map((movie,index)=>(

<MovieCard

key={index}

movie={movie}

/>

))}

</div>

</div>

</section>

  );
};

export default TrendingMovies;
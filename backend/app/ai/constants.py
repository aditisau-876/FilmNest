GENRE_MAP = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
}

GENRE_NAME_TO_ID = {
    value: key
    for key, value in GENRE_MAP.items()
}

SORT_MAP = {
    "rating": "vote_average",
    "release_date": "primary_release_date",
    "popularity": "popularity",
}
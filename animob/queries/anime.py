import requests


anime_genre = [
    "action", "adventure", "cars", "comedy", "crime",
    "dementia", "demons", "drama", "dub", "ecchi",
    "family", "fantasy", "game", "gourmet", "harem",
    "historical", "horror", "josei", "kids", "magic",
    "martial-arts", "mecha", "military", "music",
    "mystery", "parody", "police", "psychological",
    "romance", "samurai", "school", "sci-fi", "seinen",
    "shoujo", "shoujo-ai", "shounen", "shounen-ai",
    "slice-of-Life", "space", "sports", "super-power",
    "supernatural", "suspense", "thriller", "vampire",
    "yaoi", "yuri",
]

class AnimeQueries:
    def get_popular_anime(self):
        res = requests.get('https://gogoanime.consumet.stream/popular')
        data = res.json()
        return data
    def get_anime_detail(self, animeId):
        res = requests.get('https://gogoanime.consumet.stream/anime-details/'+ animeId)
        data = res.json()
        return data
    def get_top_airing_anime(self):
        res = requests.get('https://gogoanime.consumet.stream/top-airing')
        data = res.json()
        return data
    def get_genres(self, anime_genre):
        res = requests.get('https://gogoanime.consumet.stream/genre/'+ anime_genre)
        data = res.json()
        return data
    def get_anime_by_genre(self, genre):
        res = requests.get('https://gogoanime.consumet.stream/genre/'+ genre )
        data = res.json()
        return data

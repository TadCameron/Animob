import requests


class AnimeQueries:
    def get_popular_anime(self):
        res = requests.get('https://animob-host.onrender.com/popular')
        data = res.json()
        return data

    def get_anime_detail(self, animeId):
        res = requests.get('https://animob-host.onrender.com/anime-details/'
                           + animeId)
        data = res.json()
        return data

    def get_top_airing_anime(self):
        res = requests.get('https://animob-host.onrender.com/top-airing')
        data = res.json()
        return data

    def get_genres(self):
        res = requests.get("http://localhost:8000/api/genre/")
        data = res.json()
        return data

    def get_anime_by_genre(self, genre):
        res = requests.get('https://animob-host.onrender.com/genre/' + genre)
        data = res.json()
        return data

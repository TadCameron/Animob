import requests


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
    # def get_genres(self,):
    #     res = requests.get('https://gogoanime.consumet.stream/genres')
    #     data = res.json()
    #     return data
    def get_anime_by_genre(self, genre):
        res = requests.get('https://gogoanime.consumet.stream/genre/'+ genre )
        data = res.json()
        return data

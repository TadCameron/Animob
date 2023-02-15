<!-- list popular animes -->
* Endpoint path: api/popular
* Endpoint method: GET
* Query parameters:
  * maybe the user info??

* Headers:
  * Authorization: Login token
* Response: list popular animes
* Response shape (JSON):
    {
      "animes": [
        {
          "animeTitle": string,
        ,
        }
      ]
    }

<!-- list top airing -->
* Endpoint path: api/top-airing
* Endpoint method: GET
* Query parameters:
* Headers:
  * Authorization: Bearer token
* Response shape (JSON):
    {
      "animes": [
        {
          "animeTitle": string,
          "animeImg": string,
          "latestEp": int,
          "genres": string,

        }
      ]
    }

<!-- get anime detail -->
* Endpoint path: api/anime-detail/{$animeTitle}
* Endpoint method: GET
* Query parameters:
  * name of the anime

* Headers:
  * Authorization: Login token
* Response: detail of anime
* Response shape (JSON):
    {
        "animeTitle": string,
        "genres": string,
        <!-- "animeUrl": string,  --> ???maybe 
        "animeImg": string"
        "synposis": string,

    }

<!-- list anime genres -->
Endpoint path: api/genres
Endpoint method: GET
Headers:
        Authorization: bearer token
Response: A list of all Anime genres
Response shape:
    json
  {
    "animes": [
    {
        "animeImg": string,
        "genres": string,
    }
    ]
   }

<!-- list animes by genre -->
Endpoint path: api/genre/${genre}
Endpoint method: GET
Headers:
    Authorization: Bearer token
Response: A list of a animes in genre
Response shape:
    json
  {
    "animes": [
    {
        "animeTitle": "string",

    }
    ]
   }

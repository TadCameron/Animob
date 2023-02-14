### discover
* Endpoint path: api/discover
* Endpoint method: GET
* Query parameters:
* «name»: «purpose»
 ```json
    {
      "animes": [
        {
          "animeTitle": string,
          "episodeNum": string,
          "genre": string,
          "releasedDate": number,
          "animeImg": string
        }
      ]
    }
    ```


### editors picks

* Endpoint path: api/editors-pick
* Endpoint method: GET


* Response: A list of animes
 ```json
    {
      "animes": [
        {
          "animeTitle": string,
          "episodeNum": string,
          "genre": string,
          "releasedDate": string,
          "animeImg": string
        }
      ]
    }



### results

* Endpoint path: /results
* Endpoint method: GET
* Query parameters:
  * maybe the user info??

* Headers:
  * Authorization: Login token

* Response shape (JSON):
    {
      "animes": [
        {
          "animeTitle": string,
          "genre": string,
          "animeImg": string,
          "releasedDate":number,
          "episodeNum": number
        }
      ]
    }


### seen animes

* Endpoint path: /seen
* Endpoint method: GET
* Query parameters:

* Headers:
  * Authorization: Login token

*Response: Get list of animes potentially seen
* Response shape (JSON):
    json
{
  "animes": [
    {
      "animeTitle": string,
      "has_seen": boolean
    }
  ]
}



### anime detail

* Endpoint path: /detail/{$anime_title$}


* Endpoint method: GET
* Query parameters:
  * name of the anime

* Headers:
  * Authorization: Login token

* Response shape (JSON):
    {
      "animes": [
        {
          "anime_title": string,
        :"trailer_url": string,
          "image_url": string"
        "synposis": string,
        }
      ]
    }

### anime list

Endpoint path: /animeList
Endpoint method: GET
Headers:
        Authorization: bearer token
Response: A list of Anime
Response shape:
    json
  {
    "animes": [
    {
        "animeTitle": string,
        "animeImg": string
    }
    ]
   }

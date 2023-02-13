### discover
* Endpoint path: api/discover
* Endpoint method: GET
* Query parameters:
* «name»: «purpose»
 ```json
    {
      "animes": [
        {
          "anime_name": string,
          "episodes": string,
          "tags": string,
          "release_date": string,
          "image_url": "string",
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
          "anime_name": string,
          "episodes": string,
          "tags": string,
          "release_date": string,
          "image_url": "string",
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
          "anime_title": string,
          "tags": string,
          "image_url": string,
          "released_date":number,
          "number_of_episodes": number,
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
"anime_title": string,
"has_seen": boolean,
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
          "image_url": string
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
        "anime_name": string,
        "image_url": string
    }
    ]
   }

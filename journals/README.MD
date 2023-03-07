# Animob

- Tad Cameron
- Sarah Floyd
- Terry Rowan
- Jaiden Faulkner

## Design

- [API endpoints](docs/api_endpoints.md)

## Intended market

Animob is a catalogue of animes sorted by genre that users are free to explore. You can log animes you've seen or any the pique your interest in the Profile section. Any user can discover new animes through one of our search by genre features, or they can take recommendations from popular animes or our Editor's Picks.

## Functionality

- Users can create a profile through our sign-up pages.
- Users can click on the Discover button to search for animes by genre.
- Details page that gives a deeper look at an anime.
- Favorites function that can save animes to your profile from anywhere.
- Recommended Animes carousel that shows popular animes according to the API
- Profile Page that shows the Recommended and Favorties carousels. Also includes removal of favorites here.
- Editor's Picks carousel that shows hardcoded choices made by ther developers.

## Project Initialization

You can use Animob for your own Weeby pleasures by following the steps below:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run `docker volume create animob`
4. Run `docker compose build`
5. Run `docker compose up`
6. Start browsing animes!

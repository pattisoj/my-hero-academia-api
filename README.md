<a name="readme-top"></a>

# My Hero Academia API

![Forks](https://img.shields.io/github/forks/pattisoj/my-hero-academia-api?style=flat-square)
![Stars](https://img.shields.io/github/stars/pattisoj/my-hero-academia-api?style=flat-square)
![Issues](https://img.shields.io/github/issues/pattisoj/my-hero-academia-api?style=flat-square)
![MIT License](https://img.shields.io/github/license/pattisoj/my-hero-academia-api?style=flat-square)

[Tiếng Việt :vietnam:](https://github.com/pattisoj/my-hero-academia-api/blob/main/README%20translations/README.vietnamese.md)

<details>
<summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li>
          <a href="#built-with">Built With</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
      <li><a href="#endpoints">Endpoints</a></li>
      </ul>
    </li>
    <li>
      <a href="#roadmap">Roadmap</a>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
    <li>
       <a href="#license">License</a>
    </li>
    <li>
       <a href="#contact">Contact</a>
    </li>
    <li>
       <a href="#acknowledgments">Acknowledgments</a>
    </li>
  </ol>
</details>

## About The Project

<!-- Screenshot / gif of the project here -->

This fan-made API was created as a passion project. I really enjoy anime and one of my recent favorites has been My Hero Academia, I decided I wanted to create something for it and for it's fan base so I decided to create this API.

### Built with

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![Express.JS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

To use this project you will need a node package manager installed. Visit the [npm documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for a more detailed guide.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pattisoj/my-hero-academia-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the api locally
   ```sh
   npm start
   ```
   _NOTE - When running locally this API will use `http://localhost:3000/`. If you need to change this for any reason the port can be found in `.bin/www.js`. Do not commit any port changes on a pull request._

<!-- Need some specifics for the project here -->
<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Usage

_This space will be updated alongside the development of the API._

Requests can be made with curl or other helper libraries by following regular REST calls. For example, here is how to GET the all of the character data:

`curl https://myheroacademia-api.herokuapp.com/characters`

Calling this resource will respond with an object with the following structure:

```json
{"students" : [
  {
  "id": "1",
  "name": "Izuku Midoriya",
  "name_japanese": "緑谷 出久",
  "other_names": ["Deku"],
  "quirk": "One for All",
  "quirk_japanese": "ワン・フォー・オール",
  "quirk_description": "A transferable Quirk that stockpiles power and grants immense strength, speed, stamina, and durability.",
  "class": "Class 1-A"
  },
  ...],
"villains" : [
  {
  "id" : "46",
  "name" : "Tenko Shimura",
  "name_japanese" : "志村 転弧",
  "other_names" : ["Tomura Shigaraki"],
  "quirk" : "Decay",
  "quirk_japanese" : "崩壊",
  "quirk_description" : "Enables him to disintegrate whatever he touches with his fingers and anything connected to it.",
  "affiliation" : "League of Villains"
  },
  ...],
"heroes" : [
  {
  "id" : "92",
  "name" : "Enji Todoroki",
  "name_japanese" : "轟 炎司",
  "hero_name" : "Endeavor",
  "hero_name_japanese" : "エンデヴァー",
  "quirk" : "Hellflame",
  "quirk_japanese" : "ヘルフレイム",
  "quirk_description" : "Gives him powerful pyrokinetic abilities. He is immune to other flames, and can easily control the shape and temperature of the blaze as well.",
  "affiliation" : "Top Hero"
  },
  ...]
}
```

For data on a single character you can search by id:

`curl https://myheroacademia-api.herokuapp.com/characters/{characterID}`

Currently there is data for 45 students, 46 villains and 42 heroes.

### Endpoints

- /characters
  - /students
  - /villains
  - /heroes
  - /{characterID}

<!--_For more examples, please refer to the [Documentation](https://example.com)_-->

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Roadmap

- [x] Deployment
- [ ] CI/CD Pipelines
  - [x] Auto-deployment
  - [x] Linting workflow
  - [x] Testing workflow
  - [ ] Contribution guides
- [ ] Data for all characters
  - [x] Students
  - [x] Villains
  - [x] Pro Heroes
  - [ ] Other
- [ ] Episode Information
  - [ ] Main
  - [ ] Movies
  - [ ] Specials (OVAs)

See the [open issues](https://github.com/pattisoj/my-hero-academia-api/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Contributing

<!-- Update this with the process specific to this project -->

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Ensure you give a description of your changes.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Contact

[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/_pattisoj)

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/josh-pattison/)

[![Portfolio](https://img.shields.io/badge/portfolio-006699?style=for-the-badge&logo=About.me&logoColor=white)](https://joshpattison.com/)

[![ProjectLink](https://img.shields.io/badge/Project_Link-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://myheroacademia-api.herokuapp.com/)

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Acknowledgments

- [My Hero Academia](https://www.imdb.com/title/tt5626028/)
- [Wikipedia](https://en.wikipedia.org/wiki/List_of_My_Hero_Academia_characters)
- [My Hero Academia Wiki](https://myheroacademia.fandom.com/wiki/My_Hero_Academia_Wiki)

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

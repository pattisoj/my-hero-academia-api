<a name="readme-top"></a>

# My Hero Academia API

![Forks](https://img.shields.io/github/forks/pattisoj/my-hero-academia-api?style=flat-square)
![Stars](https://img.shields.io/github/stars/pattisoj/my-hero-academia-api?style=flat-square)
![Issues](https://img.shields.io/github/issues/pattisoj/my-hero-academia-api?style=flat-square)
![MIT License](https://img.shields.io/github/license/pattisoj/my-hero-academia-api?style=flat-square)

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

Đây là một dự án API do fan làm vì đam mê. Tôi rất thích anime và một trong những bộ yêu thích gần đây của tôi là My Hero Academia, vì vậy tôi quyết định tạo ra thứ gì đó cho nó và dựa trên cơ sở của fan nên tôi tạo ra API này.

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

Để tạo và chạy một bản sao cục bộ, hãy làm theo các bước ví dụ đơn giản sau.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Để sử dụng dự án này, bạn sẽ cần cài đặt trình quản lý gói node. Vào [npm documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) để được hướng dẫn chi tiết hơn.
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

_Không gian này sẽ được cập nhật cùng với sự phát triển của API._
_This space will be updated alongside the development of the API._

Yêu cầu có thể được thực hiện với curl hoặc các thư viện trợ giúp khác bằng cách thực hiện theo các lệnh gọi REST thông thường. Ví dụ: đây là cách GET tất cả dữ liệu ký tự:
Requests can be made with curl or other helper libraries by following regular REST calls. For example, here is how to GET the all of the character data:

`curl https://myheroacademia-api.herokuapp.com/characters`

Gọi tài nguyên này sẽ phản hồi với một đối tượng có cấu trúc sau:
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

Hiện tại có dữ liệu của 45 học sinh, 46 nhân vật phản diện và 42 anh hùng.
Currently there is data for 45 students, 46 villains and 42 heroes.

### Endpoints

- /characters
  - /students
  - /villains
  - /heroes

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

Đóng góp là những gì làm cho cộng đồng nguồn mở trở thành một nơi tuyệt vời để học hỏi, truyền cảm hứng và sáng tạo. Bất kỳ đóng góp nào bạn thực hiện đều được đánh giá cao.
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Nếu bạn có đề xuất nào có thể cải thiện điều này, vui lòng rẽ nhánh repo và tạo yêu cầu kéo. Bạn cũng có thể chỉ cần mở một vấn đề với thẻ "cải tiến". Đảm bảo bạn đưa ra mô tả về những thay đổi của mình. Đừng quên cho dự án một ngôi sao! Cảm ơn một lần nữa!
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Ensure you give a description of your changes.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## License
Phân phối theo Giấy phép MIT. Xem `LICENSE.txt` để có nhiều thông tin hơn.
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

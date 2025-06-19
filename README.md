# OrgServer

Strapi comes with a full featured [Command Line Interface][0] (CLI) which lets you scaffold and manage your project in seconds.

[![Deploy to Production environment](https://github.com/kaiyuanshe/OrgServer/actions/workflows/main.yml/badge.svg)][1]
[![](https://raw.githubusercontent.com/sindresorhus/awesome/main/media/mentioned-badge.svg)][2]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)][3]
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][4]

## Learning

https://tech-query.me/development/headless-cms-strapi/

## 🎮 Stack

- Programming Language: [TypeScript][5] v5+
- Package Manager: [PNPM][6] v10+
- Headless CMS: [Strapi][7] v5+
- API specification: [Swagger][8]
- Deployment Engine: [Docker][9]
- CI/CD platform: [GitHub actions][10]

## 🔌 Pre-installed plugins

### Back-end

1.  [Swagger document][11]
2.  [CloudFlare R2 uploader][12]

### Front-end

1.  [Color picker][13]
2.  [Multiple selector][14]
3.  [IconHub][15]
4.  [CKEditor 5][16]
5.  [Location picker][17]

## 💾 Preset schema

### Model

|  Collection  |          Usage           |                         Remark                          |
| :----------: | :----------------------: | :-----------------------------------------------------: |
|   Category   |  Content Classification  |        associated with a variety of Content data        |
|   Comment    |     Content Comment      |        associated with a variety of Content data        |
|   Account    |        In/Outcome        |             Sponsorship, Travel or Purchase             |
|   Property   |         Supplies         |                 Equipment or Souvenirs                  |
|     User     | external registered User |                     not Admin users                     |
| Organization |  external Organization   | Company, Open-source Community, non-profit Organization |
|    Place     |                          |                       in/outdoor                        |
|   Project    |                          |           Open source, Public Welfare project           |
|     Task     |                          |                                                         |
| Contribution |    Task Contribution     |                                                         |
|   Program    |     Activity Section     |              Lectures, Workshops or Booths              |
|   Activity   |                          |        various Small, Medium or Large activities        |
| Partnership  |                          |               Cooperation or Sponsorship                |
|  Evaluation  |                          |  Evaluation of Task contribution and Activity sections  |

### Data components

|                      Name                       | Category |         Usage          |
| :---------------------------------------------: | :------: | :--------------------: |
|                     Period                      |   Date   |       Time Range       |
|                      Goods                      | Supplies | Equipment or Souvenirs |
| [Address](src/components/location/address.json) | Location |                        |

## 💡 Best practice

1.  Install **[Settings][18] GitHub app** in your account or organization

2.  Click the **[Use this template][19] button** on the top of this GitHub repository's home page, then create your own repository in the app-installed namespace above

3.  Click the **[Open in GitHub codespaces][20] button** on the top of ReadMe file, then an **online VS Code development environment** will be started immediately

4.  Recommend to add a [Notification step in GitHub actions][21] for your Team IM app

5.  Remind the PMs & users of your product to submit **Feature/Enhancement** requests or **Bug** reports with [Issue forms][22] instead of IM messages or Mobile Phone calls

6.  Collect all these issues into [Project kanbans][23], then create **Pull requests** & add `closes #issue_number` into its description for automation

## 🚀 Scripts

### `develop`

Start your Strapi application with autoReload enabled. [Learn more][24]

```shell
npm i pnpm -g
pnpm i
pnpm develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more][25]

```shell
npm start
```

### `build`

Build your admin panel. [Learn more][26]

```shell
pnpm build
```

### `pack-image`

Build your Docker image locally.

```shell
pnpm pack-image
```

### `container`

Run your Docker image locally.

```shell
pnpm container
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud][27]. Browse the [deployment section of the documentation][28] to find the best solution for your use case.

```shell
pnpm strapi deploy
```

### GitHub Actions secrets

|    Name    |          Value example          |
| :--------: | :-----------------------------: |
|   `PATH`   |             `~/www`             |
|   `HOST`   |        `your.server.net`        |
|   `USER`   |             `root`              |
| `SSH_KEY`  | (output of `cat ~/.ssh/id_rsa`) |
| `BASE_URL` |    `https://your.server.net`    |

## 🚀 Releasing

### Deploy Application

```shell
git checkout master
git tag v1.0.0  # this version tag comes from ./package.json
git push origin master --tags
```

### Publish Type Package

```shell
git checkout master
git tag type-v1.0.0  # this version tag comes from ./types/package.json
git push origin master --tags
```

## 📚 Learn more

- [Resource center][29] - Strapi resource center.
- [Strapi documentation][30] - Official Strapi documentation.
- [Strapi tutorials][31] - List of tutorials made by the core team and the community.
- [Strapi blog][32] - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog][33] - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository][34]. Your feedback and contributions are welcome!

## ✨ Community

- [Discord][35] - Come chat with the Strapi community including the core team.
- [Forum][36] - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi][37] - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring][38].</sub>

[0]: https://docs.strapi.io/dev-docs/cli
[1]: https://github.com/kaiyuanshe/OrgServer/actions/workflows/main.yml
[2]: https://github.com/strapi-community/awesome-strapi
[3]: https://codespaces.new/kaiyuanshe/OrgServer
[4]: https://gitpod.io/?autostart=true#https://github.com/kaiyuanshe/OrgServer
[5]: https://www.typescriptlang.org/
[6]: https://pnpm.io/
[7]: https://strapi.io/
[8]: https://swagger.io/
[9]: https://www.docker.com/
[10]: https://github.com/features/actions
[11]: https://github.com/strapi/strapi/tree/develop/packages/plugins/documentation
[12]: https://github.com/trieb-work/strapi-provider-cloudflare-r2
[13]: https://github.com/strapi/strapi/tree/develop/packages/plugins/color-picker
[14]: https://github.com/Zaydme/strapi-plugin-multi-select
[15]: https://github.com/Arshiash80/strapi-plugin-iconhub
[16]: https://github.com/ckeditor/strapi-plugin-ckeditor
[17]: https://github.com/wisnuwiry/strapi-geodata
[18]: https://github.com/apps/settings
[19]: https://github.com/new?template_name=OrgServer&template_owner=kaiyuanshe
[20]: https://codespaces.new/kaiyuanshe/OrgServer
[21]: https://github.com/FreeCodeCamp-Chengdu/FreeCodeCamp-Chengdu.github.io/blob/8df9944449002758f7ec809deeb260ce08182259/.github/workflows/main.yml#L34-L63
[22]: https://github.com/kaiyuanshe/OrgServer/issues/new/choose
[23]: https://github.com/kaiyuanshe/OrgServer/projects
[24]: https://docs.strapi.io/dev-docs/cli#strapi-develop
[25]: https://docs.strapi.io/dev-docs/cli#strapi-start
[26]: https://docs.strapi.io/dev-docs/cli#strapi-build
[27]: https://cloud.strapi.io/
[28]: https://docs.strapi.io/dev-docs/deployment
[29]: https://strapi.io/resource-center
[30]: https://docs.strapi.io/
[31]: https://strapi.io/tutorials
[32]: https://strapi.io/blog
[33]: https://strapi.io/changelog
[34]: https://github.com/strapi/strapi
[35]: https://discord.strapi.io/
[36]: https://forum.strapi.io/
[37]: https://github.com/strapi/awesome-strapi
[38]: https://strapi.io/careers

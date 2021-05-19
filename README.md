<div align="center">
    <h1>give-me-profile</h1>
    <p>
        <b> Support regex for world-wide SNS's user identifier </b>
    </p>
    <p>
        <img src="https://img.shields.io/npm/v/give-me-profile.svg" alt="npm">
        <a href="https://www.npmjs.com/package/give-me-profile"><img src="https://img.shields.io/npm/v/give-me-profile.svg" alt="npm"></a>
        <a href="LICENSE"><img src="https://img.shields.io/github/license/blue-hope/give-me-profile" alt="license"></a>
    </p>
    <br/>
</div>

## Installation
```shell
$ npm i give-me-profile --save
```

## Before Usage
> 🌐 **Getting Help** — give-me-profile is not yet tested whole accounts of world-wide SNS
> (and it's quite difficult!) so feel
> free to opening issues or PR

## How to get user identifier for SNS?
* **Facebook**
> For your account, Open https://facebook.com/me on your browser

`SNSList.FACEBOOK_USERNAME`: https://www.facebook.com/[id]

`SNSList.FACEBOOK_PROFILE`: https://www.facebook.com/profile.php?id=[id]

* **Instagram**

`SNSList.INSTAGRAM`: https://www.instagram.com/[id]/

* **LinkedIn**

`SNSList.LINKEDIN`: https://www.linkedin.com/in/[id]/

* Stackoverflow

`SNSList.STACKOVERFLOW`: https://stackoverflow.com/users/[id]

* Github

`SNSList.GITHUB`: https://github.com/[id]

* Gitlab

`SNSList.GITLAB`: https://gitlab.com/[id]

* Medium

`SNSList.MEDIUM_PREFIX`: https://[id].medium.com

`SNSList.MEDIUM_SUFFIX`: https://medium.com/[id]

* Youtube

`SNSList.YOUTUBE_USER`: https://www.youtube.com/user/[id]

`SNSList.YOUTUBE_CHANNEL`: https://www.youtube.com/channel/[id]
## Usage
### We support regex for world-wide SNS's user identifier
```js
import { SNSRegex, SNSList } from "give-me-profile";

SNSRegex(SNSList.GITHUB) // /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
```

### We provide regex test
```js
import { SNSTester, SNSList } from "give-me-profile";

SNSTester(SNSLIST.GITHUB, "blue-hope") // true
SNSTester(SNSList.GITHUB, "****") // false
```

### We provide whole user profile url for the id above
```js
import { SNSUrlRenderer, SNSList } from "give-me-profile";

SNSUrlRenderer(SNSLIST.GITHUB, "blue-hope") // https://github.com/blue-hope
```

## License
MIT License

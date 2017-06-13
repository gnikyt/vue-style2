# vue-style2

Allows for `<style>` tag in your Vue applications. Based on vue-script2.

This is useful for when you can not, or are not, using `.vue` files. Simply replace any `<style>` tag with `<style2>` and it will work as expected.

***NOTE:*** _Requires Vue 2.x.

## Installation

`npm install vue-style2 --save`

Then, enable the plugin either by:

```js
Vue.use(require('vue-style2'))
```

or

```js
import VueStyle2 from 'vue-style2';
// ...
Vue.use(VueStyle2);
```

## Usage

`<style2>{your styles}</style2>`

## Example

```html
{{ page.title }}

<div id="page-banner" :class="{ 'fallback-image': !page.image }"></div>

<style2 v-if="page.image">
  @media (max-width: 481px) {
    #page-banner {
      background-image: url({{ page.image.small }});
    }
  }

  @media (min-width: 481px) {
    #page-banner {
      background-image: url({{ page.image.medium }});
    }
  }

  @media (min-width: 867px) {
     #page-banner {
      background-image: url({{ page.image.large }});
    }
  }
</style2>
```

Outputs, as example:

```html
About Page

<div id="banner"></div>

<style type="text/css">
  @media (max-width: 481px) {
    #page-banner {
      background-image: url(assets/some-path/banners/about-small-7939.jpg);
    }
  }

  @media (min-width: 481px) {
    #page-banner {
      background-image: url(assets/some-path/banners/about-medium-3939.jpg);
    }
  }

  @media (min-width: 867px) {
     #page-banner {
      background-image: url(assets/some-path/banners/about-large-3900.jpg);
    }
  }
</style>
```
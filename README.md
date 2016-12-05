# Tabs – Scientia

[![Build Status](https://magnum.travis-ci.com/mirego/scientia-tabs-component.svg?token=3s1pLpoaE4oVXEEQWxnc&branch=master)](https://magnum.travis-ci.com/mirego/scientia-tabs-component)

This addon follows the guidelines defined in [scientia web guidelines](https://github.com/mirego/scientia-guidelines/tree/master/web).

---
## Screenshot

![tabs-layout-example](https://cloud.githubusercontent.com/assets/513491/10486234/00d0b672-725c-11e5-93b2-8612636a8034.png)

---
## Basic usage
```hbs
  {{#scientia-tabs}}
    {{#scientia-tabs-item}}
      {{#link-to 'index' class='scientia-tabs-item-link' activeClass='scientia-tabs-item-link--active'}}
        {{inline-svg 'config.svg' class='scientia-tabs-item-link-icon'}}
        <span class="scientia-tabs-item-link-text">Config</span>
      {{/link-to}}
    {{/scientia-tabs-item}}

    {{#scientia-tabs-item}}
      <span>...</span>
    {{/scientia-tabs-item}}
  {{/scientia-tabs}}
```

---
## Managing dependencies

We use ember-cli which depends on node.js, npm and Bower.

You need to have the Mirego’s user key in `~/.npmrc` or to do a `npm login` in order to be able to clone private repositories.

```shell
$ brew install node
$ npm login
$ npm install
$ bower install
```

---
## Running

* `ember server`
* Visit your app at http://localhost:4200.

---
## Running Tests

* `ember test`
* `ember test --server`

---
## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

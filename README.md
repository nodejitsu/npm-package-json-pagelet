# Interactive package.json

The `npm-package-json-pagelet` is a [Pagelet] for the [BigPipe] framework. It's
primary goal is to teach new comers how a package.json is used, structured and
what each key in a package.json means.

To see a demonstration of this module go to: http://browsenpm.org/package.json

## Installation

We assume that you have [nodejs] installed an use [BigPipe] as framework. Once
you've met these requirements you can install this module using:

```
npm install --save npm-package-json-pagelet
```

## Adding it to your page.

If you already have a BigPipe page that you want to add the Pagelet to you can
simply add it to the `pagelets` object:

```js
'use strict';

var Page = require('bigpipe').Page;

Page.extend({
  path: '/',              // HTTP route we should respond to.
  view: './index.ejs',    // The base template we need to render.
  pagelets: {             // The pagelets that should be rendered.
    "package.json": require('npm-package-json-pagelet')
  }
}).on(module);
```

If you wish to change styling or interactions etc you can simply extend the
Pagelet:

## Found something missing?

There's a lot that you can add to a package.json, are you missing a certain
field or pattern? Create an issue, or if you're feeling adventures, create
a pull request.

```js
'use strict';

var Page = require('bigpipe').Page
  , path = require('path');

Page.extend({
  path: '/',              // HTTP route we should respond to.
  view: './index.ejs',    // The base template we need to render.
  pagelets: {             // The pagelets that should be rendered.
    "package.json": require('npm-package-json-pagelet').extend({
      css: path.join(__dirname + '/path/to/custom/css.sass')
    })
  }
}).on(module);
```

## License

[MIT](LICENSE)

[Pagelet]: https://github.com/bigpipe/pagelet
[BigPipe]: https://github.com/bigpipe/bigpipe

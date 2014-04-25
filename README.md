# lineman-lib-template

[![Build Status](https://travis-ci.org/linemanjs/lineman-lib-template.png?branch=master)](https://travis-ci.org/linemanjs/lineman-lib-template)

This is a hyper-focused template project for [Lineman](http://linemanjs.org) that's designed to make it *an absolute breeze* to develop and distribute JavaScript libraries for the web.

## getting started

1. clone & cd into this repo
2. ensure you have [Node](http://nodejs.org) and [Lineman](https://github.com/linemanjs/lineman#getting-started) installed
3. run `lineman build`

Now, if you crack open the dist directory, you should see two files:

**your-lib-name-here.js:**
``` javascript
/* your-lib-name-here - 0.0.1
 * A description about how Lineman helped you build your lib
 * https://your/lib/name/here
 */
(function() {
 //... some JavaScript code
}).call(this);
```
and **your-lib-name-here.min.js:**
```
/* your-lib-name-here - 0.0.1
 * A description about how Lineman helped you build your lib
 * https://your/lib/name/here
 */
(function() {/* some minified JavaScript code */}).call(this);
```

Well that was fun! `lineman build` has created a little library distribution for us.

What's nifty is that the repo *also* benefits from the same lifecycle that Lineman provides for web apps. The gist is that means you can:

* Get live compilation of CoffeeScript (or JSHinting) with `lineman run`
* Use as many files as you like and know that they'll be concatenated for you
* Write tests and run them with `lineman spec` during development
* Run tests in CI with `lineman spec-ci`

See [Lineman's README](https://github.com/linemanjs/lineman#working-with-lineman) for more details.

## making your lib

Once you've confirmed that everything's working, the next step is to make it your own!

First, take a look at the package.json and fill it out with the pertinent details about your library:

```
{
  "name": "your-lib-name-here",
  "version": "0.0.1",
  "description": "A description about how Lineman helped you build your lib",
  "homepage": "https://your/lib/name/here",
  "author": {
    "name": "Justin Searls (or your name)",
    "company": "Test Double, LLC (or your company)"
  },
  "dependencies": {
    "lineman": "~0.11.0"
  }
}
```

Second, you'll probably want to remove the sample code at `app/js/sum_to.coffee` and `spec/js/sum_to_spec.coffee`.

Third, you'll probably want to call a friend over to your desk to show how easy it is as you write your library with Lineman.

Fourth, you'll want to delete this README and write your own! Good luck!

## notes

It's worth mentioning that lineman-lib-template will, by default, *not include* any JavaScript files you place in `vendor/js` in the distribution. However, some libraries may desire this behavior and it can be set with a flag at the top of `config/application.coffee`, just change `false` to `true`:

``` coffee
includeVendorInDistribution = true
```

## publishing your lib to npm for use with Node.js

This template also provides an easy example of publishing your lib on Node if that's
appropriate. Instead of pointing at the built distribution, consider exporting your
goods from `main.js`. Take a look at the project as a silly little example (note
that it is dumping the example method, `sumTo` onto global scope).

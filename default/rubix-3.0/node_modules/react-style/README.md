# React Style

[![Build Status](https://travis-ci.org/js-next/react-style.svg?branch=master)](https://travis-ci.org/js-next/react-style)
[![Code Climate](https://codeclimate.com/github/js-next/react-style/badges/gpa.svg)](https://codeclimate.com/github/js-next/react-style)

React Style is an approach for styling [React][] components. It uses the same
syntax as `StyleSheet.create` from [React Native][].

Define styles using full power of JavaScript:

    var StyleSheet = require('react-style')

    var styles = StyleSheet.create({
        foo: {
          color: 'red',
          backgroundColor: 'white'
        }
    })

Style React components:

    var React = require('react')

    class HelloWorld extends React.Component{

      render() {
        var dynamicStyles = {color: this.props.color}
        return <div styles={[styles.foo, dynamicStyles]}>Hello, world!</div>
      }

    }

By default styles are applied to the DOM as inline styles.

## Extracting styles into CSS at build time

There's [React Style Webpack plugin][] which extends [Webpack][] with the
ability to extract styles from your application at build time. The result is a
`bundle.css` file which can be added to `<head>`.

Generated CSS class names are descriptive by default and minimized when using
`NODE_ENV=production`.

To make sure that the order of the `styles` property is maintained, React Style
uses a CSS overrides hack which results in the above example results in:

    .foo,.foo.foo1,.foo.foo1.foo2. (etc.)

By default an amount of 10 is used, but can be adjusted by setting the
`maxOverridesLength` property:

    var StyleSheet = require('react-style')
    StyleSheet.maxOverridesLength = 1;

Source Maps are supported, but only for the generated JavaScript.

## Syntax helpers for writing styles

There's [React Style syntax][] which allows you to write styles like this:

    var styles = StyleSheet.create`
      .foo {
        color: red;
        background-color: white;
      }
    `

And have it transformed into:

    var styles = StyleSheet.create({
      foo: {
        color: 'red',
        backgroundColor: 'white'
      }
    })

This syntax is consistent with [ES6 tagged template literal][es6-templ].

The syntax helpers are convenient when transitioning a large CSS
code base to React Style. It makes it possible to directly copy paste styles 
from your CSS and later refactor them into a more modular form.

Note that we only support classNames of 1 level deep.

## Support for media queries
Media queries are supported by React Style with the following syntax:

    var fooStyles = StyleSheet.create({
        bar: {
           color: 'green'
        },
        '@media screen and (min-width: 800px)': {
            bar: {
                color: 'purple'
            }
        }
    });

If you want to use media queries inside the `render` function, we recommend
using `window.matchMedia`.

## What's wrong with CSS/SCSS/less?
A lot, and @vjeux covered it pretty good in his presentation: [CSS in JS][css-in-js]

## Why isn't this included inside React.js yet?
See https://github.com/facebook/react/pull/2196

## Not supported CSS features

React Style does not support CSS selectors, pseudo-classes and CSS animation.
Mostly because we try to avoid implicit behaviour and want the user to make
layout decisions inside the `render()` function.

CSS selectors introduce implicit behaviour by not having a direct link with
the elements on which they're applied. Therefore there is no way of knowing
what the consequences are, and this easily leads to refactoring issues. Instead
you should be using plain JavaScript variables.

Classes with pseudo-classes have a higher precedence then classes with no
pseudo-classes, which results in issues if you want to override styling in
"higher-level" components. In some cases(`:before`, `after`, etc.) a component
is easily added, in others (`active`, `focus`, `hover`, etc) plain JavaScript
will do the trick. In all, you don't need CSS for this. In some cases though
you might want to use pseudo-classes (like styling a scrollbar) - which we do
support.

Animations inside CSS also introduce implicit behaviour, as CSS animations are
decoupled from logic. By being decoupled, the state of the component is split
between the component and the CSS animation. We however believe state should be
contained within a component. An example of solving this using JS is [React 
Magician][react-magician].

License
---
MIT

[Webpack]: https://webpack.github.io
[React]: https://facebook.github.io/react/
[React Style Webpack plugin]: https://github.com/js-next/react-style-webpack-plugin
[React Style syntax]: https://github.com/js-next/react-style-syntax
[es6-templ]: http://tc39wiki.calculist.org/es6/template-strings/
[css-in-js]: https://speakerdeck.com/vjeux/react-css-in-js
[react-magician]: https://github.com/SanderSpies/react-magician
[React Native]: http://facebook.github.io/react-native/docs/stylesheet.html#content

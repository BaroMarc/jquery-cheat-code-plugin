# jquery-cheat-code-plugin

*jquery-cheat-code-plugin* is a small jQuery plugin that defines the custom 'cheatCodeEntered' event. This event consists in a sequence of key
presses that are fully customizable, on any element of the DOM that the user can set.

Check out the [jsfiddle demo](http://jsfiddle.net/tsp5uLcw)!

## Usage

The plugin defaults to the Konami Code (up, up, down, down, left, right, left, right, B, A, Start), with the keys
mapped for the standard US keyboard and the sequence being listened on the whole document.

To include it on your project, you have to add one of these lines on the document ready handler:

```js
var code = new CheatCodeEventHandler();
var code = new CheatCodeEventHandler(params);
```

The first one creates a default 'cheatCodeEntered' event, and the second one has an argument 'params', that consists of an object with this possible elements:

- object : contains either the CSS selector or the actual DOM element of the one that listens for the event.
- sequence : contains an array of strings that represents the sequence of keys of the cheat code. Only keys that have mappings are allowed.
- mapping : contains an object literal that represents the mapping of the input values, such as '38 : up' or '40 : down'. The keys of the object are keyboard key codes and the values are strings that represent input values of the cheat code.

The class CheatCodeEventHandler provides with the following functions:

- cheatSequence()
Gets the array representing the cheat sequence.

- cheatSequence(sequence)
Sets the array representing the cheat sequence.

- inputMapping()
Gets the object literal representing the key mapping.

- inputMapping(mapping)
Sets the object literal representing the key mapping.

- currentState()
Gets the current state of the sequence, i.e. the number of keys pressed correctly in a row. This number is reseted every time the user makes a mistake.

- totalStates()
The total number of inputs that the cheat consists in.

## About

- Author: [Marc Cusso](https://github.com/CussoMarc)
- License: [MIT License](http://opensource.org/licenses/MIT)

# jquery-cheat-code-plugin
This is a small plugin that processes the custom 'cheatCodeEntered' event. This event consists in a sequence of key
presses that are fully customizable, on any element of the DOM that the user can set.

The default values are the Konami Code (up, up, down, down, left, right, left, right, B, A, Start), with the key
mapped on the standard US keyboard and the sequence being listened on the whole document.

If you want to include it on your project, you have to add one of these lines on the document ready handler:

var code = new CheatCodeEventHandler();

or

var code = new CheatCodeEventHandler(params);

or

var code = new CheatCodeEventHandler(element,[sequence], [mapping]);

The first one creates a default 'cheatCodeEntered' event, that listens for the Konami Code on the whole document with the standard US keyboard mapping.

The second one has an argument 'params', who is an object literal with this possible elements:

- object : contains either the CSS selector or the actual DOM element of the one that listens for the event.
- sequence : contains an array of strings that represents the sequence of keys of the cheat code. Only keys that have mappings are allowed.
- mapping : contains an object literal that represents the mapping of the input values, such as '38 : up' or '40 : down'. The keys of the object are keyboard key codes and the values are strings that represent input values of the cheat code.

Finally, the third call is exactly the same as the second, only using separate arguments instead of an object literal.

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

Sample event:

$(function(){
  var code = new CheatCodeEventHandler({object:'#input'});
  code.cheatSequence(['down', 'down', 'left', 'up', 'B']);

  $(document).on('cheatCodeEntered',function(){
    alert('Awesome cheat code library! Sequence = ' + code.cheatSequence());
  });
});

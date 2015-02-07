$(function(){
  var code = new CheatCodeEventHandler({object:'#input'});
  code.cheatSequence(['down', 'down', 'left', 'up', 'B']);

  $(document).on('cheatCodeEntered',function(){
    alert('Awesome cheat code library! Sequence = ' + code.cheatSequence());
  });
});

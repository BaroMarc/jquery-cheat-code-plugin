  function CheatCodeEventHandler(element){

    function CheatCodeController(){
      this.sequence = [
        'up',
        'up',
        'down',
        'down',
        'left',
        'right',
        'left',
        'right',
        'B',
        'A',
        'Start'
      ];

      this.mapping = {
        38 : 'up',
        40 : 'down',
        37 : 'left',
        39 : 'right',
        65 : 'A',
        66 : 'B',
        13 : 'Start'
      };

      this.state = 0;

      this.cheatOn = false;

      this.advanceState = function(keyPressed){
        this.cheatOn = false;
        var value = this.mapping[keyPressed];
        if(this.sequence[this.state++] == value){
          if(this.state == this.sequence.length){
            this.cheatOn = true;
            this.state = 0;
          }
        }
        else{
          this.state = 0;
        }
      };
    };

    this.cheatController = new CheatCodeController();

    function validateCheatSequence(sequence){

    }

    this.cheatSequence = function(sequence){
      if(!sequence) return this.cheatController.sequence;
      else{
        this.cheatController.sequence = sequence; //TODO validate sequence
        this.cheatController.state = 0;
        this.cheatController.cheatOn = false;
      }
    };

    this.inputMapping = function(mapping){
      if(!mapping) return this.cheatController.mapping;
      else{
        this.cheatController.mapping = mapping; //TODO validate mapping
        this.cheatController.state = 0;
        this.cheatController.cheatOn = false;
      }
    };

    if(element.mapping){
      this.inputMapping(element.mapping);
    }

    if(element.sequence){
      this.cheatSequence(element.sequence);
    }

    if(element.object){
      if(typeof element.object == 'string'){
        element.object = $(element.object);

      }
    }
    else if(!element){
      element.object = $(document);
    }
    else if(typeof element == 'string'){
      element.object = $(element);
    }

    var context = this;

    element.object.on('keyup',function(event){
      context.cheatController.advanceState(event.keyCode);
      if(context.cheatController.cheatOn) element.object.trigger('cheatCodeEntered');
    });
  }

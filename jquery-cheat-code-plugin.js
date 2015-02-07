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

    var context = this;

    this.inputMapping = function(mapping){
      if(!mapping) return this.cheatController.mapping;
      else{
        this.cheatController.mapping = mapping; //TODO validate mapping
        this.cheatController.state = 0;
        this.cheatController.cheatOn = false;
      }
    };

    function validateCheatSequence(sequence){
      var mapping = context.inputMapping();
      for(i=0;i<sequence.length;++i){
        var found = false;
        Object.keys(mapping).forEach(function (key) {
          var val = mapping[key];
          if(val == sequence[i]) found = true;
        });
        if(!found) return false;
      }
      return true;
    }

    this.cheatSequence = function(sequence){
      if(!sequence) return this.cheatController.sequence;
      else{
        if(validateCheatSequence(sequence)){
          this.cheatController.sequence = sequence;
          this.cheatController.state = 0;
          this.cheatController.cheatOn = false;
        }
        else throw(new Error('Invalid cheat sequence provided'));
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

    element.object.on('keyup',function(event){
      context.cheatController.advanceState(event.keyCode);
      if(context.cheatController.cheatOn) element.object.trigger('cheatCodeEntered');
    });
  }

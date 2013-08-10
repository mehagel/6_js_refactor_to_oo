$(document).ready(function() {
  var die = Die();
  die.init();
});

var Die = function(){
  var self = {
    rollSelector: '.roll',
    diceSelector: '.dice',
    dieHtml: '<div class="die">0</div>',
    dieSelector: '.die'
  };

  self.init = function(){
    $('.add').on('click',function(){
      addDie();
    });

    $(self.rollSelector).on('click', function(){
      rollDie();
    })
  };

  addDie = function(){
    $(self.diceSelector).append(self.dieHtml);
  };

  rollDie = function(){
    $(self.dieSelector).each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
  };

  return self;

};
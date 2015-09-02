(function(){
  var Game;
  Game = {
    init:function(){
      return $('#four_line .balls').click(function(){
        var cellToAdd, colNum, currentColor;
        colNum = this.dataset.colNum;
        currentColor = Game.colors[Game.currentPlayer];
        cellToAdd=$('.balls[data-col-num="' + colNum + '"][data-cell-type="none"]').last();
        cellToAdd[0].dataset.cellType = currentColor;
        cellToAdd.find('.slot').addClass(currentColor).addClassf('bounceInDown');
        return Game.currentPlayer = (Game.currentPlayer +1)%2;
      });
    },
    currentPlayer:0,
    colors:['green','red']
  };
  $(function() {
    return Game.init();
  });
}).call(this);
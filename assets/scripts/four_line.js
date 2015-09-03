(function(){
  var Game;
  Game = {
    init:function(){
      return $('#four_line .balls').click(function(){
      if(Game.running){
        var cellToAdd, colNum, currentColor,rowNum, hor_cellToCheck, ver_cellToCheck;
        colNum = this.dataset.colNum;
        currentColor = Game.colors[Game.currentPlayer];
        ver_cellToCheck=$('.balls[data-col-num="' + colNum + '"]');
        cellToAdd=$('.balls[data-col-num="' + colNum + '"][data-cell-type="none"]').last();
        hor_cellToCheck=cellToAdd[0].dataset.rowNum;
        cellToAdd[0].dataset.cellType = currentColor;
        cellToAdd.find('.slot').addClass(currentColor).addClass('bounceInDown');
        Game.check(hor_cellToCheck, ver_cellToCheck);
        return Game.currentPlayer = (Game.currentPlayer + 1 ) % 2;
    }  
      });
    
  },
    check: function(hor_cellToCheck, ver_cellToCheck){
      var i=0;
      var targetCellType = Game.colors[Game.currentPlayer];
      while (i<=3){
        if ((ver_cellToCheck[i].dataset.cellType == targetCellType) && (ver_cellToCheck[i+1].dataset.cellType == targetCellType) && (ver_cellToCheck[i+2].dataset.cellType == targetCellType) && (ver_cellToCheck[i+3].dataset.cellType == targetCellType)){
          Game.running=false;
          if(Game.currentPlayer==0)
                $('#four_line').prepend('<p>Player 1 wins</p>');
              else
                $('#four_line').prepend('<p>Player 2 wins</p>');
        }
        i+=1;
      }
    },
    currentPlayer:0,
    colors:['green','red'],
    running:true
  };
  $(function() {
    return Game.init();
  });
}).call(this);

window.onload = function () {
   $("#accordion").accordion();
   //$("p").hide(4000);
};

  $(function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  });

    $(function() {
    $( "#resizable" ).resizable();
  });

        $(function() {
    $( "#datepicker" ).datepicker();
  });

          $(function() {
    $( "#tabs" ).tabs();
  });
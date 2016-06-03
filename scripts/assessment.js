var clicks= 0;

$(document).ready(function(){
  // click for generateRow id
  $('#generateRow').on('click', function(){
    clicks++;
    console.log( 'generateRow clicked');
    // crete new container div
    var newDiv = document.createElement('div');
    // set class
    newDiv.className='container';
    // set id
    newDiv.id='row' + clicks;
    // create change button
    var newButton = document.createElement('button');
    newButton.textContent='change';
    newButton.className = 'change';
    // append to container
    newDiv.appendChild( newButton );
    $('body').append( newDiv );
    // set text for all p tags
    $('p').text( "info goes here" );
  });

  // click for all of 'change' class
  $(document).on('click', '.change', function(){
    // get parent
    var parent = $(this).parent();
    // get parent class
    var parentClass = parent.attr('class');
    // toggle class color
    var parentID = parent.attr('id');
    console.log( 'id of parent of button: ', parentID, ' class of parent of button: ', parentClass );
  });

});

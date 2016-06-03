var clicks= 0;

$(document).ready(function(){
  // click for generateRow id
  $('#generateRow').on('click', function(){
    clicks++;
    console.log( 'generateRow clicked');
    // crete new container div
    var newContainer = document.createElement('div');
    // set class
    newContainer.className='container';
    // set id
    newContainer.id='row' + clicks;
    // create change button
    var changeButton = document.createElement('button');
    changeButton.textContent='change';
    changeButton.className = 'change';
    // append to container
    newContainer.appendChild( changeButton );
    // create delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent='delete';
    deleteButton.className = 'delete';
    // append to container
    newContainer.appendChild( deleteButton );
    // create text output
    var clicksOutput = document.createElement('p');
    // append to container
    newContainer.appendChild( clicksOutput );
    // append container to body
    $('body').append( newContainer );
    // set text for all p tags
    $('p').text( clicks );
  });

  // click for all of 'change' class
  $(document).on('click', '.change', function(){
    // get parent
    var parent = $(this).parent();
    // get parent class
    var parentClass = parent.attr('class');
    // toggle class color
    if( parentClass == 'red'){
      // remove current class and add new class
      parent.removeClass().addClass('yellow');
      parent.css({ 'background-color': 'yellow' });
    }else{
      parent.removeClass().addClass('red');
      parent.css({ 'background-color': 'red' });
    }
  });

  // click for all with class delete
  $(document).on('click', '.delete', function(){
    // remove parent
    $(this).parent().remove();
  });
});

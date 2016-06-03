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
    newDiv.textContent = "div: " + clicks;

    // create delete button
    var newButton = document.createElement('button');
    newButton.textContent='change Ps';
    newButton.className = 'changePs';
    // append to container
    newDiv.appendChild( newButton );

    // create new paragraph tag
    var newParagraph = document.createElement('p');
    // append to this div
    newDiv.appendChild( newParagraph );

    // append container to body
    $('body').append( newDiv );
    // set text for all p tags

    $('p').text( clicks );
  });

  // click for all with class delete
  $(document).on('click', '.changePs', function(){
    // remove parent
    $(this).parent().remove();
  });
});

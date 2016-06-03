$(document).ready(function(){
  // click for generateRow id
  $('#generateRow').on('click', function(){
    console.log( 'generateRow clicked');
    // crete new container div
    var newDiv = document.createElement('div');
    // set class
    newDiv.className='container';
    // set id
    newDiv.id='rowDiv';
    // create change button
    var newButton = document.createElement('button');
    newButton.textContent='button inside div';
    newButton.className = 'buttonClass';
    // append to container
    newDiv.appendChild( newButton );
    // create text output paragraph
    var newParagraph = document.createElement('p');
    // append to container
    newDiv.appendChild( newParagraph );
    // append container to body
    $('body').append( newDiv );
    // set text for all p tags
    $('p').text( "WE ARE THE HIVE MIND..." );
  });

});

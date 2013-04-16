var quote_path = 'http://iam.colum.edu/students/ashley.faulkner/new/quotes/';
var quotes = ['al', 'alfred', 'bill', 'charles', 'douglas', 'ellen', 'isaac'];

$('#new-quote').click(function(e) {
  e.preventDefault();


  // generate a random number between 0 and quotes.length - 1
  // use the googles!
  var random_number=Math.floor(Math.random()*7); // replace with an actual random number

  // build the full URL to the random quote using quote_path, the quoter name
  // at the random position in quotes, and a '.html' suffix
  var new_quote = quote_path + quotes[random_number] + '.html'; // replace with the path to the random quote

  // make your AJAX call to new_quote here
  // the success function should use a jQuery effect (slide or fade)
  // to hide the old content, then that same effect to show the content

    $.ajax({
    url: new_quote,
    dataType:'html',
    type:'GET',
    success: function(data){
      var show_quote = $(data);

      $('#quote-wrapper').slideUp('normal', function() {
        $(this).empty();

        $(this).append(show_quote);

    
        $(this).slideDown('normal');

  });
}
});
});
  
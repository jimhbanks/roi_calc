
  $(document).on('input', '#slider', function() {
    

    $('#range').html( $(this).val() );

    //this is your value to be calculated
    var value = $(this).val();

    $('#cost').html(value);
    $('#saving').html(thirtyPercentOf(value));

   

   function thirtyPercentOf(num){
      var newNum = (num/10) * 3

      return newNum;
    }
  });
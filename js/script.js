// length of 'arr_question' object
var arr_length = Object.keys(arr_question).length;

// keys of 'arr_question' object
var arr_keys = Object.keys(arr_question);

// values of 'arr_question' object
var arr_values = Object.values(arr_question);

// split values
for (val_split in arr_values){
  // arr_val_split is an Array for storing each values
  var arr_val_split = arr_values[val_split].split(',');
}

// Start funtction(the flushcards will start when Shift + Enter are pressed)
$(window).keydown(function startCards(e){
  var question_key;
       if(e.shiftKey && e.keyCode == 13) {

         // show prefix in quetion area
         question_key = arr_keys[ (Math.floor( Math.random() * arr_keys.length ))-1 ] ;
         $('#question').text(question_key);
         // focus on answer box
         $('#user_input').focus();
         //return question value
         console.log(question_key);
       };
});
/* add function to count other cards left and also make same prefix won't appear more than once.*/


// submit and compare the answer function
function submit_answer(){
    var user_input = document.getElementById('user_input').value;
    var question_key = startCards();
    if(question_key == true) {
        console.log(2);
    }else{
      $('#answer').text("Please input your answer.");
    }
    return false;
  };

//$('#button_submit').on('click',submit_answer);
// || $('#button_submit').click()//
$(window).keydown(function(e){
  if(e.ctrlKey && e.keyCode == 13) {
    submit_answer();
  }

});

// prefix...https://en.wikipedia.org/wiki/Prefix
// phrasal verbs...https://www.englishclub.com/vocabulary/phrasal-verbs-list.htm
// how to use json in JS
// https://qiita.com/1mada/items/9a48f7053a6016b5fd5a
//https://stackoverflow.com/questions/16288388/how-to-use-a-javascript-to-load-and-parse-a-static-json-file-in-the-server




// Get the length of prefix
var arr_pref = [];
for ( i in prefix ){
  arr_pref.push(i);
}

// Global variables
var question_key;
var input_html;


// Start function
function startCards(){
  var user_input_area = document.getElementById("user_input_area");
  var answer = document.getElementById("answer");
  
         // hide h1 and start button for mobile
         $('h1').addClass('start_hide');
         $('#button_start').addClass('start_hide_button');
         
         // show prefix in quetion area
         question_key = prefix["p" + (Math.floor(Math.random() * arr_pref.length) + 1)];
         $('#question').text(question_key.pref);

         // push <input> tags into #user_input_area according to how many meanings the prefix has
         if (Array.isArray(question_key.meaning) == false){
		input_html = '<input type="text" id="user_input" class="user_input" placeholder="Your answer here." style="display:block;width:100% !important;"></input>';
	        user_input_area.insertAdjacentHTML('afterbegin', input_html);
         } else {
           for ( i = 0; i < question_key.meaning.length; i++){
        	   input_html = '<input type="text" class="user_input input_multi"></input>';
        	   user_input_area.insertAdjacentHTML('afterbegin', input_html);
           }
           
         }
         
         $('.user_input:first-child').focus();

         //return question value         
         return question_key;
       };
// end of function startCards()

// function to compare user's input and answer
function checkAnswer(){

      var user_input_area = document.getElementById("user_input_area");
      var answer = document.getElementById("answer");
      var input_check;

      // for single user input
      if(user_input_area.children.length == 1){
      var user_input_single = document.getElementById('user_input').value.toLowerCase();
      }

      // compare single user input value and the answer
      if(user_input_single == question_key.meaning){
        input_check = true;
      } else {
        input_check = false;
      }

      // put user's multiple inputs into an array and make those into lower case
      var arr_input_raw = new Array();
      var user_input_class = document.querySelectorAll('.user_input');
      var user_input_raw;
      for (user_input_nodes of user_input_class){
        user_input_raw = user_input_nodes.value.toLowerCase();
        arr_input_raw.push(user_input_raw);
      }

      // compare user's input values and answers 
      if(Array.isArray(question_key.meaning) == true ){
        var i = 0;
        while( i < question_key.meaning.length ){          
          if(arr_input_raw.indexOf(question_key.meaning[i]) > -1 ){
            i++;
            input_check = true;
          } else if(arr_input_raw.length < question_key.meaning.length){
            input_check = false;
            break;
          } else {
            input_check = false;
            break;
          }         
        }
      }

      // Return whether user's inputs are correct or not
        if (input_check){
          answer.innerHTML = 'Correct!';
          answer.classList.add('answer_correct');

          //remove class .answer_wrong
          if(answer.classList.contains('answer_wrong')){
            answer.classList.remove('answer_wrong');
          }


        } else if(input_check != true ) {
          answer.innerText = 'Wrong! Try again.' ;
          answer.classList.add('answer_wrong');
          $('.user_input:first-child').focus();

          // user_input = "";

          if(answer.classList.contains('answer_correct')){
            answer.classList.remove('answer_correct');
          }
        }
}
// end of function checkAnswer()

// call checkAnswer() function when ctrl + enter are pressed 
$(window).keydown(function(e){
  if(e.ctrlKey && e.keyCode == 13){
    checkAnswer();
  }
})


//proceed next card if the user's answer is correct
$(window).keydown(function nextCard(e){
  var user_input_area = document.getElementById("user_input_area");
  var user_input_class = document.querySelectorAll('.user_input');
  if(answer.classList　== 'answer_correct'){
    if(e.ctrlKey && e.keyCode == 13){
    // for ( i=0 ; i < user_input_class.length; i++){
    //   user_input_class[i].value = "";
    // }
      user_input_area.textContent = null;
    
      startCards();      
    }
  }
  
})

// show answer when "show_answer" button is clicked, or Shift + Enter are pressed 
function showAnswer(){
	var answer = document.getElementById("answer");
	answer.innerText = question_key.meaning;
          if(answer.classList.contains('answer_correct')){
            answer.classList.remove('answer_correct');
          }
          if(answer.classList.contains('answer_wrong')){
            answer.classList.remove('answer_wrong');
          }
          $('.user_input:first-child').focus();
}

$(window).keydown(function errorAnswer(e){
          if(e.shiftKey && e.keyCode == 13){
            showAnswer();
      }
})


// action when user submitted their answer     
// $(window).keydown(function errorAnswer(e){
//           if((e.ctrlKey && e.keyCode == 13) && $('#question').value == "" ){
//             var err_txt = 'Please hit \"Start\" button.';
//               if( typeof question_key == "undefined" ){
//                  document.getElementById("answer").innerText = err_txt ; 
//              } else {
//                 checkAnswer();
//              }
//       }
// })

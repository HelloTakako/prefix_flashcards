var prefix = {
    p1 : {
      pref : 'a-',
      meaning:'not'
    },
    p2 : {
      pref : 'acro-',
      meaning : 'high'
    },
    p3 : {
      pref : 'allo-',
      meaning : 'other'
    },
    // p4 : {
    //   pref : 'alter-',
    //   meaning : 'at least secondary'
    // },
    // p5 : {
    //   pref : 'an-',
    //   meaning : 'additional'
    // },
    // p6 : {
    //   pref : 'ante-',
    //   meaning : 'prior'
    // },
    // p7 : {
    //   pref : 'anti-',
    //   meaning : 'opposite'
    // },
    // p8 : {
    //   pref : 'auto-',
    //   meaning : 'by oneself or itself'
    // },
    // p9 : {
    //   pref : 'bi-',
    //   meaning : 'two'
    // },
    // p10 : {
    //   pref : 'co-',
    //   meaning : 'together'
    // },
    // p11 : {
    //   pref : 'contra-',
    //   meaning : ['below','against']
    // },
    // p12 : {
    //   pref : 'counter-',
    //   meaning : 'against'
    // },
    // p13 : {
    //   pref : 'de-',
    //   meaning : ['negative','remove']
    // },
    // p14 : {
    //   pref : 'di-',
    //   meaning : 'two'
    // },
    // p15 : {
    //   pref : 'dis-',
    //   meaning : ['negative','remove']
    // },
    // p16 : {
    //   pref : 'down-',
    //   meaning : ['down','reduce']
    // },
    // p17 : {
    //   pref : 'dys-',
    //   meaning : ['negative','badly','wrongly']
    // },
    // p18 : {
    //   pref : 'epi-',
    //   meaning : ['upon addition','above']
    // },
    // p19 : {
    //   pref : 'extra-',
    //   meaning : ['to a greater extent','beyond']
    // },
    // p20 : {
    //   pref : 'fore-',
    //   meaning : 'before'
    // },
    // p21 : {
    //   pref : 'hemi-',
    //   meaning : 'half'
    // },
    // p22 : {
    //   pref : 'hexa-',
    //   meaning : 'six'
    // },
    // p23 : {
    //   pref : 'hyper-',
    //   meaning : 'beyond'
    // },
    // p24 : {
    //   pref : 'ig-',
    //   meaning : 'not'
    // },
    // p25 : {
    //   pref : 'il-',
    //   meaning : ['within','toward','marginal or not']
    // },
    // p26 : {
    //   pref : 'im-',
    //   meaning : ['within','toward','marginal or not']
    // },
    // p27 : {
    //   pref : 'in-',
    //   meaning : ['within','toward','marginal or not']
    // }
  }


// Get the length of prefix
var arr_pref = [];
for ( i in prefix ){
  arr_pref.push(i);
}

// Global variables
var question_key;
var next_card = "";



// Start function
function startCards(){
  var answer = document.getElementById("answer");
         // hide h1 and start button for mobile
         $('h1').addClass('start_hide');
         $('#button_start').addClass('start_hide');
         // show prefix in quetion area
         question_key = prefix["p" + (Math.floor(Math.random() * arr_pref.length) + 1)];
         $('#question').text(question_key.pref);

         // focus on answer box and clear its value if value exists
         if ($('#user_input').value != null){
         $('#user_input').value = "";
         }
         
         $('#user_input').focus();



         //return question value         
         return question_key;
       };
// end of function startCards()

// function to compare user's input and answer
function checkAnswer(){
      var user_input = document.getElementById('user_input');
      var answer = document.getElementById("answer");
      // if ( typeof user_input.value == null ){
      //   answer.innerText = 'Please enter your answer.' ;
      // } else {
        if (user_input.value == question_key.meaning && user_input.value !== "" ){
          answer.innerHTML = 'Correct! "Ctrl" + "Enter" to next card.' ;
          answer.classList.add('answer_correct');
          console.log(123);

          //remove class .answer_wrong
          if(answer.classList.contains('answer_wrong')){
            answer.classList.remove('answer_wrong');
          }

        } else if(user_input.value != question_key.meaning && user_input.value !== "") {
          answer.innerText = 'Your answer is wrong! Try again.' ;
          answer.classList.add('answer_wrong');
          $('#user_input').focus();
          user_input.value = "";

          if(answer.classList.contains('answer_correct')){
            answer.classList.remove('answer_correct');
          }
        }
    // }
}
// end of function checkAnswer()
$(window).keydown(function(e){
  if(e.ctrlKey && e.keyCode == 13){
    checkAnswer();
    startCards();

  }
})


//proceed next card if the user's answer is correct
// $(window).keydown(function nextCard(e){
//   if(answer.classList　== 'answer_correct'){
//     if(e.ctrlKey && e.keyCode == 13){                      
//       startCards();
//       answer.classList.remove('answer_correct');
//       answer.classList.remove('answer_wrong');
//       user_input.value = "";
//       answer.innerText = "";
//     }
//   }
// })

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
          $('#user_input').focus();
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

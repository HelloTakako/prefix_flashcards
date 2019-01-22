var prefix = {
    s1 : {
      pref : 'a-',
      meaning:'not'
    },
    s2 : {
      pref : 'acro-',
      meaning : 'high'
    },
    s3 : {
      pref : 'allo-',
      meaning : 'other'
    },
    s4 : {
      pref : 'contra-',
      meaning : ['below','against']
    }
  }

// Get the length of prefix
var arr_pref = [];
for ( i in prefix ){
  arr_pref.push(i);
}

// Start function
var question_key;

function startCards(){
         // show prefix in quetion area
         question_key = prefix["s" + (Math.floor(Math.random() * arr_pref.length) + 1)];
         $('#question').text(question_key.pref);

         // focus on answer box
         $('#user_input').focus();

         //return question value         
         return question_key;
       };


// function to compare user's input and answer
function checkAnswer(){
    var user_input = document.getElementById('user_input');
    var answer = document.getElementById("answer");
      if ( typeof user_input.value == 'undefined' ){
        answer.innerText = 'Please enter your answer.' ;
      } else {
        if (user_input.value == question_key.meaning ){
          answer.innerHTML = 'Correct! "Ctrl" + "Enter" to next card.' ;
          answer.classList.add('answer_correct');
          if(answer.classList.contains('answer_wrong')){
            answer.classList.remove('answer_wrong');
          }

        } else if(user_input.value != question_key.meaning || user_input.value != null ) {
          answer.innerText = 'Your answer is wrong! Try again.' ;
          answer.classList.add('answer_wrong');
          if(answer.classList.contains('answer_correct')){
            answer.classList.remove('answer_correct');
          }
        }            
    }
}

// show answer when "show_answer" button is clicked, or Shift + Enter are pressed 
function showAnswer(){

}


// action when user submitted their answer     
$(window).keydown(function startCards(e){
          if(e.ctrlKey && e.keyCode == 13){
            var err_txt = 'Please hit \"Shift\" + \"Enter\".';
              if( typeof question_key == "undefined" ){
                 document.getElementById("answer").innerText = err_txt ; 
             } else {
                checkAnswer();
             }
      }
})

// show next card and clear values of user input and answer field
         var user_input = document.getElementById('user_input');
         var answer = document.getElementById("answer");

          user_input.value = "";
          answer.innerText = "";





// Start funtction(the flushcards will start when Shift + Enter are pressed)
// var question_key;
// $(window).keydown(function startCards(e){
//        if(e.shiftKey && e.keyCode == 13) {

//          // show prefix in quetion area
//          question_key = prefix["s" + (Math.floor(Math.random() * arr_pref.length) + 1)];
//          $('#question').text(question_key.pref);

//          // focus on answer box
//          $('#user_input').focus();
//        };

//        //return question value         
//        return question_key;
// });

// read suffix.json
// jQueryでjsonデータを扱ってみる【入門編】
// $(document).ready(function(){
//   $.getJSON("js/suffix.json", function(data){
//     for(var i in data){
//       $('#question').innerHTML = i;
//     }
//   });
// });

// https://qiita.com/chiiia12/items/9efec29e6b360e3cd38a
// var httpObj = new XMLHttpRequest();
// httpObj.open("get", "suffix.json", true);
//  httpObj.onload = function(){
//                 var myData = JSON.parse(this.responseText);
//                 var txt = "";
//                 for (var i=0; i<myData.length; i++){
//                    var option = document.createElement("option");
//                     option.innerText = myData[i].name;
//                     option.value=myData[i].value;
//                     document.getElementById("question").appendChild(option); 
//                 }

//             }
//        httpObj.send(null);

// // length of 'arr_question' object
// var arr_length = Object.keys(arr_question).length;

// // keys of 'arr_question' object
// var arr_keys = Object.keys(arr_question);

// // values of 'arr_question' object
// var arr_values = Object.values(arr_question);

// // split values
// for (val_split in arr_values){
//   // arr_val_split is an Array for storing each values
//   var arr_val_split = arr_values[val_split].split(',');
// }

// // Start funtction(the flushcards will start when Shift + Enter are pressed)
// $(window).keydown(function startCards(e){
//   var question_key;
//        if(e.shiftKey && e.keyCode == 13) {

//          // show prefix in quetion area
//          question_key = arr_keys[ (Math.floor( Math.random() * arr_keys.length ))-1 ] ;
//          $('#question').text(question_key);
//          // focus on answer box
//          $('#user_input').focus();
//          //return question value
//          console.log(question_key);
//        };
// });
// /* add function to count other cards left and also make same prefix won't appear more than once.*/


// // submit and compare the answer function
// function submit_answer(){
//     var user_input = document.getElementById('user_input').value;
//     var question_key = startCards();
//     if(question_key == true) {
//         console.log(2);
//     }else{
//       $('#answer').text("Please input your answer.");
//     }
//     return false;
//   };

// //$('#button_submit').on('click',submit_answer);
// // || $('#button_submit').click()//
// $(window).keydown(function(e){
//   if(e.ctrlKey && e.keyCode == 13) {
//     submit_answer();
//   }

// });

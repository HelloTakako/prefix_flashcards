//https://en.wikipedia.org/wiki/Prefix
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
    p4 : {
      pref : 'alter-',
      meaning : 'at least secondary'
    },
    p5 : {
      pref : 'an-',
      meaning : 'additional'
    },
    p6 : {
      pref : 'ante-',
      meaning : 'prior'
    },
    p7 : {
      pref : 'anti-',
      meaning : 'opposite'
    },
    p8 : {
      pref : 'auto-',
      meaning : 'by oneself or itself'
    },
    p9 : {
      pref : 'bi-',
      meaning : 'two'
    },
    p10 : {
      pref : 'co-',
      meaning : 'together'
    },
    p11 : {
      pref : 'contra-',
      meaning : ['below','against']
    },
    p12 : {
      pref : 'counter-',
      meaning : 'against'
    },
    p13 : {
      pref : 'de-',
      meaning : ['negative','remove']
    },
    p14 : {
      pref : 'di-',
      meaning : 'two'
    },
    p15 : {
      pref : 'dis-',
      meaning : ['negative','remove']
    },
    p16 : {
      pref : 'down-',
      meaning : ['down','reduce']
    },
    p17 : {
      pref : 'dys-',
      meaning : ['negative','badly','wrongly']
    },
    p18 : {
      pref : 'epi-',
      meaning : ['upon addition','above']
    },
    p19 : {
      pref : 'extra-',
      meaning : ['to a greater extent','beyond']
    },
    p20 : {
      pref : 'fore-',
      meaning : 'before'
    },
    p21 : {
      pref : 'hemi-',
      meaning : 'half'
    },
    p22 : {
      pref : 'hexa-',
      meaning : 'six'
    },
    p23 : {
      pref : 'hyper-',
      meaning : 'beyond'
    },
    p24 : {
        pref : 'hypo-',
        meaning : ['marginal','not enough']
    },
    p25 : {
      pref : 'ig-(before gn- or n-)',
      meaning : 'not'
    },
    p26 : {
      pref : 'il-(before l-)',
      meaning : ['within','toward','marginal or not']
    },
    p27 : {
        pref : 'im-(before b-, m-, or p-)',
        meaning : ['within','toward','marginal or not']
    },
    p28 : {
        pref : 'in-(before most letters)',
        meaning : ['within','toward','marginal or not']
    },
    p29 : {
        pref : 'infra-',
        meaning : 'below'
    },
    p30 : {
        pref : 'inter-',
        meaning : 'between'
    },
    p31 : {
        pref : 'intra-',
        meaning : 'within'
    },
    p32 : {
        pref : 'ir-(before r-)',
        meaning : ['within','toward','marginal or not']
    },
    p33 : {
        pref : 'macro-',
        meaning : ['large-scale','exceptionally prominent']
    },
    p34 : {
        pref : 'mal-',
        meaning : ['unpleasant','not']
    },
    p35 : {
        pref : 'maxi-',
        meaning : ['big','as big as possible']
    },
    p36 : {
        pref : 'meso-',
        meaning : 'middle'
    },
    p37 : {
        pref : 'meta-',
        meaning : 'self-referential'
    },
    p38 : {
        pref : 'micro-',
        meaning : 'small-scale'
    },
    p39 : {
        pref : 'mid-',
        meaning : 'middle'
    },
    p40 : {
        pref : 'mini-',
        meaning : 'small'
    },
    p41 : {
        pref : 'mis-',
        meaning : ['bad','wrong']
    },
    p42 : {
        pref : 'mono-',
        meaning : 'one'
    },
    p43 : {
        pref : 'multi-',
        meaning : ['many','more than one']
    },
    p44 : {
        pref : 'non-',
        meaning : ['no','not']
    },
    p45 : {
        pref : 'octo-',
        meaning : 'eight'
    },
    p46 : {
        pref : 'over-',
        meaning : ['excess','too much','on top']
    },
    p47 : {
        pref : 'pan-',
        meaning : 'all'
    },
    p48 : {
        pref : 'para-',
        meaning : ['beside','beyond','related to','altered']
    },
    p49 : {
        pref : 'penta-',
        meaning : 'five'
    },
    p50 : {
        pref : 'per-',
        meaning : ['through','throughout']
    },
    p51 : {
        pref : 'peri-',
        meaning : 'around'
    },
    p52 : {
        pref : 'poly-',
        meaning : 'many'
    },
    p53 : {
        pref : 'post-',
        meaning : 'after'
    },
    p54 : {
        pref : 'pre-',
        meaning : ['before','already']
    },
    p55 : {
        pref : 'pro-',
        meaning : ['on behalf of','before']
    },
    p56 : {
        pref : 'proto-',
        meaning : ['first','primitive','precursor']
    },
    p57 : {
        pref : 'pseudo-',
        meaning : ['false','specious']
    },
    p58 : {
        pref : 'quadri-',
        meaning : 'four'
    },
    p59 : {
        pref : 'quasi-',
        meaning : ['somewhat','resembling']
    },
    p60 : {
        pref : 're-',
        meaning : 'again'
    },
    p61 : {
        pref : 'self-',
        meaning : 'acting on/by oneself'
    },
    p62 : {
        pref : 'semi-',
        meaning : ['partial','somewhat','half']
    },
    p63 : {
        pref : 'sub-',
        meaning : 'below'
    },
    p64 : {
        pref : 'super-',
        meaning : ['above','more than','great']
    },
    p65 : {
        pref : 'supra-',
        meaning : 'above'
    },
    p66 : {
        pref : 'tetra-',
        meaning : 'four'
    },
    p67 : {
        pref : 'trans-',
        meaning : ['across','connecting']
    },
    p68 : {
        pref : 'tri-',
        meaning : 'three'
    },
    p69 : {
        pref : 'ultra-',
        meaning : ['beyond','extremely']
    },
    p70 : {
        pref : 'un-',
        meaning : ['not','remove','opposite']
    },
    p71 : {
        pref : 'under-',
        meaning : ['beneath','not enough']
    },
    p72 : {
        pref : 'up-',
        meaning : ['up','increase']
    },
    p73 : {
        pref : 'xeno-',
        meaning : 'foreign'
    }
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
      var user_input_raw = document.getElementById('user_input').value;
      var user_input = user_input_raw.toLowerCase();
      var answer = document.getElementById("answer");
      // if ( typeof user_input.value == null ){
      //   answer.innerText = 'Please enter your answer.' ;
      // } else {
        if (user_input == question_key.meaning){
          answer.innerHTML = 'Correct!';
          answer.classList.add('answer_correct');

          //remove class .answer_wrong
          if(answer.classList.contains('answer_wrong')){
            answer.classList.remove('answer_wrong');
          }


        } else if(user_input != question_key.meaning && user_input !== "") {
          answer.innerText = 'Wrong! Try again.' ;
          answer.classList.add('answer_wrong');
          $('#user_input').focus();
          user_input = "";

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
  }
})


//proceed next card if the user's answer is correct
$(window).keydown(function nextCard(e){
  if(answer.classList　== 'answer_correct'){
    if(e.ctrlKey && e.keyCode == 13){                      
      user_input.value = "";
      startCards();
      
      // answer.innerText = "";
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

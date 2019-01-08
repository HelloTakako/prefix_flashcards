// question object
var arr_question={
  'a-':'not', 'acro-':'high', 'allo-':'other', 'alter-':'at least secondary', 'an-':'additional', 'ante-':'prior', 'anti-':'opposite', 'auto-':'by oneself or itself', 'bi-':'two', 'co-':'together', 'contra-':'below, against', 'counter-':'against', 'de-':'negative, remove', 'di-':'two', 'dis-':'negative, remove', 'down-':'down, reduce', 'dys-':'negative, badly, wrongly', 'epi-':'upon addition, above', 'extra-':'to a greater extent, beyond', 'fore-':'before', 'hemi-':'half', 'hexa-':'six', 'hyper-':'beyond', 'hypo-':'marginal,not enough', 'ig-':'not', 'a-':'not', 'a-':'not', 'a-':'not', 'il-':'within, toward, marginal or not', 'im-':'within, toward, marginal or not', 'in-':'within, toward, marginal or not', 'infra-':'below', 'inter-':'between', 'intra-':'within', 'ir-':'within,toward,marginal or not', 'macro-':'large-scale,exceptionally prominent', 'mal-':'unpleasant,not', 'maxi-':'big,as big as possible', 'meso-':'middle', 'meta-':'self-referential', 'micro-':'small-scale', 'mid-':'middle', 'mini-':'small', 'mis-':'bad,wrong', 'mono-':'one', 'multi-':'many,more than one', 'non-':'no,not', 'octo-':'eight', 'over-':'excess,too much,on top', 'pan-':'all', 'para-':'beside,beyond,related to,altered', 'penta-':'five', 'per-':'through,throughout', 'peri-':'around', 'poly-':'many', 'post-':'after', 'pre-':'before,already', 'pro-':'on behalf of,before', 'proto-':'first,primitive,precursor', 'pseudo-':'false,specious', 'quadri-':'four', 'quasi-':'somewhat,resembling', 're-':'again', 'self-':'[acting on or by] oneself', 'semi-':'partial,somewhat,half', 'sub-':'below', 'super-':'above,more than,great', 'supra-':'above', 'tetra-':'four', 'trans-':'across,connecting', 'tri-':'three', 'ultra-':'beyond,extremely', 'un-':'not,remove,opposite', 'under-':'beneath,not enough', 'up-':'up,increase', 'xeno-':'foreign'
};
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
  // console for debugging
  console.log(arr_val_split);
}

// Start funtction(the flushcards will start when Shift + Enter are pressed)
$(window).keydown(function startCards(e){
       if(e.shiftKey && e.keyCode == 13) {

         // show prefix in quetion area
         var question_keys = arr_keys[ Math.floor( Math.random() * arr_keys.length ) ] ;
         $('#question').text(question_keys);

         // focus on answer box
         $('#user_input').focus();
       };
       //return question value
       return question_keys;
});
/* wanna add function to count other cards left and also make same prefix won't appear more than once.*/


// submit and compare the answer function
function submit_answer(){
    var user_input = document.getElementById('user_input').value;
    var question_keys = startCards();
    if(question_keys == true) {
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

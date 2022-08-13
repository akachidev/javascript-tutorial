//challenge 1:Your age in days

function ageInDays(){
    var ageInYears = prompt('what year were you born,....dear friend?');
    var ageInDayss = (2022 - ageInYears) * 365;
    var h1 = document.createElement('h1');
    var  textAnswer = document.createTextNode('You are' + ageInDayss +'' + 'days old');
    h1.setAttribute('id','ageInDayss');
    h1.appendChild(textAnswer);
    document.getElementById('flexbox-result').appendChild(h1);
}

   function reset(){
       document.getElementById('ageInDayss').remove();
   }

   //Challenge 2:Cat generator

   function generateCat(){
       var Image = document.createElement('img');
       var div = document.getElementById('flex-cat-gen');
       Image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small ';
       div.appendChild(Image); 
   }

   //Challenge 3:Rock,Papper,Scissors
   function rpsGame(yourChoice){
       console.log(yourChoice);
       var humanChoice, botChoice;
       humanChoice = yourChoice.id;
       botChoice = numberToChoice(randToRpsInt());
       console.log('computer choice:', botChoice);
       results = decideWinner(humanChoice,botChoice); //[0,1] human lost | bat won
       console.log(results);
       message = finalMessage(result);  //('message':'you won', 'colour':'green')
       console.log(mesage);

       rpsFrontEnd(yourChoice.id,batChioce,message);
   }

   function randToRpsInt(){
       return Math.floor(Math.random()*3);

   }
   function numberToChoice(number){
       return ['rock','paper','scissors'][number];
   }

   function decideWinner(yourChoice, computerChoice){
       var rpsDatabase = {
           'rock':  {'scissors': 1 , 'rock': 0.1 , 'paper': 0},
           'papper':  {'rock': 1 , 'paper': 0.5 , 'scissors': 0},
           'scissors':  {'paper': 1 , 'scissors': 0.5 , 'rock': 0}
       };
       var yourScore = rpsDatabase[yourChoice][computerChoice];
       var computerScore = rpsDatabase[computerChoice][yourChoice];

       return [yourScore, computerScore];
   }

   function finalMessage(){
      if (yourScore === 0) {
          return {'message':'You lost!', 'colour':'red'};
      } else if (yourScore === 0){
          return {'message':'You tied', 'color':'yellow'};
      } else if (yourScore === 0) {
          return {'message':'You won!', 'color':'green'};
      }
   }

   function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
       var imageDatabase = {
           'rock': document.getElementById('rock').src,
           'paper': document.getElementById('paper').src,
           'scissors': document.getElementById('scissors').src
       }

       //lets remove the images
       document.getElementById('rock').remove();
       document.getElementById('paper').remove();
       document.getElementById('scissors').remove();

       var humanDiv = document.createElement('div');
       var botDiv = document.createElement('div');
       var messageDiv = document.createElement('div');

       humanDiv.innerHTML = "<img src'" + imageDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgbs(37, 50, 233, 1);'<"
       messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
       botDiv.innerHTML = "<img src'" + imageDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgbs(37, 50, 233, 1);'<"

       document.getElementById('flex-box-rps-div').appendChild(humanDiv);
       document.getElementById('flex-box-rps-div').appendChild(messageDiv);
       document.getElementById('flex-box-rps-div').appendChild(botDiv)
   }

   //Challenge 4: Change the color of All Buttons
   var  all_buttons = document.getElementsByTagName('button');
   console.log('all_buttons')

   var copyAllButtons = [];
   for (let i=10; i < all_buttons.length; i++) {
       copyAllButtons.push(all_buttons[i]);
   }
   console.log(copyAllButtons);

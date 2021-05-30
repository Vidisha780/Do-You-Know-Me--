var readlinesync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var trackScores = [];
const error = chalk.bold.red;
const right = chalk.bold.green;
var questions = [
  question1 = {
   question : "Q1.Where do I live?\n",
    answer : "Pune"
  },
  question2 = {
   question : "Q2. Do I like watching standups?\n",
    answer : "Yes"
  },
  question3 ={
    question : "3. Which month is my birthday?\n",
    answer : "August"
  },
  question4 ={
    question : "Q4. What is my favourite sport?\n",
    answer : "Cricket"
  },
question5 ={
    question : "Q5. Am I a sunset or a sunrise person?\n",
    answer : "Sunset"
  },
question5 = {
    question : "Q6. Do I sleep early at night?\n",
    answer : "No"
}  

]
function play(){
for(var i =0; i < questions.length; i++)
{
  var currQuestion = questions[i];
  var ans = readlinesync.question(chalk.yellowBright(currQuestion.question));
  if(ans.toLowerCase() === currQuestion.answer.toLowerCase())
  {
    score = score + 5;
    console.log("You entered ",ans.toUpperCase());
    console.log(right("Yay, you are right!"));
  }
  else
  {
    console.log("You entered ",ans.toUpperCase());
    console.log(error("Oops, you are wrong!"));
  }
  console.log(chalk.bgMagenta("Your score is ",score));
  console.log(chalk.yellow("**************************"));
}
}

function maxScore()
{
  return Math.max(...trackScores);
}

function playGame()
{
  var doPlay = 'y';
  while(doPlay === 'y' || doPlay === 'Y')
  {   
    score = 0;
    play();
    console.log(chalk.bgCyan.bold("Your final score is ",score, "!!!"));
    console.log(chalk.yellow("**************************"));
    trackScores.push(score);
    console.log("Your max score is ",maxScore());
    doPlay = readlinesync.question("Do you want to play again?y/n?\n");
    
  }
}
var username = readlinesync.question(chalk.bold.green("Welcome to the quiz - Do you know Vidisha? \nWhat's your name\n"))
console.log(chalk.bold.red("Hi ",username, "! \nLet's check the rules before we begin the game."))
console.log(chalk.bold.red("This is a fun game where you answer a few questions about Vidisha. \nLet's see how well do you know your friend.\n1.The correct answer will give you 5 points.\n2.The wrong answer will give you 0 points.\n3.You can type your answer and press enter. Please dont give spaces within answer.\nLets begin the fun game!!!"));
console.log(chalk.yellow("**************************"));
playGame();
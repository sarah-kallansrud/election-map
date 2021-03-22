var makeCandidate = function(individual)
{
  var politician = {};
  politician.name = individual;
  politician.electionResults = null;
  politician.totalVotes = 0;
  
  politician.announceCandidate = function()
  {
    console.log(this.name + " is running for president.");
  };
  
  politician.announceCandidate();
  
  politician.addTheVotes = function(){
 
    this.totalVotes = 0;
    
    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
   
   
  };

  
  return politician;
  
};

var candidate1 = makeCandidate("Loren Peterson");
var candidate2 = makeCandidate("Blanca Ray");
var winner = "?";

candidate1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15,2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

candidate2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];


candidate1.electionResults[9] = 1;
candidate2.electionResults[9] = 28;

candidate1.electionResults[4] = 17;
candidate2.electionResults[4] = 38;

candidate1.electionResults[43] = 11;
candidate2.electionResults[43] = 27;

console.log(candidate1.electionResults);
console.log(candidate2.electionResults);
candidate1.addTheVotes();
candidate2.addTheVotes();
console.log(candidate1.totalVotes);
console.log(candidate2.totalVotes);

if (candidate1.totalVotes > candidate2.totalVotes){
  winner = "Loren Peterson"
}
else if (candidate1.totalVotes < candidate2.totalVotes){
  winner = "Blanca Ray"
}
else {
  winner = "Draw."
}
console.log("The new President is " + winner + "!!!!!!!!");

    







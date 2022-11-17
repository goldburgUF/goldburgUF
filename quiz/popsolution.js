//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent! Go Gators!"
compliments[1]="Wow, you're dominating! Go Gators!"
compliments[2]="You must have studied hard. Go Gators!"
compliments[3]="Right on. Go Gators!"
compliments[4]="Correct! Go Gators!"
compliments[5]="Great Job! Go Gators!"
compliments[6]="Good work! Go Gators!"


/*Below lists the questions, its choices, and finally, the solution to each question. Follow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]=" In which school year did the University of Florida become the first school to win both the national championship in football and men's basketball in the same year?"
choice1[1]="2000-2001"
choice1[2]="2005-2006"
choice1[3]="2010-2011"
choice1[4]="2017-2018"

question[2]=" Which Florida Gator football player did NOT win the Heisman Trophy?"
choice2[1]="Emmitt Smith"
choice2[2]="Steve Spurrier"
choice2[3]="Tim Tebow"
choice2[4]="Danny Wuerffel"

question[3]=" How many NCAA team national championships have been won by the University of Florida?"
choice3[1]="10"
choice3[2]="20"
choice3[3]="30"
choice3[4]="40"

question[4]=" How many individual and relay national championships have been won by University of Florida athletes?"
choice4[1]="141"
choice4[2]="241"
choice4[3]="341"
choice4[4]="441"

question[5]=" Which University of Florida women's program has won the most national championships (7 championships!)?"
choice5[1]="Tennis"
choice5[2]="Golf"
choice5[3]="Gymnastics"
choice5[4]="Swimming and Diving"

question[6]=" Since 2000, Al Horford (2007) and Bradley Beal (2012) were the highest selected Florida Gator athletes in the first round of the NBA draft. With which pick were they selected?"
choice6[1]="First"
choice6[2]="Second"
choice6[3]="Third"
choice6[4]="Fourth"

question[7]=" Florida won its first NCAA baseball championship in 2017. Who did they sweep in the championship series?"
choice7[1]="Oregon State"
choice7[2]="LSU"
choice7[3]="TCU"
choice7[4]="Florida State"

question[8]=" Which 12-time Olympic medalist swimmer was a University of Florida athlete?"
choice8[1]="Michael Phelps"
choice8[2]="Mark Spitz"
choice8[3]="Matt Biondi"
choice8[4]="Ryan Lochte"

question[9]=" The Gators mascots are unique among the SEC's mascots as the only male and female pair. What are their names?"
choice9[1]="Albert and Alberta"
choice9[2]="Alex and Alexandra"
choice9[3]="Claude and Claudette"
choice9[4]="Fred and Frederica"

question[10]=" Which 2-time Olympic gold medalist and 1-time World Cup champion soccer player was a University of Florida athlete?"
choice10[1]="Alex Morgan"
choice10[2]="Christen Press"
choice10[3]="Abby Wambach"
choice10[4]="Tobin Heath"

solution[1]="b"
solution[2]="a"
solution[3]="d"
solution[4]="c"
solution[5]="a"
solution[6]="c"
solution[7]="b"
solution[8]="d"
solution[9]="a"
solution[10]="c"

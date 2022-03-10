//find the value of m
var command= process.argv[2];
var end= NaN
for(var i=2; i<command.length; i+=1){
    var character= command[i];
    if (character=='x'){
        //console.log(i);                                     //can delete later
        end= i;
    }
}
var smaller= command.substr(2,(end-2));
//console.log(smaller);                                       //can delete later

//okay, now we take the string value of M and turn it to a number
var m=parseFloat(smaller);                                  //AND WE HAVE THE VALUE OF M
//console.log(m);

//Lets find x now
var X= process.argv[3];                                     //AND WE HAVE THE VALUE OF X

//Lets find b now
var littleB= command.substr(end+1);
var B=parseFloat(littleB);
//console.log(B);                                             //AND WE HAVE B

//Lets tie it all into an equation
var Y=((m*X)+B);                                            //AND WE HAVE Y
//console.log(Y);

//lETS WRAP THIS ALL UP
console.log('IN:'+'y='+m+'x'+B+'     x='+X+'     OUT:'+Y);
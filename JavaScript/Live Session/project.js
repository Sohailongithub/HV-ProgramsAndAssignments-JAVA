function getSleepHours(day){
    switch(day){
     case 'monday':
     return 8;
     case 'tuesday':
     return 7;
     case 'wednesday':
     return 8.5;
     case 'thursday':
     return 7.5;
     case 'friday':
     return 6;
     case 'saturday':
     return 9;
     case 'sunday':
     return 10;
 
    }
 }
 
 // console.log(getSleepHours('sunday'));
 

 
// // Inside the getActualSleepHours() function, 
// call the getSleepHours() function for each day of the week. 
// Add the results together and return the sum using an implicit return.

 const getActualSleepHours = () => {
    let sum = 0;
    sum = getSleepHours('monday'+'tuesday'+'wednesday'+'thursday'+'friday'+'saturday'+'sunday');
    return sum;
 }

 console.log(getActualSleepHours(getSleepHours));
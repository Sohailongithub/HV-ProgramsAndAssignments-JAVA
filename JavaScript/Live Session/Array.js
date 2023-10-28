// let arr1 = [11,22,33,44,55,66];
//         console.log(arr1[0]);
//         arr1.push(2001);
//         console.log(arr1);
//         arr1.unshift(1999);
//         console.log(arr1);
//         arr1.pop()
//         console.log(arr1);
//         arr1.shift();
//         console.log(arr1);
//         arr1.splice(3, 1, 1999, 2001, 2002);
//         console.log(arr1);

//         //string to an array
//         let arr2= s1.split(" ");
//         console.log(arr2);
//         arr2[2]= 30000
//         console.log(arr2);
//         //array to string
//         s1= arr2.join(" ")
//         console.log(s1)

const userName = ['user1','user2','user3','user4'];
if (userName.includes('user5')){
    console.log('This user name is already exist');
} else {
    userName.push('user5')
}

console.log(userName);

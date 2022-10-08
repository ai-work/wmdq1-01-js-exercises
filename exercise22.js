// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const lectureDates = [new Date('2022-10-02'), new Date('2022-10-09'), new Date('2022-10-16')];

console.log(lectureDates);

// what are the first four lecture dates?
for(let i=0; i<4; i++) {
    console.log(lectureDates[i]);
    lectureDates[i].getTime();
}

// index error doesn't happen in JavaScript. 
// it just returns null for out of index element access.
let a = [];
let b = {
    l1: a,
    l2: [11, 12, 13, 14, 15],
    l3: [16, 17, 18, 19, 20],
    o1: {
        l1: a,
        l2: [11, 12, 13, 14, 15],
        l3: [16, 17, 18, 19, 20],
        o1: {
            l1: a,
            l2: [11, 12, 13, 14, 15],
            l3: [16, 17, 18, 19, 20],
            o1: {

            }
        }
    }
}
for (let i = 0; i < 10; i++) {
    a.push(i);
}

console.log(a);
console.log(b.l1);
console.log(b.l2);
console.log(b.l3);
console.log(b.o1.o1.l1[5]);

let x;
fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => {
        //console.log(Response);
        return Response.json();
    })
    .then(data => {
        x = data;
        //console.log(data);
    });

console.log(x);
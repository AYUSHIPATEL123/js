console.log("bsaubd")
let a = 3;
console.log(a);
if (a % 2 == 0) {
    console.log("even noumber");
    let q=7;
}
else {
    console.log("odd number");
}
let q=7;
console.log(q);

let n=4;
let c="cvhdsv";
let b=false;
let d=undefined;
let e=null;
let n1=typeof n;
let c1=typeof c;
let b1=typeof b;
let d1=typeof d;
let e1=typeof e;

console.table([n,c,b,d,e,n1,c1,b1,d1,e1]);


// lets see what can done with heap and stack in primitive and non-primitive datatypes

let userName = "AYUSHIPATEL123";
let alterUserName=userName;
alterUserName="ayushi123";
console.table([userName,alterUserName]);

let contact = {
    number:4448515714,
    email:"jbsckds@gnail.com"
}

let contact2=contact;
contact2.number=1541544554;
console.table([contact,contact2]);
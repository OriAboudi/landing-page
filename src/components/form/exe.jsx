import React from 'react'



function Exe() {


    // const arr1= ['ass','bs','c'];
    // const arr2= ['d','e','f'];
    // const arr5= ['d','e','f'];
    // const arr3 = arr1.concat(arr2,arr5);
    // console.log(arr3);


    // const arr4 = [...arr1, ...arr2];
    // console.log(arr4);
    // const iterator = arr1.entries();
    // console.log(iterator.next());
    // console.log(iterator.next().value);
    // console.log(iterator.next().value);
    // const arr = arr1.filter(arr1=> arr1.length>1);
    // console.log(arr);

    // const found = arr1.find(arr1=> arr1.length>1);
    // console.log(found);


    // console.log(arrNum.findIndex((e)=> e>3));
    // const found  = arrNum.findLast((e)=> e>3);
    // console.log(found);

    // console.log(arrNum.findLastIndex((e)=> e>=3));

    // console.log(arrNum.flat(3));
    // const arrNum = [1, [[[2, 3]]], [4], 5];
    // const objArr = [
    //     { ori: 'abouidf' },
    //     { aboudi: "oir" }
    // ];

    // console.log(objArr.flatMap((e) => [e]));
    // console.log(objArr.forEach((e)=> [e] ));
    // objArr.forEach((e) => console.log([e]));
    // const array = [];
    // console.log(Array.from('dsfs'));
    // arr.forEach((e) => {
    // const rrrr= Array.from('ghgjk')
    // console.log(rrrr);

    // })
    // // const ori = Array.from([1, 2, 3], (e) => {

    // // })
    // // console.log(ori);
    // console.log(arr);
    // console.log(arr.includes(3));
    // console.log(Array.isArray(arr));
    // console.log(arr.indexOf(4,2));
    // let i =0
    // console.log(arr.join());
    // console.log(arr.join(''));
    // console.log(arr.join('-').concat(arr));
    // const iterator = arr.keys();
    // for (const key of iterator) {
    //     console.log(key);
    // }
    // console.log();
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    // console.log(plants.pop());
    // console.log(plants);
    // console.log(plants.pop());
    // console.log(plants);
    // plants.forEach((e)=>{
    //     console.log(e.pop());
    // })
    // const ori=[]
    // console.log(plants.map((e) => ori.push(plants.pop())));
    // for (let index = 0; index < 5; index++) {

    //     console.log(plants.pop());
    // }

    // console.log(plants);
    // console.log(plants);

    // const ori = []
    // console.log(animals.push(1));
    // console.log(animals);
    // console.log(animals.map((item)=> {
    //     return(
    //         if(ori.includes(item))
    //     )
    // } ));

    // animals.forEach((item) => {
    //     if (!ori.includes(item)) {
    //         ori.push(item)
    //     }
    // })
    // console.log(animals.reverse()); 
    // animals.shift();
    // console.log(firstElement);

    // console.log(animals);

    // animals.shift();
    // animals.shift();
    // console.log(firstElement1);

    // console.log(animals);
    // console.log(ori);
    // const array = [1, 2, 3, 4, 5];
    // checks whether an element is even
    // const even = (element) => element % 2 === 0;
    // console.log(array.some(even));
    // expected output: true

    const months = [{ March: 'Feb' }
        , { March: 'Feb' }
        , { Marc: 'Feb' },
    { Mar: 'Feb' },
    { Ma: 'Feb' },
    { M: 'Feb' }
    ];









    const months1 = ['March', 'Jan', 'Feb', 'Dec'];
    // let ori = [];
    // months.sort();
    // console.log(months);
    // expected output: Array ["Dec", "Feb", "Jan", "March"]

    // const array1 = [1, 30, 4, 21, 100000];
    // array1.sort();
    // console.log(array1);
    // expected output: Array [1, 100000, 21, 30, 4]

    // console.log(months.sort());
    // console.log(array1.sort());

    // console.log(months.splice(0,3, "oirsafs","sfd"));
    // console.log(months);

    // ori = months.splice(0,2,ori)
    //     console.log(ori.flat(1));
    //     console.log(months);
    // console.log(months1.slice(0,3,));
    // console.log(months1);
    // let ori = [];
    // ori = months.unshift(2)
    // console.log(ori);
    // console.log(months);

    let _val = months.values()
    let _key = months.keys()
    let _val1 = months.values()
 
    // for (const value of _val) {
    //     console.log(value);
    // }
    // for (const key of _key) {
    //     console.log(key);
    // }
for (const key of _val1){
    console.log(key);
}
    return (
        <div>Exe</div>
    )
}

export default Exe
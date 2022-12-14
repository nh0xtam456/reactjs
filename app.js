var _ = require('lodash');

arr1 = [{id:1,item:'apple',type:'fruit'},
        {id:2,item:'banana',type:'fruit'},
        {id:3,item:'pen',type:'stuff'},
        {id:4,item:'phone',type:'stuff'}
       ]


function render(array)
{
    return array.map((a) =>  `<li id= ${a.id}  ${a.item} </li>'`);
}

function filter(array, type)
{
    return array.filter((a)=> a.type===type);
}

function last(array)
{
    return _.takeRight(array,1);
}

console.log(last(arr1));



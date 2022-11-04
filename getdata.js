// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({a:2})
//     },2000)
// });
// p.then(b=>{console.log(b); return b;});


function getdata()
{
    return new Promise((rs, rj) => {
        setTimeout(() => {
            rs({a: 1})
        }, 2000)
    })
}

// getdata().then(b=>{console.log(b);return b;}); <--Not sync/await-->
async function main()
{
    const b = await getdata();
    console.log(b);
}

main();

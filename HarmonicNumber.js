function nthHarmonic(N)
{
    // H1 = 1
    let harmonic = 1.00;
 
    // loop to apply the forumula
    // Hn = H1 + H2 + H3 ... +
    // Hn-1 + Hn-1 + 1/n
    for (let i = 2; i <=process.argv.length; i++)
    {
        harmonic += parseFloat(1) / i;
    }
 
    return harmonic;
}
 
// Driver Code
 
 let N =process.argv;
console.log( nthHarmonic(N).toFixed(5));
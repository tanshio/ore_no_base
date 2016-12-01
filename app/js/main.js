const test = `${1+1}=2`
const testPromise = ()=>{
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      console.log("o-i");
      resolve();
    },2000)
  });
}

testPromise().then(function(){console.log("hello")})

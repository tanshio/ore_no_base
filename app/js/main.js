// window.jQuery = window.$ = $
//
import changeViewport from '@utils/changeViewport'

changeViewport(1024)

async function test () {
  // 60回Promiseを待機する。
  // rejectされた時は、自動的にこの関数が中断されるからtry-catchで囲む必要もない。
  for (let i = 0; i < 60; ++i) {
    // yieldと書いてた部分をawaitにする
    await delayAndRandom()
  }
}

function delayAndRandom () {
  const aaa = 'aaa'
  console.log(aaa)
}

test().then(() => {
  // 全てresolveが呼ばれた場合、この関数が実行される
  console.log('全部成功しました。')
}).catch(() => {
  // 途中1回でもreject関数が呼ばれた場合、この関数が実行される
  console.log('途中で失敗したみたい')
})

const log = (param) => {
  console.log(param)
}

log(process.env)

const hello = ()=>{
  console.log('hello')
}

hello()

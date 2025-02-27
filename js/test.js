//  time function

const timeFunction = (time)=>{

    const hour = parseInt( time / 3600);
    let secound = time % 3600;
    // console.log("secound", secound)
    const minute = parseInt(secound / 60);
    // console.log("minute", minute)
    secound = secound % 60;
    // console.log("secound 2", secound)
  return `${hour} hour ${minute} minute ${secound} secound ago  `
}

console.log(timeFunction(4360))
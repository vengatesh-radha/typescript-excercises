export const loopSquare = () => {
  const val1 = 100;
  const val2 = 200;

  const splitNumber = (num: Number) => {
    return num
      .toString()
      .split('')
      .map((str) => Number(str));
  };

  const findSquare = (arr: any) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
      console.log('i', i, 'arr.length', arr.length, 'val', arr[i]);

      // res= res + Math.pow(arr[i], arr.length)
      res += Math.pow(arr[i], arr.length);
      console.log('res', res);
    }
    return res;
  };
  // let initial = val1;
  // const arr = splitNumber(initial);
  // let res = findSquare(arr);
  // console.log('err',arr);

  for (let start = val1; start <= val2; start++) {
    const arr = splitNumber(start);
    console.log('***err', arr);

    let res = findSquare(arr);
    if (start === res) {
      console.log('Same number found', res);
      break;
    } else {
      console.log('/else', res);
      // if(start < val2) {
      //     initial++;
      //     //  initial = initial+1;
      //     console.log('initial', initial)
      // }
    }
  }
};

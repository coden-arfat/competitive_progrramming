//problem solving using javascript 

// github : arfat-khanbd
// instagram : arfat.maxon


// 1 .finding how many word in sentence 

function FindWord(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[0] == " ") {
        count++;
      }
    }
    return count;
    //uses : FindWord("here you can use sentence")
  }
  
  // 2. removing duplicate 
  
  function dupRm(list) {
    let selectedList = [];
    for (let i = 0; i < list.length; i++) {
      let select = list[i];
      if (selectedList.indexOf(select) == -1) {
        selectedList.push(select);
      }
    }
    return selectedList;
    //uses : dupRm(["arfat", "khan ", "arfat"]) ...etc 
  }
  
  // 3 Reversing string 
  
  function reStrin(string) {
    let reveredString = ""
    for (let i = string.length; i >= 0; i--) {
      let letter = string[i]
      reveredString = reveredString + letter;
    }
    return reveredString;
    //uses : reStrin("arfat"),reStrin("any string here") etc...
  }
  
  //4. A example of Recrusive Functions 
  
  function Recrusive(num) {
    console.log(num)
    if (num == 0) {
      return;
    }
    num = num - 1;
    Recrusive(num);
    //uses : Recrusive(100),Recrusive(10),Recrusive(68) etc ...
  }
  
  //5 fibonacci  Function Recrusive Way...., 
  
  function findFiboRe(n) {
    if (n <= 1) {
      return n;
    }
    let fibo = findFiboRe(n - 1) + findFiboRe(n - 1)
    return fibo;
    //uses : console.log(findFibo(10))
    //it will be like this =0+1+1+3+5..= 512
  }
  
  
  // 6. Finding Fibonacci series in Iterative Way ...
  
  function findFiboSerIter(num) {
    let series = [0, 1];
    for (let i = 2; i <= num; i++) {
      series[i] = series[i - 1] + series[i - 2];
    }
    return series;
    //uses : console.log(findFiboSerIter(10))
  
    //Output >> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  }
  
  // 7 . finding fiboncci series of odd number
  
  function fiboOdd(num) {
    let series = [];
    for (let i = 2; i <= num; i += 2) {
      series.push(i);
    }
    return series;
    //uses : console.log(fiboOdd(10)) 
    //output :  [2, 4, 6, 8, 10]
  }
  
  // 8 Sorting 2 arry 
  
  function sortArry(arry1, arry2) {
    let mergedArry = [];
    let j = 0;
    let k = 0;
    length = arry1.length + arry2.length
    for (let i = 0; i < length; i++) {
      if (arry1[j] < arry2[k] || arry2[k] == undefined) {
        mergedArry.push(arry1[j])
        j++
      }
      else {
        mergedArry.push(arry2[k])
        k++
      }
    }
    return mergedArry;
    /*uses:
    let b=[1 ,5,7]
      let a = [40,60,80]
      console.log(sortArry(a, b))
      output : [1, 5, 7, 40, 60, 80]
    */
  }
  // 9 .Sorting array object using proparty 
  
  let user = [{
    name: "Arfat",
    Age: 17,
    pro: "student"
  }, {
    name: "khan",
    Age: 18,
    pro: "student"
  }, {
    name: "sjsj",
    Age: 19,
    pro: "progrmmer"
  }, {
    name: "sjsjj",
    Age: 30,
    pro: "progrmmer"
  }]
  
  function SortByPro(arr) {
    sortArry = []
    for (let i = 0; i < arr.length; i++) {
      let user = arr[i]
      if (20 > user.Age) {
        sortArry.push(arr[i])
      }
    }
    return sortArry;
    //uses : console.log(SortByPro(user))
  }
  
  // 10 .sorting array-object : lower to high ...
  let arrOb = [{
      brand: "walton",
      price: 19900
  
  }, {
      brand: "iphone",
      price: 100000
  
  }, {
      brand: "itel",
      price: 18000
  
  },
    {
      brand = "tecno",
      price: 2007
  
  }]
  
  function sortArrt(first, scond) {
    return first.price - scond.price
    //uses:arrOb.sort(sortArrt)
    //console.log(arrOb)
  
  }
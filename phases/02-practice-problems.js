function anagrams(str1, str2) {

  // let set1 = new Set(str1)
  // let set2 = new Set(str2)

  // if(set1.size === set2.size) {
  //   for(let letter of set1){
  //     if(!set1.has(letter)){
  //       return false;
  //     }
  //     return true;
  //   }
  // }
  // return false;
  if(str1.length !== str2.length) return false;

  const counts = {}

  for(let i = 0; i < str1.length; i++) {

    let letter = str1[i];
    if(counts[letter]) {
      counts[letter]++;
    }
    else {
      counts[letter] = 1;
    }

  }

  for(let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      if(!counts[letter]) {
        return false;
      }
    }

    return true;

  }


  function commonElements(arr1, arr2) {

    let newArr = []
    let set1 = new Set(arr1)

    for(let i = 0; i < arr2.length; i++) {
        if(set1.has(arr2[i])){
          newArr.push(arr2[i])
        }
      }
      return newArr;

    }


    function duplicate(arr) {

      // let set1 = new Set(arr)
      const set = new Set();

      for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) return arr[i];
        set.add(arr[i]);
      }

    }



function twoSum(nums, target) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(target - nums[i])) return true;
    set.add(nums[i]);
  }
  return false
}


function wordPattern(pattern, strings) {
  const set = new Set()
  const obj = {}

  for (let i = 0; i < strings.length; i++) {
    let str = strings[i];
    let pat = pattern[i];

    if (!obj[pat] && !set.has(str)) {
      obj[pat] = str;
      set.add(str);
    } else if (obj[pat] !== str) {
      return false;
    }
  }
  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];

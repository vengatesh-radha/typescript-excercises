
export const removeDuplicate1 = ()=> {
  var arrayWithDuplicates1 = [
    {"type":"LICENSE", "licenseNum": "12345", state:"NV"},
    {"type":"LICENSE", "licenseNum": "A7846", state:"CA"},
    {"type":"LICENSE", "licenseNum": "12345", state:"OR"},
    {"type":"LICENSE", "licenseNum": "10849", state:"CA"},
    {"type":"LICENSE", "licenseNum": "B7037", state:"WA"},
    {"type":"LICENSE", "licenseNum": "12345", state:"NM"}
  ];
  var arrayWithDuplicates = [
   2,1,2,3,1
  ];
  
  function removeDuplicates(originalArray: any) {
     let newArray = [];
     let lookupObject: any  = {};
  
     for(const i in originalArray) {
        console.log('i',i, originalArray[i]);
        console.log(originalArray[i])
        lookupObject[originalArray[i]] = originalArray[i];
        console.log('lookupObject', lookupObject)
     }
  
     for(const i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      return newArray;
  }
  
  var uniqueArray = removeDuplicates(arrayWithDuplicates);
  console.log("uniqueArray is: " + JSON.stringify(uniqueArray));
}


export const removeDuplicate2 = ()=> {


}




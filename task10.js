let nums= [4,3,2,5,1]
function selection_Sort (arr,length){
  let i,j,min,temp;
  for (i = 0; i < arr.length; i++) {
    min=i;
    for(j=i+1;j<arr.length;j++){
      if(arr[j]>arr[min]){
        min=j
      }
    }
    temp=arr[min]
    arr[min]=arr[i]
    arr[i]=temp
  }

return arr
}
console.log(selection_Sort(nums));
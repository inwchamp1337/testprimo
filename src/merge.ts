export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {
    
    const mergeTwoArrays = (arr1: number[], arr2: number[]): number[] => {
      const merged: number[] = [];
      let i = 0,
        j = 0;
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
          merged.push(arr1[i]);
          i++;
        } else {
          merged.push(arr2[j]);
          j++;
        }
      }
      while (i < arr1.length) {
        merged.push(arr1[i++]);
      }
      while (j < arr2.length) {
        merged.push(arr2[j++]);
      }
      return merged;
    };
  
    
    const mergeSort = (arr: number[]): number[] => {
      if (arr.length <= 1) {
        return arr;
      }
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
      return mergeTwoArrays(left, right);
    };
  
    
    const sortedCollection1 = mergeSort(collection_1);
    const sortedCollection2 = mergeSort(collection_2);
    const sortedCollection3 = mergeSort(collection_3);
  
    
    return mergeTwoArrays(
      mergeTwoArrays(sortedCollection1, sortedCollection2),
      sortedCollection3
    );
  }
  
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // collection_3 (O(n)) น้อยไปมาก
  const sorted3 = [...collection_3].reverse(); 

  // ฟังก์ชัน Merge อาร์เรย์ 2 อัน (O(n))
  const mergeTwoArrays = (arr1: number[], arr2: number[]): number[] => {
    const merged: number[] = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        merged.push(arr1[i++]);
      } else {
        merged.push(arr2[j++]);
      }
    }
    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);
    return merged;
  };

  // Merge ทั้งสามอาร์เรย์ (O(n))
  return mergeTwoArrays(mergeTwoArrays(collection_1, collection_2), sorted3);
}

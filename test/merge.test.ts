import { merge } from "../src/merge";
import { describe, it, expect } from "bun:test";

describe("ฟังก์ชัน merge", () => {
  it("ควรผสานและเรียงลำดับอาร์เรย์ได้อย่างถูกต้อง", () => {
    const collection_1 = [1, 4, 7];
    const collection_2 = [2, 5, 8];
    const collection_3 = [9, 6, 3]; // เรียงลำดับจากมากไปน้อย

    const result = merge(collection_1, collection_2, collection_3);
    // ผลลัพธ์ที่คาดหวัง: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("ควรจัดการกับอาร์เรย์ว่างได้", () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });

  it("ควรจัดการเมื่อบางอาร์เรย์ว่างได้", () => {
    const result = merge([1, 3, 5], [], [10, 8, 4]);
    // collection_3 เรียงลำดับจากมากไปน้อยเป็น [4, 8, 10]; ผสานกับ [1,3,5] ได้ [1,3,4,5,8,10]
    expect(result).toEqual([1, 3, 4, 5, 8, 10]);
  });

 
  it("ควรจัดการกับอาร์เรย์ที่มีเพียงหนึ่ง element ในแต่ละ collection", () => {
    const result = merge([2], [1], [3]);
    expect(result).toEqual([1, 2, 3]);
  });
  
  it("ควรผสานอาร์เรย์ที่มี elements มาจากทั้งสาม collection แบบสลับกัน", () => {
    const collection_1 = [1, 5, 9];
    const collection_2 = [2, 6, 10];
    const collection_3 = [8, 4, 0]; // หลัง reverse เป็น [0, 4, 8]
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([0, 1, 2, 4, 5, 6, 8, 9, 10]);
  });
  
  it("ควรจัดการกับอาร์เรย์ที่มีค่าซ้ำกันทั้งหมด", () => {
    const collection_1 = [2, 2, 2];
    const collection_2 = [2, 2];
    const collection_3 = [2, 2, 2]; // หลัง reverse เป็น [2, 2, 2]
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([2, 2, 2, 2, 2, 2, 2, 2]);
  });
  
  it("ควรผสานเมื่อ elements ของ collection_3 อยู่ระหว่าง collection_1 และ collection_2", () => {
    const collection_1 = [3, 7, 11];
    const collection_2 = [4, 8, 12];
    const collection_3 = [10, 6, 2]; // หลัง reverse เป็น [2, 6, 10]
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([2, 3, 4, 6, 7, 8, 10, 11, 12]);
  });
});

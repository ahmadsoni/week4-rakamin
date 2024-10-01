// Fungsi untuk membuat nilai random dalam rentang tertentu
function generateRandomArray(length: number, min: number, max: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return array;
}

// Fungsi untuk memecah array menjadi dua array berdasarkan indeks genap dan ganjil
function splitArrayByIndex(array: number[]): { evenIndexArray: number[], oddIndexArray: number[] } {
  const evenIndexArray: number[] = [];
  const oddIndexArray: number[] = [];

  array.forEach((value, index) => {
    if (index % 2 === 0) {
      evenIndexArray.push(value);
    } else {
      oddIndexArray.push(value);
    }
  });

  return { evenIndexArray, oddIndexArray };
}

// Fungsi untuk mencari nilai minimum
function findMin(array: number[]): number {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

// Fungsi untuk mencari nilai maksimum
function findMax(array: number[]): number {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// Fungsi untuk menghitung total
function calculateTotal(array: number[]): number {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Fungsi untuk menghitung rata-rata
function calculateAverage(array: number[]): number {
  return calculateTotal(array) / array.length;
}

// Fungsi untuk membandingkan hasil antara dua array
function compareArrays(evenArray: number[], oddArray: number[]): void {
  const evenMin = findMin(evenArray);
  const oddMin = findMin(oddArray);
  const evenMax = findMax(evenArray);
  const oddMax = findMax(oddArray);
  const evenTotal = calculateTotal(evenArray);
  const oddTotal = calculateTotal(oddArray);
  const evenAvg = calculateAverage(evenArray);
  const oddAvg = calculateAverage(oddArray);

  console.log("Perbandingan Nilai:");
  console.log(`- Min: ${evenMin > oddMin ? "Genap lebih besar" : (evenMin < oddMin ? "Ganjil lebih besar" : "Nilai sama")}`);
  console.log(`- Max: ${evenMax > oddMax ? "Genap lebih besar" : (evenMax < oddMax ? "Ganjil lebih besar" : "Nilai sama")}`);
  console.log(`- Total: ${evenTotal > oddTotal ? "Genap lebih besar" : (evenTotal < oddTotal ? "Ganjil lebih besar" : "Nilai sama")}`);
  console.log(`- Rata-rata: ${evenAvg > oddAvg ? "Genap lebih besar" : (evenAvg < oddAvg ? "Ganjil lebih besar" : "Nilai sama")}`);
}

function main() {
  // 1. Membuat 100 nilai random (1 sampai 50) pada 1 array
  const randomArray = generateRandomArray(100, 1, 50);
  console.log("Array dengan jumlah index 100:", randomArray);

  // 2. Memecah menjadi 2 array berdasarkan indexnya
  const { evenIndexArray, oddIndexArray } = splitArrayByIndex(randomArray);
  console.log("Array genap dengan jumlah index 50:", evenIndexArray);
  console.log("Array ganjil dengan jumlah index 50:", oddIndexArray);

  // 3. Menampilkan Min, Max, Total, Rata-rata pada setiap array
  console.log("\nArray Genap:");
  console.log(`- Min: ${findMin(evenIndexArray)}`);
  console.log(`- Max: ${findMax(evenIndexArray)}`);
  console.log(`- Total: ${calculateTotal(evenIndexArray)}`);
  console.log(`- Rata-rata: ${calculateAverage(evenIndexArray).toFixed(2)}`);

  console.log("\nArray Ganjil:");
  console.log(`- Min: ${findMin(oddIndexArray)}`);
  console.log(`- Max: ${findMax(oddIndexArray)}`);
  console.log(`- Total: ${calculateTotal(oddIndexArray)}`);
  console.log(`- Rata-rata: ${calculateAverage(oddIndexArray).toFixed(2)}`);

  // 4. Membandingkan kedua array
  compareArrays(evenIndexArray, oddIndexArray);
}


main();

function printAndSum(startNum: number, endNum: number): void {
  let sum = 0;

  for (let index = startNum; index <= endNum; index++) {
    console.log(index);

    sum += index;
  }
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);

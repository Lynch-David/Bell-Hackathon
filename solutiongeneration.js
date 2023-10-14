
const patternNumber = 4;
const dummyArrayLength = 16;
let number = 0;
let generatedPattern = [patternNumber];
let dummyArray = [dummyArrayLength]


for (let i = 0; i < dummyArray.length; i++)
{
    dummyArray[i] = number++;
    
}
dummyArray.sort(()=> Math.random() - 0.5);

for (let i = 0; i < generatedPattern.length; i++)
{
    generatedPattern[i] = dummyArray[i];
}



    
    

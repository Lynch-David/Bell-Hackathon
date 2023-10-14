
const patternNumber = 4;
const dummyArrayLength = 16;
let number = 0;
let generatedPattern = [patternNumber];
let buttonGrid = document.getElementById("btn-group")
let dummyArray = [dummyArrayLength]


for (let i = 0; i < dummyArray; i++)
{
    dummyArray[i] = number++;
    dummyArray.sort(()=> Math.random() - 0.5);
}

for (let i = 0; i < generatedPattern.length; i++)
{
    generatedPattern[i] = dummyArray[i];
}


for (let i = 0; i < generatedPattern.length; i++)
{
    console.log(generatedPattern[i]);
}


    
    

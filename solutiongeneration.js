
const patternNumber = 4;
let generatedPattern = [patternNumber];
let buttonGrid = document.getElementById("btn-group")

for (let i = 0; i < generatedPattern.length; i++)
{
    generatedPattern[i] = GenerateNumber;
}

ShellSort(generatedPattern)

for (let i = 0; i < generatedPattern.length; i++)
{
    while (LinearSearch(generatedPattern[i], generatedPattern))
    {
        generatedPattern[i] = GenerateNumber; 
    }
}


for (let i = 0; i < generatedPattern.length; i++)
{
    console.log(generatedPattern[i]);
}

console.log(buttonStyle)

function GenerateNumber()
{
    return Math.floor(Math.round() * 17)
}

function ShellSort(collection) 
{
    
    let numSwaps = 0
    let temp;
    for (let gap = collection.Length / 2; gap >= 1; gap = gap / 2)
    {
        for (let j = gap; j < collection.Length; j++)
        {
            for (let i = j - gap; i >= 0; i = i - gap)
            {
                if (collection[i] > collection[i + gap])
                {
                    temp = collection[i];
                    collection[i] = collection[i + gap];
                    collection[i + gap] = temp;
                    numSwaps++;
                }
                else
                    break;
            }
        }
    }
    return numSwaps;
} 
        
    
function LinearSearch(key, collection)
{
    for (let i = 0; i < collection.length; i++)
    {
        if (collection[i] === key)
        {
            return true;
        }
    }
    return false;
} 
    

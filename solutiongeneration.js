
const patternNumber = 4;
let generatedPattern = [patternNumber];
let buttonGrid = document.getElementById("btn-group")

for (let i = 0; i < generatedPattern.length; i++)
{
    generatedPattern[i] = GenerateNumber;
}

ShellSort(generatedPattern)
for (let i=0; i < generatedPattern.length; i++)
{
    while (BinarySearch(generatedPattern[i], generatedPattern))
    {
        generatedPattern[i] = GenerateNumber; 
    }
}

for (let i = 0; i < buttonGrid.children.length; i++)
{
    for (let j = 0; i < buttonGrid.children[i].length; i++)
    {
        if (buttonGrid.children[i].children[j] == generatedPattern[j])
        {
            let buttonStyle = document.getElementById(buttonGrid.children[i].children[j].id)
            buttonStyle.style.backgroundColor = "black";
        }
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
    
        let key;
        let numShifts = 0;
        for (let k = 1; k < collection.length; k++)
        {
            key = collection[k];
            let i = k - 1;
            while (i >= 0 && collection[i] > key)
            {
                collection[i + 1] = collection[i];
                i--;
                numShifts++;
            }
            collection[i + 1] = key;
        }
        
    
}

function BinarySearch(key, generatedPattern)
{
        
    let left = 0; 
    let right = (generatedPattern.length) - 1; 

    while (left <= right)
    {
        midPoint = left + ((right-left) / 2); 

        if (generatedPattern[midPoint] == key)
        {
            return true
        }
        if (key < generatedPattern[midPoint])
        {
            right = midPoint - 1;
        }
        else 
        {
            left = midPoint + 1;
        }   
    }
    return false;
}
    

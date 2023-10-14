
const patternNumber = 4;
let generatedPattern = [patternNumber];
let buttonGrid = document.getElementById("btn-group")

for (let i = 0; i < generatedPattern.length; i++)
{
    generatedPattern[i] = GenerateNumber;
}

ShellSort(generatedPattern)
while (BinarySearch(generatedPattern[i]))
{
    generatedPattern[i] = GenerateNumber; 
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


function GenerateNumber()
{
    return Math.floor(Math.round() * 17)
}

function ShellSort(collection) 
{
    {
        key, numShifts = 0;
        for (let k = 1; k < collection.Length; k++)
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
}

function BinarySearch(key, collection)
{
        
     left = 0, right = collection.Length - 1 , iterations = 0;

     while (left <= right)
     {
        midPoint = left + ((right-left) / 2); 

        if (collection[midPoint] == key)
        {
            return true
        }

         if (key < collection[midPoint])
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
    

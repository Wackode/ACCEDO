
function convert()
{
    var letters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
    var morseLetters = [ "//", ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..",  "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"];
    
    var textToChange = document.getElementById("textToConvert").value;
    var newText = "";
    for (var i = 0; i < textToChange.length; i++) 
    {
        for (var j = 0; j < 37; j++) 
        {
            if (textToChange[i].toLowerCase() == letters[j]) 
            {
                newText += morseLetters[j];
                newText += "\xa0";
                break;	
            }        
        }
    }
document.getElementById("newText").innerHTML = newText;
}
function eraseText() 
{
    document.getElementById("textToConvert").value = "";
}
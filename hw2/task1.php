<?php
declare(strict_types=1);

$text = $_GET['text'];
if (empty($text)) {
    exit('Empty input!');
}

function RemoveExtraSymbols(string $text): string	
{    
     if((count(str_split($text)) == array_count_values(str_split($text))['*']) && (count(str_split($text)) <> 1)){
         return preg_replace('~\*+~', '*' , $text) . '*'; 
     } 
     return preg_replace('~\*+~', '*' , $text);   
}


$stringWithoutBlanks = RemoveExtraSymbols($text);
echo($stringWithoutBlanks);
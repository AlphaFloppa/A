<?php
declare(strict_types=1);

$text = $_GET['text'];
if (empty($text)) {
    exit('Empty input!');
}

function RemoveExtraSymbols(string $text): string	
{    
    if((substr_count($text, '*') == strlen($text)) && (strlen($text) > 1)){
        return preg_replace('~\*+~', '*' , $text) . '*'; 
    } 
    return preg_replace('~\*+~', '*' , $text);   
}


$stringWithoutBlanks = RemoveExtraSymbols($text);
echo($stringWithoutBlanks);
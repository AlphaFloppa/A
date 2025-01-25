<?php
declare(strict_types=1);

# Функция подсчёта количества символов и цифр у пароля. Необходимо разобраться, как она работает
function countPasswordSymbolsAndDigits(
    string $text,
    int    &$digitsCount,
    int    &$lettersCount,
    int    &$uppercaseSymbolsCount,
    int    &$lowercaseSymbolsCount,
    int    &$repeatedSymbolsCount,
): void
{
    foreach (str_split($text) as $char) {
        if (ctype_digit($char)) {
            $digitsCount++;
        } else {
            $lettersCount++;
            if (ctype_upper($char)) {
                $uppercaseSymbolsCount++;
            } else {
                $lowercaseSymbolsCount++;
            }
        }
        if (isset($allSymbols[$char])) {
            $repeatedSymbolsCount += 2;
        } else {
            $allSymbols[$char] = true;
        }
    }
}

function checkPasswordStrength(
    int $passwordLength,
    int $digitsCount,
    int $uppercaseSymbolsCount,
    int $lowercaseSymbolsCount,
    int $lettersCount,
    int $repeatedSymbolsCount
): int
{
    # Тут необходимо посчитать финальное значение безопасности пароля, основываясь на данных, полученных в параметрах функции
    $strengh = 0;
    $strengh += 4*($passwordLength+$digitsCount);
    if($uppercaseSymbolsCount > 0){
        $strengh += ($passwordLength - $uppercaseSymbolsCount)*2;
    }
     if($lowercaseSymbolsCount > 0){
        $strengh += ($passwordLength - $lowercaseSymbolsCount)*2;
    }
    if(($passwordLength == $lettersCount) || ($passwordLength == $digitsCount)){
        $strengh -= $passwordLength;
    }
     
    return $strengh - $repeatedSymbolsCount;
}

# Получение пароля через GET-запрос
$text = $_GET['text'];
if (empty($text)) {
    exit('Empty input!');
}


$array = str_split('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890');
$text_array = str_split($text);
foreach($text_array as $item){
    if(!in_array($item, $array)){
            echo nl2br("Found fordidden symbol - {$item} \n");
        }
}
# Тут необходимо добавить проверки на наличие лишних символов в строке
# Пароль должен состоять только из английских символов в верхнем и нижнем регистрах, а также из цифр

$passwordLength = strlen($text);

$allSymbols = array();
$digitsCount = 0;
$lettersCount = 0;
$uppercaseSymbolsCount = 0;
$lowercaseSymbolsCount = 0;
$repeatedSymbolsCount = 0;

countPasswordSymbolsAndDigits(
    $text,
    $digitsCount,
    $lettersCount,
    $uppercaseSymbolsCount,
    $lowercaseSymbolsCount,
    $repeatedSymbolsCount
);

$passwordStrength = checkPasswordStrength(
    $passwordLength,
    $digitsCount,
    $uppercaseSymbolsCount,
    $lowercaseSymbolsCount,
    $lettersCount,
    $repeatedSymbolsCount
);

echo('Strength of your password = ' . $passwordStrength);
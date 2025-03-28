<?php
$number = $_POST["factorial-base"];
echo GetFactorial($number);

function GetFactorial(int $number): int
{
   if ($number == 1) return 1;
   else return GetFactorial($number - 1) * $number;
}
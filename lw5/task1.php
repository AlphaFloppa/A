<?php
$date = $_POST["year-number"];
function A(string $yearNumber)
{
    if($yearNumber < 0 && $yearNumber < 30000) return "wrong date";
    if(($yearNumber % 4 == 0 && $yearNumber % 100) || $yearNumber % 400 == 0) return "YES";
    return "NO";
}
echo A($date);
<?php
function GetDaysFromYear(int $dayNumber, $monthNumber, $yearNUmber): int
{
    $days = 0;
    for(int $i = 1; $i < $monthNumber; ++$i)
        $days += cal_days_in_month(CAL_GREGORIAN, $i, $yearNUmber);
    return ($days + $dayNumber);
}

$dateArray = explode(".", $_POST["date"]);
switch(GetDaysFromYear($dateArray[0], $dateArray[1], $dateArray[2]))
{
    case
}
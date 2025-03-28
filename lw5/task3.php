<?php
$dateArray = explode(".", $_POST["date"]);
for ($i = 0; $i < 3; ++$i)
  if (strlen($dateArray[$i]) == 4) {
    $year = (int) $dateArray[$i];
    unset($dateArray[$i]);
    $dateArray = array_values($dateArray);
    break;
  }

for ($i = 0; $i < 2; ++$i)
  if ($dateArray[$i] > 12) {
    $day = (int) $dateArray[$i];
    unset($dateArray[$i]);
    $dateArray = array_values($dateArray);
    $month = (int) $dateArray[0];
  }

if (count($dateArray) != 1) {
  $month = (int) $dateArray[1];
  $day = (int) $dateArray[0];
}

echo ($day);
echo (nl2br("\n"));
echo ($month);
echo (nl2br("\n"));
echo ($year);
echo (nl2br("\n"));

switch ($month) {
  case 1:
    if ($day >= 21)
      echo "Водолей";
    else
      echo "Козерог";
    break;
  case 2:
    if ($day >= 21)
      echo "Рыбы";
    else
      echo "Водолей";
    break;
  case 3:
    if ($day >= 21)
      echo "Овен";
    else
      echo "Рыбы";
    break;
  case 4:
    if ($day >= 21)
      echo "Телец";
    else
      echo "Овен";
    break;
  case 5:
    if ($day >= 21)
      echo "Близнецы";
    else
      echo "Телец";
    break;
  case 6:
    if ($day >= 22)
      echo "Рак";
    else
      echo "Близнецы";
    break;
  case 7:
    if ($day >= 23)
      echo "Лев";
    else
      echo "Рак";
    break;
  case 8:
    if ($day >= 24)
      echo "Дева";
    else
      echo "Лев";
    break;
  case 9:
    if ($day >= 24)
      echo "Весы";
    else
      echo "Дева";
    break;
  case 10:
    if ($day >= 24)
      echo "Скорпион";
    else
      echo "Весы";
    break;
  case 11:
    if ($day >= 23)
      echo "Стрелец";
    else
      echo "Скорпион";
    break;
  case 12:
    if ($day >= 22)
      echo "Козерог";
    else
      echo "Стрелец";
    break;
  default:
    echo "undefined";
}
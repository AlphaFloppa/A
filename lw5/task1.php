<?php
$yearNumber = $_POST["year-number"];
if(($yearNumber % 4 == 0 && $yearNumber % 100) || $yearNumber % 400 == 0) echo "YES";
else echo "NO";
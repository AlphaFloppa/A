<?php
$start = $_POST["ticket-first"];
$end = $_POST["ticket-second"];
for ($i = $start; $i <= $end; ++$i)
    if (intdiv($i, 100000) + intdiv($i, 10000) % 10 + intdiv($i, 1000) % 10 == intdiv($i, 100) % 10 + intdiv($i, 10) % 10 + $i % 10)
        echo $i . nl2br("\n");
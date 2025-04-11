<?php
class Operand
{
    public $value;
    public $isSet;
    public function _construct($value, $isSet)
    {
        $this->value = $value;
        $this->isSet = $isSet;
    }
}

function CountO($op1, $op2, $sign)
{
    switch($sign)
    {
        case "+":
            return $op1->value + $op2->value;
        case "-":
            return $op1->value - $op2->value;
        case "*":
            return $op1->value * $op2->value;
    }
}

$text_arr = str_split(trim($_GET['statement']));
$operand1 = new Operand(0, false);
$operand2 = new Operand(0, false);
foreach($text_arr as $i)
{ 
    echo $i;
    if($i == " ") continue;
    if($i == "+" || $i == "-" || $i == "*")
    {
        $operand1->value = CountO($operand1, $operand2, $i);
        $operand1->isSet = true;
        $operand2->isSet = false;
        continue;
    }
    if(!$operand1->isSet)
    {
        $operand1->value = intval($i);
        $operand1->isSet = true;
    }
    else if(!$operand2->isSet)
    {
        $operand2->value = intval($i);
        $operand2->isSet = true;
    }
}
echo "<br>" . $operand1->value;
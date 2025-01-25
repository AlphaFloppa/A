<?php
declare(strict_types = 1);
$email = $_POST['email'];
if(!preg_match("~.+@\w+\.\w+~", $email) || (preg_match("~\D~", $_POST['age']))){
    echo 'incorrect email or age';
}
else{
    $filePath = "data/{$email}.txt";
    if(file_exists($filePath)){
        $file = fopen($filePath, 'rb+');
    }
    else{
        file_put_contents($filePath, " Email:{$email} \n Firstname:none \n Lastname:none \n Age:none");
        $file = fopen($filePath, 'rb+');
    }
    $array = file($filePath);
    if($_POST['first-name'] != ''){
        $array[1] = preg_replace("~:\w+~", ':' . $_POST['first-name'], $array[1]);
        file_put_contents($filePath, implode("", $array));
    }
    if($_POST['last-name'] != ''){
        $array[2] = preg_replace("~:\w+~", ':' . $_POST['last-name'], $array[2]);
        file_put_contents($filePath, implode("", $array)    );
    }
    if($_POST['age'] != ''){
        $array[3] = preg_replace("~:.+~", ':' . $_POST['age'], $array[3]);
        file_put_contents($filePath, implode("", $array)    )    ;
    
    }
    echo 'OK';
}

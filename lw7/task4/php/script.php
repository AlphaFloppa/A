<?php
function FindUserById(): bool{                           //вернет false если юзера нет, или параметра нет или он передан некорректно
    if(!isset($_GET["id"])) return false;
    $id = intval(trim($_GET["id"]));
    if(preg_match("[.*\D+.*]", trim($_GET["id"])) == 1 || $id == 0) return false;         //если найден нецифровой символ        
    $users_data = json_decode(file_get_contents("../data/users-data.json"), true);
    foreach($users_data as $i)
    { 
        if($i["id"] == $id)
        {
            echo file_get_contents($users_data[$id-1]["profile-page-path"]);
            return true;   
        }
    }
    return false;
}

$html_home_page = file_get_contents("../home/index.html");
if(!FindUserById()) echo $html_home_page;
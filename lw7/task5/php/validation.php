<?php
    function IsValid(string $json, string $file): string
    {
        $data = json_decode($json, true);
        for($i = 0; $i < count($data); $i++)
        {
            if($file == "posts-data"){
                if($data[$i]["creation-time"] > strtotime("+1 day") || str_contains($data[$i]["creation-time"],
                    ".") || str_contains($data[$i]["creation-time"], "-"))
                    {
                        echo "wrong date in json №" . $data[$i]["id"] . " in " . $file . "<br>";
                        return "error found in " . $file . ", running of \"" . $file . "\" file validation stopped" . "<br>";
                    }
                if(!is_numeric($data[$i]["creation-time"]))
                {
                    echo "wrong type in json" . "in" . $file . "<br>";
                    return "error found in " . $file . ", running of \"" . $file . "\" file validation stopped" . "<br>";
                }
            }
            else if(!is_numeric($data[$i]["id"]))
            {
                echo "wrong type in json" . " in " . $file . "<br>";
                return "error found in " . $file . ", running of \"" . $file . "\" file validation stopped" . "<br>";
            }
        }
        return "Ok" . " in " . $file . "<br>";
    }
    echo IsValid(file_get_contents("../data/users-data.json"), "users-data");
    echo IsValid(file_get_contents("../data/posts-data.json"), "posts-data");

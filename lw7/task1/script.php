<?php
$posts_json_pattern = array(
    array(
        "creation-time" => strtotime("-2 hours"),
        "id" => 1),
    array(
        "creation-time" => strtotime("-3 hours"),
        "id" => 2)
);
$users_json_pattern = array(
    array(
        "name" => "Вася Денисов",
        "id" => "1"),
    array(
        "name" => "Лиза Демина",
        "id" => "2")
);
file_put_contents("post1-data.json", json_encode($posts_json_pattern[0]));
file_put_contents("post2-data.json", json_encode($posts_json_pattern[1]));
file_put_contents("user1-data.json", json_encode($users_json_pattern[0]));
file_put_contents("user2-data.json", json_encode($users_json_pattern[1]));
echo "Ok";
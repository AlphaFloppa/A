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
file_put_contents("data/post1-data.json", json_encode($posts_json_pattern[0]));
file_put_contents("data/post2-data.json", json_encode($posts_json_pattern[1]));
file_put_contents("data/user1-data.json", json_encode($users_json_pattern[0]));
file_put_contents("data/user2-data.json", json_encode($users_json_pattern[1]));
echo "Ok";
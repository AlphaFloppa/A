<?php
$html = file_get_contents("../index.html");
$user_data = json_decode(file_get_contents("../data/user-data.json"), true);
$user_name_regex_pattern = "[class\s*=\s*\"user-name\"\w*>\w*<]";
$posts_count_regex_pattern = "[class\s*=\s*\"posts-count\"\w*>\w*<]";
$user_status_regex_pattern = "[class\s*=\s*\"user-status\"\w*>\w*<]";
$html = preg_replace(
    $user_name_regex_pattern, 
    "class = \"user-name\" data-user-id = \"" . $user_data["id"] . "\">" . $user_data["user-name"] . "<",
    $html,
);
$html = preg_replace(
    $posts_count_regex_pattern, 
    "class = \"posts-count\">" . $user_data["posts-count"] . " поста" . "<",
    $html,
);
$html = preg_replace(
    $user_status_regex_pattern, 
    "class = \"user-status\">" . $user_data["user-status"] . "<",
    $html,
);
echo $html;
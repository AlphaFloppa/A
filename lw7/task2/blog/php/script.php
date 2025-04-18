<?php
$html = file_get_contents("../index.html");
$username_regex_pattern = "[class\s*=\s*\"post-header__user-name\".* data-handled = \"no\">.*<]";
$post_id_regex_pattern = "[class\s*=\s*\"post\d+\".* data-handled = \"no\"]";
$post_creation_time_regex_pattern = "[class\s*=\s*\"post-time\"\s*data-handled\s*=\s*\"no\">.*<]";
$posts_count = preg_match_all("[class\s*=\s*\"post\d+\"]", $html);
$users_data = [
    json_decode(file_get_contents("../data/user1-data.json"), true),
    json_decode(file_get_contents("../data/user2-data.json"), true)
];
$posts_data = [
    json_decode(file_get_contents("../data/post1-data.json"), true),
    json_decode(file_get_contents("../data/post2-data.json"), true)
];

for($i = 0; $i < $posts_count; ++$i)
{
    $html = preg_replace(
        $username_regex_pattern, 
        "class = \"post-header__user-name\" data-handled = \"yes\" data-user-id = " . $users_data[$i]["id"] . ">" . $users_data[$i]["name"] . "<", 
        $html,
        1);
    $html = preg_replace(
        $post_id_regex_pattern,
        "class = \"post". $i + 1 . "\"" . "data-handled = \"yes\"" . "data-post-id = \"" . $posts_data[$i]["id"] . "\"",
        $html,
        1
    );
    $html = preg_replace(
        $post_creation_time_regex_pattern,
        "class = \"post-time\" data-handled = \"yes\">" . $posts_data[$i]["creation-time"] . "<",
        $html,
        1
    );
}
echo $html;
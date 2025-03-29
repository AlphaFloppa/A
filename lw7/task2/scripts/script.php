<?php
$html = file_get_contents("../index.html");
$username_regex_pattern = "[class = \"post-header__user-name\".* data-handled = \"no\".*>.*</]";
$posts_count = preg_match_all("[class\s*=\s*\"post\d+\"]", $html);
$users_data = [
    json_decode(file_get_contents("../user1-data.json"), true),
    json_decode(file_get_contents("../user2-data.json"), true)
];
$posts_data = [
    json_decode(file_get_contents("../post1-data.json"), true),
    json_decode(file_get_contents("../post2-data.json"), true)
];

$html = str_replace("../", 
            "../../",
            $html 
);
$html = str_replace(
            "scripts/", 
            "",
            $html
);
$html = str_replace(
    "styles/", 
    "../styles/",
    $html
);
for($i = 0; $i < $posts_count; ++$i)
{
    $html = preg_replace($username_regex_pattern, 
            "class = \"post-header__user-name\" data-handled = \"yes\" id = " . $users_data[$i]["id"] . ">" . $users_data[$i]["name"] . "</", 
            $html,
            1);
}
echo $html;
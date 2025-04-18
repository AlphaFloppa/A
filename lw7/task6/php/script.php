<?php
function DefineEnding($count): string
{
    if(($count%100 <= 15 && $count%100 >=11)) return "постов";
    switch($count%10)
        {
            case 1: return"пост";
            case 2:
            case 3:
            case 4: return "поста";
            default: return"постов";
        }
}

if(isset($_GET["id"])) 
    $id = $_GET["id"];
$data = json_decode(file_get_contents("../data/users-data.json"), true);
$user_avatar = $data[$id-1]["user-avatar-path"];
$user_name = $data[$id-1]["user-name"];
$user_status = $data[$id-1]["user-status"];
$user_posts_preview = $data[$id-1]["posts-preview-imgs-path"];
$posts_count = count($user_posts_preview);
$posts_count_describe = DefineEnding($posts_count);
$posts_preview_links_list = "";
foreach($user_posts_preview as $i)
    $posts_preview_links_list .= "<img src = \"" . $i . "\" alt = \"Try Ctrl-R\" class = \"post-img\">";
include "../user-profile-tpl/index.phtml";
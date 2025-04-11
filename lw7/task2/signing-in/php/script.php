<?php
$html = file_get_contents("../index.html");
$UI_data = json_decode(file_get_contents("../data/UI-data.json"), true);
$suggestion_text_regex_pattern = "[class\s*=\s*\"format-help-text\"\w*>\w*<]";
$submit_btn_value_regex_pattern = "[class\s*=\s*\"continue-button\"\s*value\s*=\s*\"\w*\"]";
$html = preg_replace(
    $suggestion_text_regex_pattern, 
    "class = \"format-help-text\">" . $UI_data["email-format-suggest"] . "<",
    $html,
);
$html = preg_replace(
    $submit_btn_value_regex_pattern, 
    "class = \"continue-button\" value = \"" . $UI_data["submit-button-text"] . "\"",
    $html,
);
echo $html;
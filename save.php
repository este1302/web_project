<?php
    if($_SERVER['REQUEST_METHOD']=='POST'){
        print_r("saving....");
        $file_name = $_POST["file_name"].".txt";
        $content = $_POST["content"];

        $myfile = fopen($file_name, "w") or die("Unable to open file!");
        fwrite($myfile, $content);
        fclose($myfile);

    }
?>
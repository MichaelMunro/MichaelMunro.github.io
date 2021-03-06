<?php
session_start();
    require_once "default.php"
?>
<?php

    $req = file_get_contents('php://input');
    //Converts the contents into a PHP Object
    $req_obj = json_decode($req);

    $typeID = $req_obj->typeData;
    $degID = $req_obj->degData;
    $uniID = $req_obj->uniData;
    $dateID = $req_obj->dateData;
    $studyID = $req_obj->studyData;
    
    $userid = logged_in_user();
		
    $conn = mysqli_connect($DB_HOST,$DB_USER,$DB_PASSWORD,$DB_NAME);
    $query = "INSERT INTO Qualification (qualification_type,qualification_name,end_date,finished) VALUES (?,?,?,?);"; 


    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt,"sssd",$typeID,$degID,$dateID,$studyID);

    $success = mysqli_stmt_execute($stmt);
    $results = mysqli_stmt_get_result($stmt);
    $last_id = mysqli_insert_id($conn);

    $query2 = "SELECT University_id FROM University WHERE University_Name = ?;";
    $stmt2 = mysqli_prepare($conn,$query2);
    mysqli_stmt_bind_param($stmt2,"s",$uniID);
    $success2 = mysqli_stmt_execute($stmt2);
    $results2 = mysqli_stmt_get_result($stmt2);
    $row2 =mysqli_fetch_assoc($results2);
    $unID = $row2['University_id'];

    $query1 = "INSERT INTO Study(user_id,qualification_id,University_id) VALUES (?,?,?);";
    $stmt1 = mysqli_prepare($conn, $query1);
    mysqli_stmt_bind_param($stmt1,"ddd", $userid,$last_id,$unID);

    $success1 = mysqli_stmt_execute($stmt1);
    $results1 = mysqli_stmt_get_result($stmt1);
      
		


    

    
?>
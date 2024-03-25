<?php
//I should put this in it's own file...
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "database";

try {
    //Creating the connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    //Enabling error mode
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Looping through the news card table
    for ($i = 1; $i <= 3; $i++) {
        $sql = "SELECT `heading`, `paragraph`, `tag`, `type`, `publisher`, `date_published`, `img` 
        FROM news 
        WHERE `news_id` = :news_id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':news_id', $i);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        //echo'ing the card
        echo '
        <div class="news__card n-'.$row['type'].'">
            <div class="news__card__image">
                <a href="#" class="tooltip">'.$row['tag'].'</a>
                <div class="">
                    <a><img src="'.$row['img'].'" alt="News image" /> </a>
                </div>
            </div>
            <div class="news__card__info">
                <h3 class="news__card__info__heading">
                    <span class="news__card__info__h3">'.$row['heading'].'
                    </span>
                    <span class="news__card__info__time"></span>
                </h3>
                <p>
                    '.$row['paragraph'].'
                </p>
                <a class="btn"> Read More </a>
                <div class="news__card__creator">
                    <img src="'.$row['img'].'" alt="Netmatters user profile picture" />
                    <div class="news__card__creator__info">
                        <strong>Posted by '.$row['publisher'].'</strong> <br />
                        '.$row['date_published'].'
                    </div>
                </div>
            </div>
        </div>';
    }
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
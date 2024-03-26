<?php
//I should put this in it's own file...
$env = parse_ini_file('./.env');
$servername = $env["DB_HOST"];
$dbname = $env["DB_NAME"];
$username = $env["DB_USER"];
$password = $env["DB_PASSWORD"];
$port = $env["DB_PORT"];

try {
    //Creating the connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;port=$port", $username, $password);

    //Enabling error mode
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Looping through the news card table
    for ($i = 1; $i <= 3; $i++) {
        $sql = "SELECT `heading`, `paragraph`, `tag`, `type`, `publisher`, `date_published`, `news_img`, `publisher_img`, `read_time`
        FROM news 
        WHERE `news_id` = :news_id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':news_id', $i);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        //Changing date format:
        $date_published = date('j F Y', strtotime($row['date_published']));
        
        //Adding read-time if value exists (prepending it with a hython)
        $read_time = '';
        if($row['read_time'] != null) {
            $read_time = '- '. $row['read_time'];
        }

        //echo'ing the card
        echo '
        <div class="news__card n-'.$row['type'].'">
            <div class="news__card__image">
                <a href="#" class="tooltip">'.$row['tag'].'</a>
                <div class="">
                    <a><img src="'.$row['news_img'].'" alt="News image" /> </a>
                </div>
            </div>
            <div class="news__card__info">
                <h3 class="news__card__info__heading">
                    <span class="news__card__info__h3">'.$row['heading'].'
                    </span>
                    <span class="news__card__info__time">'

                    
                    .$read_time.
                    
                    '</span>
                </h3>
                <p>
                    '.$row['paragraph'].'
                </p>
                <a class="btn"> Read More </a>
                <div class="news__card__creator">
                    <img src="'.$row['publisher_img'].'" alt="Netmatters user profile picture" />
                    <div class="news__card__creator__info">
                        <strong>Posted by '.$row['publisher'].'</strong> <br />
                        '.$date_published.'
                    </div>
                </div>
            </div>
        </div>';
    }
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
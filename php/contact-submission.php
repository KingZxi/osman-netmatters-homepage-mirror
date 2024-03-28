<?php
//Load environment variables from .env file
$env = parse_ini_file('../.env');
$servername = $env["DB_HOST"];
$dbname = $env["DB_NAME"];
$username = $env["DB_USER"];
$password = $env["DB_PASSWORD"];
$port = $env["DB_PORT"];

//Set PDO options
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO("mysql:host=$servername;dbname=$dbname;port=$port", $username, $password, $opt);

//Get form data
$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$message = $_POST['message'];

//Validaition
$errors = [];
if (empty($name)) $errors[] = 'Name is required.';
if (empty($email)) {
    $errors[] = 'Email is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email is not valid.';
}
if (empty($telephone)) $errors[] = 'Telephone is required.';
if (empty($message)) $errors[] = 'Message is required.';
if (strlen($name) > 255) {
    $errors[] = 'Name is too long.';
}
if (strlen($email) > 255) {
    $errors[] = 'Email is too long.';
}
if (strlen($company) > 255) {
    $errors[] = 'Company name is too long.';
}
if (strlen($telephone) !== 11 || !ctype_digit($telephone)) {
    $errors[] = 'Phone number is invalid.';
}
if (strlen($message) > 1000) {
    $errors[] = 'Message is too long.';
}
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['errors' => $errors]);
    exit();

}

//SQL execution
$sql = "INSERT INTO contact (name, company, email, tel, message) VALUES (?, ?, ?, ?, ?)";
$stmt= $pdo->prepare($sql);
$stmt->execute([$name, $company, $email, $telephone, $message]);
echo json_encode(['success' => 'Message sent successfully']);
?>
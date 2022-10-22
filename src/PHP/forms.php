<?php
    class Login
    {
        public $email;
        public $senha;

        public function Print(){
            echo "<h1>E-mail: {$this->email}</h1>";
            echo "<h1>E-mail: {$this->senha}</h1>";
        }
    }

    $obj = new Login();

    $obj->email = "Teste1";
    $obj->senha = "Teste2";

    $obj->Print();
?>
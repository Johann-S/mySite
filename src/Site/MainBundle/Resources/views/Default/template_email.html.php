<html>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
        <style>
            td {
                text-align: center;
            }
            h3 {
                margin-bottom: 15px;
            }
            .table {
                margin-left: auto;
                margin-right: auto;
                width: 600px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <h3>Nouvelle demande de contact</h3>
                <table class="table table-bordered">
                    <tr>
                        <td>Email :</td>
                        <td><?php echo $email; ?></td>
                    </tr>
                    <tr>
                        <td>Objet :</td>
                        <td><?php echo $objet; ?></td>
                    </tr>
                    <tr>
                        <td>Message :</td>
                        <td>
                            <p><?php echo $message; ?></p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
</html>
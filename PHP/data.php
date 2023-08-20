<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Confirmación de datos</title>

        <link rel="icon" href="imagenes/monitor.ico">
        <link rel="stylesheet" href="../css/styles.css">
        
    </head>
    <body>
        <main>
            <div>
                <p align=center>&nbsp;</p>
                <h2>Archivo PHP</h2>
                <h2>La siguiente información ha sido enviada:</h2>
            </div>
            <section class="sectionFlex">
                <article class="articleFlex">
                    <table>
                        <tr>
                            <th>Campo de formulario</th>
                            <th>Valor de campo</th>
                        </tr>
                        <?php 
                            $concat = '';
                            foreach ($_POST as $clave=>$valor)
                            {
                                //Concatenamos las tablas en una variable, también podriamos hacer el "echo" directamente
                                $concat .= '<tr>';
                                $concat .= '<td>' . $clave .'</td>';
                                $concat .= '<td>' . $valor .'</td>';
                                $concat .= '</tr>';
                            }

                            echo $concat;
                        ?>
                    </table>

                    <script language="javascript">
                        function cerrarse(){
                        close("show_data.html");
                        }
                    </script>
                    <button id="close" class="boton" onclick="cerrarse()">Cerrar</button>
                </article>
            </section>
        </main>
    </body>
</html>
<?php
				//Destinatario
				$mail_destinatario = 'mmeza@licorne.mx';
				$subject = 'Solicitud Formulario Solares Energia';

				if(isset($_POST['enviar'])) {
					$headers .= "From: ".$_POST['email']. "";
					if ( mail ($mail_destinatario, $subject,
						"Nombre y apellidos : ".$_POST['name']."
						Email: ".stripcslashes ($_POST['email'])."
						Teléfono : ".$_POST['telefono']."
						Mensaje : ".stripcslashes ($_POST['message']),
						$headers )) echo '
								<h1>¡GRACIAS POR CONTACTARNOS!</h1>
				                    <h4 class="page">En breve nos comunicamos contigo.</h4>'
							;


					else echo '
						Error al enviar
					';
				}
?>
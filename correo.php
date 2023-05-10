<?php   		
                var_dump($_POST);
				//Destinatario
				$mail_destinatario = 'mmeza@licorne.mx';
				$subject = 'Solicitud Formulario Solares Energia';
				$headers .= "From: ".$_POST['email']. "";
				
				
				
				$cuerpo = "Nombre y apellidos : ".$_POST['nombre']."
						Email: ".stripcslashes ($_POST['email'])."
						Teléfono : ".$_POST['telefono']."
						Mensaje : ".stripcslashes ($_POST['mensaje']);
						
						
						
				
					if ( mail ($mail_destinatario, $subject,$cuerpo,$headers )) 
						
						echo '
								<h1>¡GRACIAS POR CONTACTARNOS!</h1>
				                    <h4 class="page">En breve nos comunicamos contigo.</h4>'
							;


					else echo '
						Error al enviar
					';
			
?>
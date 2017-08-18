<?php

	function validate_required($fields, $data_array){
		$result = array();
		foreach ($fields as $field) {
			if(! (isset($data_array[$field])  && !empty($data_array[$field]) ) ){
				$result[] = $field . ' es Requerido';
			} else {
				if($field === 'email' && !filter_var($data_array[$field], FILTER_VALIDATE_EMAIL) ){
					$result[] = $field . ' no es un correo válido';
				}
			}
		}
		if(empty($result)){
			$result = TRUE;
		}
		return $result;
	}

	/**
	 * Sends an email, via php mail() OR SMTP
	 * @param $from_mail string 	Mail where mail comes out from (Can be different than real email)
	 * @param $from_name string 	Name of $from_mail owner
	 * @param $to string 			Email(s)s where mail will be send to. Can be separated by ,
	 * @param $html_data string 	HTML to be send on mail
	 * @param $use_mail boolean 	TRUE to send mail via PHP mail(). False to use SMTP (Username and password required)
	 * @return boolean|string 		TRUE if mail was send. FALSE or string with errors if mail was not send
	 */
	function send_mail($from_mail, $from_name, $to, $subject, $html_mail_data, $use_mail = false, $cc_all = ''){
		if($use_mail){
		    $headers  = "MIME-Version: 1.0" . "\r\n";
		    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
		    $headers .= "From: " . $from_name . " <" . $from_mail . ">\r\n";
		    $headers .= "X-Mailer: PHP/" . phpversion()."\r\n";
	    	return mail($to, $subject, $html_mail_data, $headers);
		} else {
			require_once "Mail.php";
			$mail_config = array(
				'username' => '',
				'password' => ''
			);

			$headers = array(
				'MIME-Version' => '1.0',
				'Content-type' => 'text/html; charset=UTF-8',
				'From' => $from_name . " <" . $from_mail . ">",
				'Reply-To' => $from_name . " <" . $from_mail . ">",
				'To' => $to,
				'Subject' => $subject
			);

			if(!empty($cc_all)){
				$headers = array_merge(
					$headers,
					array('CC'	=> $cc_all)
				);
			}
			$smtp = Mail::factory('smtp', array(
				'host' => 'ssl://smtp.gmail.com',
				'port' => '465',
				'auth' => true,
				'username' => $mail_config['username'],
				'password' => $mail_config['password']
			));
			$mail = $smtp->send($to, $headers, $html_mail_data);
			if (PEAR::isError($mail)) {
				return $mail->getMessage();
			} else {
				return true;
			}
		}
	}


	/**
	 * Returns a basic HTML template with mail data
	 * @param $header_title string 		Title to use for mail's header
	 * @param $form_headers array 		
	 */
	function get_html_table($header_title, $form_headers, $data_var){
		$html = '' .
		'<html>' . 
			'<body style="margin:0; padding:0;">' .
				'<h1>' . $header_title . '</h1>';

			$html .= '<strong>Fecha contacto</strong>' . date("d/m/Y H:i") . '<br/>';
			foreach($form_headers as $key => $value){
				$html .= '<strong>' . $form_headers[$key] . ':</strong> ' . (isset($data_var[$key]) && !empty($data_var[$key]) ? $data_var[$key] : '') . ' <br/>';
			}
        $html.= "</body></html>";

        /**
         * Additional HTML to send shall be put here...
         */
        return $html;

	}
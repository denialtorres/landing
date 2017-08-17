<?php
	require_once('../functions.php');

	$r_array = 'empty request';

	$form_fields = array(
		'name' => 'Nombre',
		'telephone' => 'Telefono',
		'mail' => 'Correo',
		'availability' => 'Disponibilidad'
	);

	$INPUT_PARAMS = json_decode(file_get_contents('php://input'), true);

	/**
	 * @todo Set subject
	 */
	$da_subject = 'Contacto Web Cordoba';
	$send_to = 'nestor@masfusion.com';


	$required_val = validate_required(array_keys($form_fields), $INPUT_PARAMS);

	if($required_val === TRUE) {
		$html = get_html_table($da_subject, $form_fields, $INPUT_PARAMS);
		$result = send_mail(
			'contacto@dimcasasydepas.com', 
			'Contacto Cordoba', 
			$send_to,
			$da_subject,
			$html,
			true
		);
		if($result === TRUE){
			$r_array = 'true';
		} else {
			$r_array = $result;
		}
	} else {
		$r_array = implode('\n', $required_val);
	}
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: text/plain');
	echo $r_array;

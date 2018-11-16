function changeSizes(){
	$parent_block = $('.parent-container');
	$input_block = $('.input-block');
	console.log('Родительский блок: ' + $parent_block.width() + ' пикселей');

	if($parent_block.width() >= 1600){
		$input_block.css({'width':'480px', 'margin-left':'32px'});
	}

	if($parent_block.width() >= 1024 && $parent_block.width() <= 1599){
		$input_block.css({'width':'30%', 'margin-left':'2%'});
	}

	if($parent_block.width() >= 640 && $parent_block.width() <= 1023){
		$input_block.css({'width':'44%', 'margin-left':'4%'});
	}

	if($parent_block.width() <=639){
		$input_block.css({'width':'80%', 'margin-left':'10%'});
	}
}

function checkSurname(str, element){
	var regex = "^\s*[A-ZА-Я][a-zа-я]+('[a-zа-я]+|-[A-ZА-Я][a-zа-я]+)?\s*$";
	//var regex = "^\s*[A-ZА-Я][a-zа-я]+('[a-zа-я]+|-[A-ZА-Я][a-zа-я]+)?\s*$";
	if(str.match(regex)){
		console.log('correct');
		element.find('.error-text').css({'display':'none'});
	}
	else{
		console.log('NOT correct');
		element.find('.error-text').css({'display':'block'});
		element.find('.error-text').html('Фамилия введена некорректно!');
	}
}

function checkName(str, element){
	//var regex = "/^([А-ЯЁ]{1}[а-яё]{29})|([A-Z]{1}[a-z]{29})$/u";
	var regex = "/^[а-яёa-z]+$/iu";
	if(str.match(regex)){
		console.log('correct');
		element.find('.error-text').css({'display':'none'});
	}
	else{
		console.log('NOT correct');
		element.find('.error-text').css({'display':'block'});
		element.find('.error-text').html('Имя введено некорректно!');
	}
}

$(document).ready(function(){
	changeSizes();
});

$( window ).resize(function() {
	changeSizes();
});
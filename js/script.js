$(document).ready(function(){
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
});
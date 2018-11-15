$(document).ready(function(){
	$parent_block = $('.parent-container');
	$input_block = $('.input-block');
	console.log('Родительский блок: ' + $parent_block.width() + ' пикселей');

	if($parent_block >= 1600){
		$input_block.css({'width':'480px', 'margin-left':'32px'});
	}

	if($parent_block >= 1024 && $parent_block <= 1599){
		$input_block.css({'width':'30%', 'margin-left':'2%'});
	}
});
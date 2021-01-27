$(function(){


	
	
	var val = 1;
	var buttonNum = 0;
	var buttonValores = ['Registrar','Avançar','Concluir'];
	var botao = $('#registre-se p').html(buttonValores[buttonNum]);

	$('#registre-se').click(function(){
		
			
			if (primeiraValidaCampo() == true) {
				
				val +=1;
			}
	
	
		if(val == 1){
		
			
			$('.dados-da-empresa').fadeIn(1500);
			$('.botao').fadeIn();
			buttonNum = 1;
			$('#registre-se p').html(buttonValores[buttonNum]);

			
		}if(val == 2){
			$('.dados-da-empresa').css('display','none');
			$('.dados-do-usuario').fadeIn(1500);

			if(razaoSocial == false){
			console.log('estoiu na razao social');
			return false;
				
			}else if(razaoSocial == true){
				console.log('Passei');
			}

		}if(val == 3){
			$('.dados-do-usuario').css('display','none');
			$('.conta-receber').fadeIn(1500);
		}if(val == 4){
			$('.conta-receber').css('display','none');
			$('.documentos-digitalizados').fadeIn(1500);
			buttonNum = 2;
			$('#registre-se p').html(buttonValores[buttonNum]);
			
		}


	});

	//--------------- Avançar Campo -----------------------//
	function primeiraValidaCampo(){
		var razaoSocial = $('input[name=razaoSocial]').val();
		if(razaoSocial == ''){
			aplicarCampoInvalido($('input[name=razaoSocial'));
			return false;
		}if(verificarCNPJ() == false){
			aplicarCampoInvalido($('input[name=cnpj'));
			return false;
		}if(verificaDataAbertura() == false){
			aplicarCampoInvalido($('input[name=aberturadata'));
			return false;
		}if(verificaRamoDeNegocio() == false){
			aplicarCampoInvalido($('input[name=category'));
			return false;
		}if(verificaEmail() == false){
			aplicarCampoInvalido($('input[name=email]'));
			return false;
		}if(verificaTelefone() == false){
			aplicarCampoInvalido($('input[name=phone]'));
			return false;
		}if(verificaCEP() == false){
			aplicarCampoInvalido($('input[name=CEP]'));
			return false;
		}if(verificaFaturamentoCartaoDebitoFisico() == false){
			aplicarCampoInvalido($('input[name=Faturamento]'));
			return false;
		}if(verificaFaturamentoCartaoCreditoFisico() == false){
			aplicarCampoInvalido($('input[name=Faturamento1]'));
			return false;
		}
		if(verificaFaturamentoCartaoDebitoOnline() == false){
			aplicarCampoInvalido($('input[name=Faturamento0]'));
			return false;
		}if(verificaFaturamentoCartaoCreditoOnline() == false){
			aplicarCampoInvalido($('input[name=Faturamento2]'));
			return false;
		} if (verificaBoletosMensais() == false) {
			aplicarCampoInvalido($('input[name=code]'));
			return false;
		}
		else{
			return true;
		}
	}


	//--verifica os valores corretamente pra poder dar continuidade no preenchimento---/
	function verificarCNPJ(){
		var cnpj = $('input[name=cnpj]').val();
		if(cnpj == '')
			return false;
		
		if (!cnpj.match(/^([0-9]{2}[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2})$/)) {
			return false;
		}
	}

	function verificaDataAbertura(){
		var dataAbertura = $('input[name=aberturadata]').val();
		if(dataAbertura == ''){
			return false;
		
		}
	}
	function verificaRamoDeNegocio(){
		var ramoDeNegocio = $('input[name=category]').val();
		if(ramoDeNegocio == '')
			return false;	
	}
	function verificaEmail(){
		var email = $('input[name=email]').val();
		if(email == '')
			return false;

		if(!email.match(/^([a-zA-Z0-9-_.]{1,})+@+([a-zA-Z]{1,})+.c+([a-zA-Z.]{2,})$/)){
			return false;
		}
	}
	function verificaTelefone(){
		var telefone = $('input[name=phone]').val();
		if(telefone == '')
			return false;
		if(!telefone.match(/^([0-9]{11})$/)){
			return false;
		}
	}
	function verificaCEP(){
		var CEP = $('input[name=CEP]').val();
		if(CEP == '')
			return false;

		if(!CEP.match(/^([0-9]{8})$/)){
			return false;
		}
	}
	function verificaFaturamentoCartaoDebitoFisico(){
		var FaturamentoCartaoDebitoFisico = $('input[name=Faturamento]').val();
		if(FaturamentoCartaoDebitoFisico == '')
			return false;
		if(!FaturamentoCartaoDebitoFisico.match(/^([0-9]{4,})$/)){
			return false;
		}
	}

	function verificaFaturamentoCartaoCreditoFisico(){
		var FaturamentoCartaoCreditoFisico = $('input[name=Faturamento1]').val();
		if(FaturamentoCartaoCreditoFisico == '')
			return false;
		if(!FaturamentoCartaoCreditoFisico.match(/^([0-9]{4,})$/)){
			return false;
		}
	}
	function verificaFaturamentoCartaoDebitoOnline(){
		var FaturamentoCartaoDebitoOnline = $('input[name=Faturamento0]').val();
		if(FaturamentoCartaoDebitoOnline == '')
			return false;
		if(!FaturamentoCartaoDebitoOnline.match(/^([0-9]{4,})$/)){
			return false;
		}
	}

	function verificaFaturamentoCartaoCreditoOnline(){
		var FaturamentoCartaoCreditoOnline = $('input[name=Faturamento2]').val();
		if(FaturamentoCartaoCreditoOnline == '')
			return false;
		if(!FaturamentoCartaoCreditoOnline.match(/^([0-9]{4,})$/)){
			return false;
		}
	}

	function verificaBoletosMensais(){
		var boletosMensais = $('input[name=code]').val();
		if(boletosMensais == '')
			return false;

		if (!boletosMensais.match(/^([0-9]{1,})$/)) {
			return false;
		}
	}
	

	

	//--------------Validar Campo Invalido ------------------------//

	function aplicarCampoInvalido(el){
		el.css('border','2px solid red');
	}

	//---------Reseta Campo--------//
	function resetarCampoInvalido(el){
		el.css('border', '1px solid #ccc');
	}

	$('input[type=text]').focus(function(){
 		resetarCampoInvalido($(this));
 	})


	
	

})
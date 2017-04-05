var app = angular.module('testeFagron', ['ngMaterial']);
app.controller('cadastroPessoaController', function($scope){
	//variaveis
	$scope.editando = false;
	$scope.pessoa = {};
	$scope.pessoa.id = new Date().getTime();
	$scope.pessoas = [{id:"1491370176810", nome:"Carlos", profissao:"Barbeiro"},
	                  {id:"149176810", nome:"Joao", profissao:"Barbeiro"}];
	$scope.profissoes = ["Barbeiro", "Açougueiro", "Programador", "Outro"];
	
	//metodos
	$(document).ready(function () {
		montaTabela();
	});
	
	 function montaTabela() {
         var columns = [
                     { text: 'id', datafield: 'id' },
                     { text: 'Nome', datafield: 'nome' },
                     { text: 'Idade', datafield: 'idade' },
                     { text: 'Profissao', datafield: 'profissao' }
                 ];
         var rows = $scope.pessoas;
         
         var source =
         {
             datatype: "json",
             datafields: [
                 { name: 'id', type: 'string' },
                 { name: 'nome', type: 'string' },
                 { name: 'idade', type: 'string' },
                 { name: 'profissao', type: 'string' }
             ],
             id: 'id',
             localdata: rows
         };
         
         var dataAdapter = new $.jqx.dataAdapter(source);
         
         $("#jqxgrid").jqxGrid(
         {
             width: 670,
             source: dataAdapter,
             sortable: true,
             filterable: true,
             columnsresize: true,
             columns: columns
         });
     }
	
	$scope.inserir = function(){ 
		console.log($scope.pessoa.nascimento);
		
		$scope.pessoas.push(Object.assign({}, $scope.pessoa));
		$scope.pessoa = {};
		$scope.pessoa.id = new Date().getTime();
		montaTabela();
	}
	
	$scope.excluir = function(idPessoa){
		for (var i = 0; i < $scope.pessoas.length; i++) {
			if(idPessoa == $scope.pessoas[i].id){
				$scope.pessoas.splice(i,1);
			}
		}
	}
	
	$scope.alterar = function(){
		for (var i = 0; i < $scope.pessoas.length; i++) {
			if($scope.pessoa.id == $scope.pessoas[i].id){
				$scope.pessoas[i] = Object.assign({}, $scope.pessoa);
			}
		}
		$scope.pessoa = {};
		$scope.pessoa.id = new Date().getTime();
	}
	
	$scope.selecionar = function(pessoa){
		$scope.pessoa = Object.assign({}, pessoa);
		$scope.editando = true;
	}
});
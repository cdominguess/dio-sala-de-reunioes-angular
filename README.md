# dio-sala-de-reunioes-angular

Projeto criado para ser o frontend para o projeto de mesmo nome de uma API em Java  
&nbsp;  
&nbsp;  

# Passos para a criação do projeto, assumindo que não tenha o Angular instalado  
&nbsp;

## Instalar angular 9
```
npm install -g @angular/cli@9.0.0-rc.7
```  
&nbsp;

## Criar projeto
```
ng new dio-sala-de-reunioes-angular
```  
&nbsp;

## Criar o Service chamado "sala"
```
ng g s sala
```  
&nbsp;

## Criar os seguintes componentes (a nomenclatura não está tão coerente porque estou basicamente seguindo o que a instrutora da DIo fala no vídeo e já melhorando os nomes dos componentes, inclusive)
```
ng g c criar-sala  
ng g c atualizar-sala  
ng g c detalhes-sala  
ng g c listar-sala
```  
&nbsp;

## Instalar o bootstrap e jquery atuais

npm install bootstrap jquery --save  
&nbsp;

## Atualizar no angular.json a referência para o bootstrap e jquery

```json
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
    "node_modules/jquery/dist/css/jquery.min.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.js"
]
```  
&nbsp;

## Após implementações, executar o projeto:
```
ng serve
```  


/** Técnicas de solicitação de dados do Servidor utilizando AJAX */

//Abaixo as 5 técnicas gerais de solicatação de recurso
//1 - GET
//2 - POST
//3 - PUT
//4 - DELETE
//5 - PATCH
//1 - GET
$.ajax({
    type: 'GET',
    url: 'http://localhost:8080/usuarios',
    success: function(data) {
        console.log(data);
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
            }
            });

            //2 - POST
            $.ajax({
                type: 'POST',
                url: 'http://localhost:8080/usuarios',
                data: {
                    "nome": "João",
                    "idade": 25
                    },
                    success: function(data) {
                        console.log(data);
                        },
                        error: function(xhr, status, error) {
                            console.log(xhr.responseText);
                            }
                            });



                            //3 - PUT
                            $.ajax({
                                type: 'PUT',
                                url: 'http://localhost:8080/usuarios/1',
                                data: {
                                    "nome": "João",
                                    "idade": 25
                                    },
                                    success: function(data) {
                                        console.log(data);
                                        },
                                        error: function(xhr, status, error) {
                                            console.log(xhr.responseText);
                                            }
                                            });
                                            //4 - DELETE
                                            $.ajax({
                                                type: 'DELETE',
                                                url: 'http://localhost:8080/usuarios/1',
                                                success: function(data) {
                                                    console.log(data);
                                                }});


                                                //XMLHttpRequest
                                                var xhr = new XMLHttpRequest();
                                                xhr.open('GET', 'http://localhost:8080/usuarios', true);
                                                xhr.onload = function() {
                                                    if (xhr.status >= 200 && xhr.status < 300) {
                                                        console.log(xhr.responseText);
                                                        }
                                                        }
                                                        xhr.send();


                                                        /**Outro exemplo */

                                                    var url = '/data.php';
                                                    var params = [
                                                        'id-37733',
                                                        'limit=20'
                                                    ];
                                                    var req = new XMLHttpRequest()
                                                    req.onreadystatechange = function(){
                                                        if(req.readyState === 4){
                                                            var responseHeaders = req.getAllResponseHeaders(); //pegue os cabeçalhos de reposta
                                                            var data = req.responseText; //pegue os dados
                                                            //processe os dados aqui...
                                                            
                                                        }
                                                    }
                                                    req.open('GET', url + '?' + params.join('&'), true);
                                                    req.setRequestHeader('X-Request-With', 'XMLHttpRequest'); //define um cabeçalho de solicitação
                                                    req.send(); //envia a solicitação


                                                    /** É possível interagir com a resposta do servido conforme ela 
                                                     * é transferida escutando por um readyState. Isso é conhecido como
                                                     * streaming...
                                                     * Veja o código abaixo
                                                     */

                                                    req.onreadystatechange = function(){
                                                        if(req.readyState === 3){//alguns, mas não todos , os dados foram recebidos
                                                            var dataSoFar = req.responseText;
                                                        }else if(req.readyState === 4){ //todos os dados foram recebidos
                                                            var data = req.responseText;
                                                        }
                                                    }

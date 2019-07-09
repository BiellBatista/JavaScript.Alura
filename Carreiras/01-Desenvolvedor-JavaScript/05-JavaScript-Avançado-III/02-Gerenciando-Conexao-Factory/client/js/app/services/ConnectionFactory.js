var ConnectionFactory = (function () {
    const stores = ['negociacoes']; //o const bloqueia a reatribuição, mas não a imutabilidade
    const version = 4;
    const dbName = 'aluraframe';

    var connection = null;
    var close = null;

    //devo dar o return da Classe ConnectionFactory para poder acessá-la
    return class ConnectionFactory {
        constructor() {
            throw new Error('Não é possível criar instâncias de ConnectionFactory.');
        }

        static getConnection() {
            return new Promise((resolve, reject) => {
                let openRequest = window.indexedDB.open(dbName, version);

                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._createStores(e.target.result);
                };
                
                openRequest.onsuccess = e => {
                    if(!connection)
                    {
                        connection = e.target.result;
                        //associando o closse com a connection (o this é a connection)
                        close = connection.close.bind(connection);
                        /**
                         * o close de baixo é feito para testar a API reflect
                         */
                        // close = connection.close;
                        connection.close = function () {
                            throw new Error('Você não pode fechar diretamente a conexão.');
                        }; //Monkey Patch é a ação de alterar uma função de uma biblioteca. Neste caso, estou substituindo o método do close() da connection
                    }

                    resolve(connection);
                };
                
                openRequest.onerror = e => {
                    console.log(e.target.error);
                    reject(e.target.error.name)
                };
            })
        }

        static closeConnection() {
            if(connection) {
                close();
                //aqui, logo abaixo, é usado sem o bind.
                // Reflect.apply(close, connection, []);
                connection = null;
            }
        }

        static _createStores(connection) {
            stores.forEach(store => {
                if (connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store);
                connection.createObjectStore(store, { autoIncrement: true });
            });
        }
    }
})();

/**
 * Quando eu crio uma função anonima (exemplo de cima) e coloco ela dentro de um paretenses
 * e apos o encapsulamento do paretenteses, fecho e abro outro par de paresentes (function(){})();
 * estou criando uma funcao alto invocada. Ela será carregada e ao mesmo tempo executada.
 * Estou armazenando o resultado da funcao alto invocada em uma variável global
 */

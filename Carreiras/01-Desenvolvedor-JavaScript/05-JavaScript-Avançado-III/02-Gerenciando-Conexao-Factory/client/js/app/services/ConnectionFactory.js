var ConnectionFactory = (function () {
    var stores = ['negociacoes'];
    var version = 4;
    var dbName = 'aluraframe';
    var connection = null;

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
                        connection = e.target.result;
                    resolve(connection);
                };
                
                openRequest.onerror = e => {
                    console.log(e.target.error);
                    reject(e.target.error.name)
                };
            })
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

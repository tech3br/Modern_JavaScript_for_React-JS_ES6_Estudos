# Array Functions: map()

Esta funcao faz com que percorra o array e que possamos passar uma funcao de retorno para executar alguma operacao em cada item do array. Os valores sao atualizados e retornados pela funcao de retorno (callback) criando um novo array.

syntax: 

arr.map((item) => {// o corpo da funcao de callback aqui})

Obs.: em uma iteracao com map, muitas vezes devemos passar a key, pois para cada item do array deve haver um identificador unico no Array. o identificador pode ser um id, hash, numero do item do array, etc.
import { useEffect } from 'react';

export default function MarketList() {
  useEffect(() => {
    loadItens();
  }, [])


  function loadItens() {
    // BUSCA AS INFORMAÇÕES NA API FAKE
    // SALVA O VALOR NO ESTADO
  }

  function handleAddItem() {
    // CRIAR O OBJETO DO ITEM
    // CHAMA A API PARA ADICIONAR O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }

  function handleRemoveItem(id: string) {
    // FILTRA O ESTADO E REMOVE O ITEM
    // CHAMA A API PARA REMOVER O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }

  function handleUpdateItem(id: string) {
    // CRIA O OBJETO DO ITEM
    // CHAMA A API PARA ATUALIZAR O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }

  return (
    <h1>MarketList</h1>
  );
}

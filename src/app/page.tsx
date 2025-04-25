'use client'
import { FormEvent, useEffect, useState } from 'react';
import axios, { Axios } from 'axios'
import { v4 as uuid } from 'uuid'

export default function MarketList() {
  useEffect(() => {
    loadItens();
  }, [])

  

  async function loadItens() {
    const response = await axios.get("http://localhost:3001/itens")
    
  }

  async function handleAddItem(event: FormEvent) {
    event.preventDefault()

    const itens = {
      id: uuid(),
      text: String,
      checked: false
    }

    await axios.post("http://localhost:3001/itens", itens)

    await loadItens();
  }

  function handleRemoveItem(id: string) {
    // FILTRA O ESTADO E REMOVE O ITEM
    // CHAMA A API PARA REMOVER O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }

  async function handleUpdateItem(id: string) {
    // CRIA O OBJETO DO ITEM
    const itens = {
      id: id,
      text: String,
      checked: true
    }
    // CHAMA A API PARA ATUALIZAR O ITEM
    await axios.patch('http://localhost:3001/itens', itens.id)
    // CARREGA OS PRODUTOS NOVAMENTE // 
    loadItens();
  }

  return (
    <div>

      <h1>Lista de compra</h1>
      <div className="grupo-input">
        <input type="text" id="tarefa-text" placeholder="Adicionar uma nova tarefa"/>
          <button id="add-tarefa" onClick={handleAddItem}>
            <span className="material-symbols-outlined">
              add
            </span>
          </button>
      </div>

      <ul id="lista-tarefa">
        {/* {itens.map(itens)} */}
      </ul>
    </div>
  );
}

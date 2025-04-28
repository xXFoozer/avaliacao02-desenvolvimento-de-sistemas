'use client'
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react';
import axios from 'axios';


type Product = {
  id: string,
  content: string,
  checked: boolean
}


export default function MarketList() {
  useEffect(() => {
    loadItens();
  }, [])

  const [content, setContent] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);


  async function loadItens() {
    // BUSCA AS INFORMAÇÕES NA API FAKE
    // SALVA O VALOR NO ESTADO
    const response = await axios.get("http://localhost:3001/itens");
    setProducts(response.data);
  }

  async function handleAddItem(event: any) {
    // CRIAR O OBJETO DO ITEM
    // CHAMA A API PARA ADICIONAR O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
    event.preventDefault()
    console.log(content)
    const product = {
      id: uuidv4(),
      content: content,
      checked: false
    }

    await axios.post("http://localhost:3001/itens", product);
    await loadItens();
    setContent('')

  }

  async function handleRemoveItem(event: React.MouseEvent<HTMLButtonElement>, id: string) {
    // FILTRA O ESTADO E REMOVE O ITEM
    // CHAMA A API PARA REMOVER O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
    event?.preventDefault()
    const filteredProducts = products.filter((produto: Product) => produto.id !== id);
    console.log(filteredProducts)
    await axios.delete(`http://localhost:3001/itens/${id}`);
    setProducts(filteredProducts);
    loadItens()

  }

  async function handleUpdateItem(event: React.MouseEvent<HTMLButtonElement>, id: string) {
    // CRIA O OBJETO DO ITEM
    // CHAMA A API PARA ATUALIZAR O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
    event.preventDefault()

    const patchedProduct = products.map(produto => {
      if (produto.id === id) {
        return { ...produto, checked: !produto.checked};
      }

      return produto
    })

    const updatedProduct = patchedProduct.find(produto => produto.id === id);

    await axios.patch(`http://localhost:3001/itens/${id}`, {
      "checked": updatedProduct?.checked
    })

    loadItens()
  }

  return (
    <div className='container'>
      <header className='header'>
        <h1>Mercadinho zé</h1>
        <input type="text" id='product' placeholder='Insira um produto' onChange={(e) => setContent(e.target.value)} />
        <button className='product' onClick={handleAddItem}>Criar produto</button>
      </header>

      <section className='listProduct'>
        <ul>
          {products.map(item => (
            <li key={item.id}>

              <div><strong>{item.content}</strong></div>
              <div>
                <strong>Pegou? : {item.checked == true ? "Sim" : "Não"}</strong>
                <button onClick={(event) => handleUpdateItem(event, item.id)}>Checar</button>
              </div>

              <button onClick={(event) => handleRemoveItem(event, item.id)}>Apagar</button>

            </li>
          ))}

        </ul>
      </section>
    </div>
  );
}
'use client'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

type ItemProps = {
    id: string,
    text: string,
    checked: boolean
}

export default function Item({id,text,checked}: ItemProps){
    const [itens, setItens] = useState<any[]>([])
    
}
import React from 'react'
import { categories } from '../data'
import styled from 'styled-components'
import CategoriesItem from './CategoriesItem'
const Conatiner= styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`
function Catigories() {
    return (
       <Conatiner>
           { categories.map((item) =>
                <CategoriesItem item={item} key={item.id} />
           )}
       </Conatiner>
    )
}

export default Catigories

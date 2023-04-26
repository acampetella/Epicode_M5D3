import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import '../styles/myCard.css'
import { useState } from 'react'


const SingleCard = ({asin, title, img, price, category}) => {
  const [selected, setSelected] = useState(false)
  const toggleSelected = () => {
    setSelected(!selected)
  }
  return (
    <Card
      className={`${selected ? 'border border-danger shadow' : null}`}
      key={asin} 
      style={{ width: '18rem' }}
      onClick={toggleSelected}
      >
      <Card.Img className='object-fit-cover w-100 imageHeight' variant="top" src={img} />
      <Card.Body>
        <Card.Title className='text-truncate'>{title}</Card.Title>
        <Card.Text>
          {category}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default SingleCard
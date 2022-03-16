import React from 'react'
import { Form,Button} from 'react-bootstrap'

export const CartForm = () => {
  return (

    <div className='container'>
        <Form>
           
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="name" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="name" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
        
            <Button variant="secondary" type="submit">
              Submit
            </Button>
        </Form>
    </div>
  )
}

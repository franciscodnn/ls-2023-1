'use client';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function InvestimentModalForm() {
  const [show, setShow] = useState(false);
  const [investiment, setInvestiment] = useState({
    nameInvestiment: '',
    valueInvestiment: '',
  });
  // const [nameInvestiment, setNameInvestiment] = useState('');
  // const [valor, setValor] = useState('');

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  function handleShow() {
    setShow(true);
  }

  function handleTypedChar(event) {
    const { name, value } = event.target;

    console.log(name + ' - ' + value);

    setInvestiment({
      ...investiment,
      [name]: value,
    });

    console.log(investiment);

    // setInvestiment(event.target.value);
  }

  function handleTypedNameInvestiment(event) {
    setNameInvestiment(event.target.value);
  }

  function handleTypedValor(event) {
    setValor(event.target.value);
  }

  return (
    <>
      <p className='text-right'>
        <Button variant='secondary' onClick={handleShow}>
          +
        </Button>
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Novo investimento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicInvestiment'>
              <Form.Label>Investimento</Form.Label>
              <Form.Control
                type='text'
                placeholder='Informe seu investimento'
                name='nameInvestiment'
                value={investiment.nameInvestiment}
                onChange={handleTypedChar}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicInvestiment'>
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type='text'
                placeholder='Valor do investimento'
                name='valueInvestiment'
                value={investiment.valueInvestiment}
                onChange={handleTypedChar}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Fechar
          </Button>
          <Button variant='primary'>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InvestimentModalForm;

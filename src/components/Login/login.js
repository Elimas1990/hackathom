import React from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.css';



class LoginSection extends React.Component {
    state={
        abierto: false,
    }

    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
    }
    render(){
        return(
            <>
            <div className="principal">
                <div className="secundario">
            <Button color="success" onClick={this.abrirModal}>Login</Button>

            </div></div>

            <Modal isOpen={this.state.abierto}>
                <ModalHeader>
                    Iniciar Sesión
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="user">Usuario</Label>
                        <Input type="text" id="usuario"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Constraseña</Label>
                        <Input type="password" id="password"/>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Iniciar Sesión</Button>
                    <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }    
}     


export default LoginSection;
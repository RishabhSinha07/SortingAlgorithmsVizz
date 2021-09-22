import './Header.css'
import React from 'react'
import {Navbar, NavDropdown, Nav, Container, Button} from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider';

function Header(props) {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#e3f2fd'}}>
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title={props.currentAlgo} id="collasible-nav-dropdown">
                <Button id="SortingTypes" variant="light" onClick = {() => {props.updateAlgo("Insertion Sort");}}>Insertion Sort</Button>
                <Button id="SortingTypes" variant="light" onClick = {() => {props.updateAlgo("Selection Sort");}}>Selection Sort</Button>
                <Button id="SortingTypes" variant="light" onClick = {() => {props.updateAlgo("Bubble Sort");}}>Bubble Sort</Button>
                <Button id="SortingTypes" variant="light" onClick = {() => {props.updateAlgo("Count Sort");}}>Count Sort</Button>
                <Button id="SortingTypes" variant="light" onClick = {() => {props.updateAlgo("Radix Sort");}}>Radix Sort</Button>
                <Button id="SortingTypes" variant="light" onClick = {() => {props.updateAlgo("Cyclic Sort");}}>Cyclic Sort</Button>
            </NavDropdown>
            </Nav>
        <Button variant="dark" onClick = {() => {props.randomize(true);}}>Randomize</Button>
        <RangeSlider min = {5} max = {340} tooltip = "on" variant = "success" id="slider" value={props.sliderValue} onChange={changeEvent => props.SetSliderValue(changeEvent.target.value)} variant='light'/>
        <Button variant="success" onClick = {() => {props.start(true);}}>Start</Button>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

export default Header
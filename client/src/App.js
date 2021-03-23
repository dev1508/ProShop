import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import CartScreen from './screens/CartScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import OrderListScreen from './screens/OrderListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'


import {BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
   <>
   <Router>
   <Header />
   <main className = 'py-3'>
     <Container>
    <Route path = '/page/:pageNumber' component = {HomeScreen} exact />
    <Route path = 'search/:keyword/page/:pageNumber' component = {HomeScreen} exact />
    <Route path = '/' component = {HomeScreen} exact />
    <Route path = '/search/:keyword' component = {HomeScreen}/>
    <Route path = '/PlaceOrder' component = {PlaceOrderScreen} exact />
    <Route path = '/admin/user/:id/edit' component = {UserEditScreen} exact />
    <Route path = '/order/:id' component = {OrderScreen} exact />
    <Route path = '/register' component = {RegisterScreen} exact />
    <Route path = '/profile' component = {ProfileScreen} exact />
    <Route path = '/login' component = {LoginScreen} exact />
    <Route path = '/admin/productlist' component = {ProductListScreen} exact />
    <Route path = '/admin/productlist/:pageNumber' component = {ProductListScreen} exact />
    <Route path = '/admin/product/:id/edit' component = {ProductEditScreen} exact />
    <Route path = '/product/:id' component = {ProductScreen} exact />
    <Route path = '/cart/:id?' component = {CartScreen} />
    <Route path = '/shipping' component = {ShippingScreen}/>
    <Route path = '/payment' component = {PaymentScreen}/>
    <Route path = '/admin/userlist' component = {UserListScreen}/>
    <Route path = '/admin/orderlist' component = {OrderListScreen}/>
     </Container>
     </main>
   <Footer />
   </Router>
   </>
  )
}

export default App;

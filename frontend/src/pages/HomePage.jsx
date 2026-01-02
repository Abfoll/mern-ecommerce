import React, { useEffect } from 'react'
import { Navbar } from '../features/navigation/components/Navbar'
import { ProductList } from '../features/products/components/ProductList'
import { resetAddressStatus, selectAddressStatus } from '../features/address/AddressSlice'
import { useDispatch, useSelector } from 'react-redux'
import {Footer} from '../features/footer/Footer'
import { useLocation } from 'react-router-dom'

export const HomePage = () => {

  const dispatch=useDispatch()
  const addressStatus=useSelector(selectAddressStatus)
  const location=useLocation()

  useEffect(()=>{
    if(addressStatus==='fulfilled'){

      dispatch(resetAddressStatus())
    }
  },[addressStatus])

  return (
    <>
    <Navbar isProductList={true}/>
    <ProductList categoryFromNavigation={location.state?.categoryFilter}/>
    <Footer/>
    </>
  )
}

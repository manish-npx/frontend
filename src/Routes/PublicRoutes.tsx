import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import About from '../pages/About'
import Profile from '../pages/users/Profile'
import Dashboard from '../pages/Dashboard'
import AddUser from '../pages/users/AddUser'
import Anime from '../pages/Anime/AnimeList'
import Page404 from '../errors/404'
import AnimeDetail from '../pages/Anime/AnimeDetail'
import Contact from '../pages/Contact'


const PublicRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/user" element={<Profile />} />
                    <Route path="/add-user" element={<AddUser name='Add User' />} />
                </Route>

                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/anime' element={<Anime />} />
                <Route path='/:slug' element={<AnimeDetail />} />
                <Route path='/404' element={<Page404 />} />
                <Route path="*" element={<Navigate to='/404' />} />

            </Routes>

        </>
    )
}

export default PublicRoutes

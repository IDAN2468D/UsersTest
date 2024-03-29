import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);
    const [foods, setFoods] = useState([]);
    const [applictionPost, setApplictionPost] = useState([]);

    const register = (name, email, pass) => {
        setIsLoading(true);

        axios.post(`${BASE_URL}/users`, {
            name,
            email,
            pass,
        })
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
                console.log(userInfo);
            })
            .catch(e => {
                console.log(`register error ${e}`);
                setIsLoading(false);
            });
    };

    const login = (email, pass) => {
        setIsLoading(true)

        axios.post(`${BASE_URL}/users/Login`, {
            email,
            pass
        })
            .then(res => {
                const userInfo = res.data;
                console.log(userInfo);
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
            })
            .catch(e => {
                console.log(`login error ${e}`);
                setIsLoading(false);
            })
    }

    const logout = () => {
        setIsLoading(true)

        axios.post(`${BASE_URL}/Logout`, {},
            {
                headers: { Authorization: `Bearer ${userInfo.token}` },
            }
        )
            .then(res => {
                console.log(res.data);
                AsyncStorage.removeItem('userInfo');
                setUserInfo({});
                setIsLoading(false);
            })
            .catch(e => {
                console.log(`logout error ${e}`);
                setIsLoading(false);
            });
    }

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true)

            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserInfo(userInfo);
            }

            setSplashLoading(false)
        } catch (e) {
            setSplashLoading(false)
            console.log(`is logged is error ${e}`);
        }
    }

    const fetchPost = () => {
        fetch(`${BASE_URL}/foods`)
            .then((response) => response.json())
            .then((response) => {
                setFoods(response);
            }).catch((error) => {
                console.error(error);
            })
    }

    const ApplictionPost = () => {
        fetch(`${BASE_URL}/appliances`)
            .then((response) => response.json())
            .then((response) => {
                setApplictionPost(response);
            }).catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {
        isLoggedIn()
        fetchPost()
        ApplictionPost()
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                splashLoading,
                foods,
                applictionPost,
                register,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
};
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { HomePage } from './View/HomePage/HomePage.js';
import SignIn from './View/LoginPage/Login.js';
import { MeetingScheduler } from './View/MeetingScheduler/MeetingScheduler';
import { verifyToken } from "./jwtVerify.js";

const secretKey = process.env.SECRET_KEY;

const Views = () => {
    const [tokenValid, setTokenValid] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const userToken = localStorage.getItem("token");
            
            try {
                const decoded = verifyToken(userToken, secretKey);

                if (decoded !== null) {
                    // token is valid from this point
                    const userId = decoded.userId;

                    try {
                        const response = await axios.get(`/api/validateUserId?userId=${userId}`);

                        if (response.status >= 200 && response.status < 300) {
                            setTokenValid(true);
                        } else {
                            setTokenValid(false);
                        }
                    } catch (error) {
                        console.error("Error:", error);
                        setTokenValid(false);
                    }
                } else {
                    console.error("Failed to decode token.");
                    setTokenValid(false);
                }
            } catch (error) {
                console.error(error);
                setTokenValid(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <Routes>
            {tokenValid ? (
                <>
                    <Route index element={<SignIn />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/meetingScheduler" element={<MeetingScheduler />} />
                    <Route path='*' element={<div>404 LOL</div>} />
                </>
            ) : (
                <>
                    <Route index element={<SignIn />} />
                    <Route path="/home" element={<div> Please log in first!</div>} />
                    <Route path="/meetingScheduler" element={<div> Please log in first!</div>} />
                    <Route path='*' element={<div>404 LOL</div>} />
                </>
            )}
        </Routes>
    );
};

export default Views;

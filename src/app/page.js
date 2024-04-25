"use client";
import { increment } from '@/store/slice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Home({ data }) {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }

    return (
        <div>
            home
            <button onClick={() => handleIncrement()}>increment</button>
        </div>

    )
}

export default Home


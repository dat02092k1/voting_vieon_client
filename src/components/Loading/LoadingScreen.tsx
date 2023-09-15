import React from 'react'
import './loading.css';
import { useAppSelector } from '../../store/hook';

function LoadingScreen() {
  const loading = useAppSelector((state) => state.user.loading);
  return (
    <>
    {loading && <div className="spinner-container" >
      <div className="spinner"></div>
    </div>}
    </>
  )
}

export default LoadingScreen
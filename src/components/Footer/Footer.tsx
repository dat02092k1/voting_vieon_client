import React from 'react'

function Footer() {
  return (
    <>
    <footer className='relative z-10 pt-20 lg:pt-[120px] pb-7 px-3'> 
    <div className='block text-center text-[14px] lg:text-[18px] text-white'>
        <div className='mb-4'>Bản quyền thuộc</div> 

        <div className='flex items-center justify-center mb-8'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAvCAMAAAA2GsNtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFKUExURUdwTP///////////////////9v32/////////////////////X89f///////////9X42v///////////y/bO////////////////1PhXf///////////////////////////2Tkbf///zfcQv///3nogXLmeW3mdEPeTYLphf///////37phv///////////3rpgnbnflvjZP///////////wrUGEHmDlTtCyPdEx3bFErpDjHhERjXJCrfEjjkEF7wCuv8637phGjzBxfZFfX99RDVHdj51nTnerX1pqb0j3f4BeP65InrjyLZLMX3vYT9AZP0YZz0d4n4MGTkazvdRnD2Cr70v3fzMI31S1fiX2bsNFLiVabwpq3xsJXulNP41DLdNJvuobbyulPnNXzsZUrgU3juTozveX77Asn2zMT1x2npU4P6Ff8WAtIAAABPdFJOUwAgwC+B/AfxkBBgoAPQPvgMcFCv+igXZ3nR35lEVjfHiqfX86lOeIvpIOdKMKTrvUBhwbS4//////////////////////////////////4QA4XSAAAHPUlEQVRYw82ZaVcaSRSGQaAbEUKjoCAuIIi4r9UI0iIohInIJDMgjuOGGjNq/P9fp5buWnoBc5JzZt4v9lLV9XDr1r23SpfrV2ptKZGPalDRfGJp+We+lApRRdC9lBwxNKb80JeW0xlVVRv9brevqUiZtEgmxcYDFs3OuIN8I88k/gOYpvFj7sGHHzFUoqF2aw9V0rPaq3UhmLZjMpknJQOLwtlJ1iK0MvnrsKQdTWt+FEf72GxAsLSp5ajfygVCzGAyGCN/qBbQfYxrPfdeqq1Mo1a3jlZtQovlzT42Hra2ZAYAwIfM5Qls4hfzkUgMP5/1enG/Ce/Ue6lyWrcFbHUXVdX2oqn5jM/SbpzDAmRcYh8/6xaUjRl9n5YaNeCkegdO5Lapw9RgrE1ytYKtxfklul9HhvP7/cP9K9e4BgNUs+HyD8TykQiQxctBEn8MsiSazNAwqkXtHoAhXO010woZGYQFVjmbMv9eR7cxvcmwyVSiNTBEcB4zkthrcnoQVopzrgh9g7psoAvfO6yVeBKjwvXZ2dntg7As6zCE7Zi6ecIDsHSH2kDXWfpL8DpEV4H1iYnVYVPIrcH6fa2HgVrXtVeetaE2tkwdZwdghUkYmxBma1y03WDlz9i3e527KtVNpyW4V97c0+uMBUioiuBrIwOkfiCSLrbZdJ017z5S3d29PL0wM8IkaY5ewV1nrFkWEeireWbGoUowY9Uue79z6vVu+ozrTFUT5r6jC45YcRY/df93SWEW0cx+OuX1Tnn4hd6uGh++1q5/4wRvrpttOo/VhqpZ6pGY7IQ15mLONUKu59C1F3aKe5FYOJ2b1/PqDIukl8Z3W9rVJ063n26hNPoaXKpqzvIzV2kWogtLwbe6VSKc/8fRNRxZj3iy0SHAMpnXeLZDI2mn9P0Ppn+I+ic94/2NzSzqYwmpepQVDbqFgIdaDoX/kN5Db/+Bz69x/WHGmKVWo/ztC9XXL1+ROv2TKzqLqho1Zp7jWrfHWuGSs565N/R4Ni9gSSQsh4k7+MgKdkWNUW+LhYu/DH1D+g51eHJCfa+tNnSeJJ8jQrZYxhTtUkdzG+XEXHKTwwpgmojico8wn1ymEf6qvH/+J9HFxcW3v6EeHx9LpZMbzrn0ECHHOS73hh0W4Cd5gY4/zjUhDTbpWh1FBpPxL1/sUFsUjk/fdKgLHeqxXCyd0ITZpD4v+/jMQZzDAYs41ygyMYusHJaEO7tZVYLD7bYxaP3k4PTz57e3t9O38/Pjo6P9/YODQuUQYnW4yLVklMVyzFx8OWAR50K/IsQWAm4SZgE3xCUn7Ic5I5jWS/ufkU5Pz48RFYQqVMoIi4aIWw4LLIxyXElnLDJJcOEryCxJronMXGudqxLxfOZqItazFcvWWgDsBsXia84BCzvXHqyz0d+ABSvC1dUYC5NvN6lv7cNJfH4+PUdYZAoJVo3L1jmGxUIfKlkmkkERK0w9T0fwMh/isfDjMTfWKi2D1ugUPUGXf6bG4rBuuFpwm8PSs7FFQtzSMyEsKPa4h2YsXrgec3XpFJX3j8+JrTAWmkOMReMWLAWXuawHwp4BWAv0HoejAHb97LuxMkZZ0yoWjo6RjkRj0SgPNLXNJ2NY3406Y22KVVnSw5eAw7ESNOd1ygf7R0cYSnd4jEXf37FC0Hi0GXTEGmN7ShwCplhutGJNT0DtkmMT4rI56vOtYuVgn4ijuuILrrQJi9+amrDYgsCRwYfytBx0wLJ+RqJJEdwXK4UDrIJOVSyxegtEWXnKTB5wwuLWA07NPhIm3ovlStCVBprFcqWAVdGpNLbNeIF7MpcFKzzngBWzKfnjwhZIZmHNBmury+0jioflSgUxlQ/hDJbar8JWMW3FAiuT5g/iSkHmvG7VUpK5TeFUj/JSBMr4nYkHNshDv3hIVER+1RJ2ZG3FBgvMS3ZYI3zpo9d5bNfPYc1yOdHDajMYUbvcTrV+2y+VIBIsaK56/OiXnLEELG7NcWPyKcCo++ZdNlh44+2bZJaj9Xy6adpV15rNs5uq8PBG2O2LkSZigyUcx6RIu5QdFqkwsNcF0T4qzLYx+YdhZxAtTW2wXaIkvvR9sGDJwsyumjYhBGuFK7rDsDxUkiyakhI1czeYCh1BcEeVMdPrDbcZKyuevfhoLYitMpMl1otMsiPV6ZAM+IiLV2N0IFf9STwYiVsOThUTlimLzwP+hGZPjMbCSVlSjBLRF2eqalfcinmsR81ZEUtWbA4rkvxxErdapCz7zp5pWa9lHE/eXvrCDLpmNsCgA12ElTQftQpxf9q8iKf0L65ELDlWSVzZnunWazBgsRNKZXzPrpWPcwkFyOYQq4xB0YepMUNGjJJWvX5/fEayPUCNNqsWqHu4OUwY599KbDblt1NcqLzinl/67x4lHb0UDgFfmzAuJLZc/7Wkpbz21Lx/eH19uK89aXB3n15z/S+k5HbyUa2hatFMYulnmP4FDGjsyiR9B6sAAAAASUVORK5CYII=" alt="" />
        </div>

        <div className='text-[12px] xs:text-[14px] lg:text-[18px]'>
        Công ty Cổ phần VieON - Địa chỉ: Tầng 5, 222 Pasteur, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh. 
        </div>

        <div>
            Email
            <a className="link" href="mailto:support@vieon.vn" title="Email hỗ trợ: support@vieon.vn" target="_parent">support@vieon.vn</a>
            <span className="px-2">|</span>
            Hotline
            <a className="link" href="tel:(+84)1800599920" title="Hãy gọi cho chúng tôi theo số hotline 1800.599.920 (miễn phí)" target="_parent">1800.599.920</a>
            (miễn phí)
        </div>

        <div>Giấy phép Cung cấp Dịch vụ Phát thanh, Truyền hình trả tiền số 247/GP-BTTTT cấp ngày 21/07/2023.</div>
    </div>
    </footer>
    </>
  )
}

export default Footer
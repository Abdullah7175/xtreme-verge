import React from 'react'

const Footer = () => {
    return (
        <footer className='p-14 bg-black text-white'>
          <div className='max-w-[80%] mx-auto'>
            <div className='grid md:grid-cols-3 gap-4 mb-10 justify-center'>
                <div>
                    <div className="logo"><img src="/favicion.png" alt="" width={50}/></div>
                    <p>
                        Our solutions make production faster and cheaper. Contact us for more information.
                    </p>
                </div>
                <div className=''>
                    <h1 className='text-2xl'>
                        Company
                    </h1>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </div>
  
           
                <div>
                    <h1 className='text-2xl'>
                        Get In Touch
                    </h1>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            </div>
            <div className='bg-slate-400 min-h-[1px]'/>
            <div className='flex flex-col md:flex-row justify-between mt-10'>
                <div>
                    <p>2025 Xtreme Verge, All rights reserved</p>
                </div>
                <div className='flex mt-2 md:mt-0 flex-col md:flex-row gap-2'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer
import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons'
import logo from '../images/cryptocurrency.jpg'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar src={logo} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>
                        Cryptoverse
                    </Link>
                </Typography.Title>
                {/* <Button className='menu-control-container'>

            </Button> */}
            </div>
        </div>
    )
}

export default Navbar
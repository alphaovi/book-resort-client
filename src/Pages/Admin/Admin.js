import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import Warehouse from '../Home/Warehouse/Warehouse';
import "./Admin.css"

const Admin = () => {
    const navigate = useNavigate();
    const navigateToWarehouse = () => {
        navigate("/warehouse")
    }
    const navigateToAddProduct = () => {
        navigate("/addbook")
    }
    return (
        <div className="admin-panel">
            <div>
                <Sidebar>
                    <Menu>
                        <MenuItem className="text-primary mt-2" onClick={navigateToWarehouse}> Warehouse</MenuItem>
                        <MenuItem className="text-secondary" onClick={navigateToAddProduct}> Add Product </MenuItem>
                        <SubMenu className='text-danger' label="Charts">
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>;
            </div>
            <div>
                <Warehouse></Warehouse>
            </div>
        </div>
    );
};

export default Admin;
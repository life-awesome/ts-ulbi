import React, {FC} from 'react';
import {Header} from "antd/es/layout/layout";
import {Menu, Row} from "antd";

const Navbar: FC = () => {
    const navNames = ['Логин']
    return (
        <Header>
            <Row justify={"end"}>
               <Menu theme={'dark'} mode={'horizontal'} selectable={false} items={navNames.map((el, index) => ({key: String(index + 1), label: el}))}/>
            </Row>
        </Header>
    );
};

export default Navbar;
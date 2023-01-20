import React, { useState, useEffect } from 'react';
//import { Button } from 'ui';
import { Container, Row, Col, Grid, Card, Text, Button, Input } from "@nextui-org/react";
import axios from 'axios';
import Loadings from './components/test/Loadings';
import ProductListView from './components/test/ProductListView';


const Web = () => {
    const axios = require('axios');
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [productList, setProductList] = useState({
        dataList : [],
        viewType : ''
    });

    const onChange = (e) => {
        setSearchText(e.target.value);
        console.log(e.target.value);
    };

    useEffect(() => {
            console.log('컴포넌트가 화면에 나타남');
            axiosGetProductList("table");
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
        }
    },[]);

    const axiosGetProductList = (type) => {
        //console.log(type);
        setLoading(true);
        let searchUrl = 'https://dummyjson.com/products';
        if(searchText != '') {
            searchUrl = searchUrl+'/search?q='+searchText;
        }
        axios.get(searchUrl)
        .then(function (response) {
            // 성공 핸들링
            // console.log(response.data.products);
            setProductList({
                ...productList,
                dataList : response.data.products,
                viewType : type
            });
            setLoading(false);

        })
        .catch(function (error) {
            // 에러 핸들링
            console.log(error);
        })
        .then(function () {
            // 항상 실행되는 영역
        });
    }

    return (
        <Container>
            <Grid.Container gap={1} justify="center">
                <Grid xs={12}>
                    <Row justify="center" align="center">
                        <h1>Product List</h1>
                    </Row>
                </Grid>
                <Grid xs={12}>
                    <Row justify="center" align="center">
                        <Grid.Container gap={2} justify="center">
                            <Grid xs={4}>
                                <Input type={"text"} onChange={onChange} value={searchText} placeholder="search..."/>
                            </Grid>
                            <Grid xs={4}>
                                <Button onClick={() => axiosGetProductList("list")}  size={"xs"}>UL UI list</Button>
                            </Grid>
                            <Grid xs={4}>
                                <Button onClick={() => axiosGetProductList("table")} size={"xs"}>Table list</Button>
                            </Grid>
                        </Grid.Container>
                    </Row>
                </Grid>
                <Grid xs={12}>
                    <ProductListView product={productList} />
                </Grid>
                <Grid xs={12}>
                    <Card css={{ $$cardColor: '$colors$primary' }}>
                        <Card.Body>
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    NextUI gives you the best developer experience with all the features
                                    you need for building beautiful and modern websites and
                                    applications.
                                </Text>
                            </Row>
                        </Card.Body>
                    </Card>
                </Grid>
                {loading ? <Loadings /> : null}
            </Grid.Container>
        </Container>
    );
}

export default Web;
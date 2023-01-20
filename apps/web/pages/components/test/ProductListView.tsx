import React from 'react';
import Image from "next/image";
import { Table } from '@nextui-org/react';

function ProductListView({product}) {
    console.log(product);
    const data = product.dataList;
    //console.log(data);
    console.log(product.viewType);

    if (product.viewType){
        if (product.viewType != "table"){
            return listView(data);
        } else {
            return listTabal(data);
        }
    }

    // return (
    // );
}
function listView(data) {
    console.log("listView");
    const listItems = data.map((product, index) => <li key={product.id}>{product.id}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}
function listTabal(data) {
    console.log("listTabal");

    const columns = [
        { key: "id", label: "ID" },
        { key: "brand", label: "BRAND" },
        { key: "category", label: "CATEGORY" },
        { key: "description", label: "DESCRIPTION" },
        { key: "discountPercentage", label: "DISCOUNT PERCENTAGE" },
        { key: "price", label: "PRICE" },
        { key: "title", label: "TITLE" },
        { key: "thumbnail", label: "THUMBNAIL" },
    ];

    return (
        <Table
            lined
            headerLined
            compact
            aria-label="Example dynamic compact collection table with color selection"
            color="success"
            selectionMode="multiple"
            defaultSelectedKeys={["2"]}
            containerCss={{
                height: "auto",
                minWidth: "100%",
            }}
        >
            <Table.Header columns={columns}>
                {(column) => (
                    <Table.Column key={column.key}>{column.label}</Table.Column>
                )}
            </Table.Header>
            <Table.Body items={data}>
                {(item) => (
                    <Table.Row key={item.id}>
                        {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    );
}
// function listTabal(data) {
//     console.log("listTabal");
//     const listItems = data.map((product, index) =>
//         <tr key={product.id}>
//             <td>{product.id}</td>
//             <td>{product.brand}</td>
//             <td>{product.category}</td>
//             <td>{product.description}</td>
//             <td>{product.discountPercentage}</td>
//             <td>{product.price}</td>
//             <td>{product.title}</td>
//             <td><Image src={product.thumbnail} alt="" width="100" height="100" /></td>
//         </tr>
//     );
//
//     return (
//         <table>
//             <thead>
//             <tr>
//                 <td>id</td>
//                 <td>brand</td>
//                 <td>category</td>
//                 <td>description</td>
//                 <td>discountPercentage</td>
//                 <td>price</td>
//                 <td>title</td>
//                 <td>thumbnail</td>
//             </tr>
//             </thead>
//             <tbody>
//             {listItems}
//             </tbody>
//         </table>
//     );
// }

export default ProductListView;

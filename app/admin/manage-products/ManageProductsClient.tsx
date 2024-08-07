'use client' 

import { Product } from "@prisma/client"
import Heading from "@/app/components/Heading";
import { formatPrice } from "@/utils/formatPrice";
import axios from "axios"
import toast from "react-hot-toast";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Status from "@/app/components/Status";
import { MdCached, MdClose, MdDelete, MdDone, MdRemoveRedEye } from "react-icons/md";
import { ActionBtn } from "@/app/components/ActionBtn";
import { Router } from "next/router";
import { deleteObject, getStorage, ref } from "firebase/storage";
import firebaseApp from "@/libs/firebase";

interface ManageProductsClientProps {
    products?: Product[]
} 

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
    products
}) => {  

    const router = useRouter();
    const storage = getStorage(firebaseApp); 
    let rows: any = []

    if(products) {
        rows = products.map((product) => {
            return {
                id: product.id, 
                name: product.name, 
                price: formatPrice(product.price), 
                category: product.category, 
                brand: product.brand,
                inStock: product.inStock, 
                images: product.images
            }
        })
    } 

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 220}, 
        {field: 'name', headerName: 'Name', width: 220},
        {field: 'price', headerName: 'Price(USD)', width: 100, renderCell: (params) => {
            return (<div className="font-bold text-slate-800"> {params.row.price} </div>)
        }},
        {field: 'category', headerName: 'Category', width: 200},
        {field: 'brand', headerName: 'Brand', width: 100}, 
        {field: 'inStock', headerName: 'inStock', width: 110, renderCell: (params) => {
            return (<div className="font-bold text-slate-800"> {params.row.inStock === true 
            ? 
            (<Status
                text="in stock"
                icon={MdDone}
                bg=""
                color="text-teal-700"
            /> ) :  
            (<Status 
                text="out of stock"
                icon={MdClose}
                bg=""
                color="text-red-700"
            /> )} </div>)
        }},  
        {
            field: "action", 
            headerName: "Action", 
            width: 200, 
            renderCell: (params) => {
                return (
                    <div className="flex justify-between gap-4 w-full"> 
                        <ActionBtn icon={MdCached} onClick={() => {
                            handleToggleStock(params.row.id, params.row.inStock); 
                        }} /> 
                        <ActionBtn icon={MdDelete} onClick={() => {
                            handleDelete(params.row.id, params.row.images)
                        }} />
                        <ActionBtn icon={MdRemoveRedEye} onClick={() => {
                            router.push(`product/${params.row.id}`); 
                        }} />
                    </div>
                )
            }
        }
    ]; 

    // Switching inStock or out of stock
    const handleToggleStock = useCallback((id: string, inStock: boolean) => {
        axios.put('/api/product', {
            id, 
            inStock: !inStock
        }).then((res) => {
            toast.success('Product status changed')
            router.refresh()
        }).catch((err) => {
            toast.error('Oops! Someting went wrong')
            console.log(err)
        })
    }, []) 

    // Removing the product 
    const handleDelete = useCallback(async(id: string, images: any[]) => {
        toast('Deleting product, please wait...') 

        const handleImageDelete = async() => {
            try {
                for(const item of images) { 
                    if(item.image) {
                        const imageRef = ref(storage, item);
                        await deleteObject(imageRef);
                        console.log('image deleted', item.image)
                    }
                }
            } catch(error) {
                return console.log('Deleting images error', error)
            }
        }; 

        await handleImageDelete();  

        axios.delete(`/api/product/${id}`).then((res) => {
            toast.success("Product deleted")
            router.refresh(); 
        }).catch((error) => {
            toast.error("Failed to delete product");
            console.log(error)
        })

    }, []); 



    return (
        <div className="max-w-[1250px] m-auto text-xl">  
            <div className="mb-4 mt-8"> 
                <Heading title="Manage Products" center />
            </div> 

            <div style={{ height: 600, width: "100%" }}> 
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                        },
                    }}
                    pageSizeOptions={[9, 20]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
            
        </div>
    )
}

export default ManageProductsClient
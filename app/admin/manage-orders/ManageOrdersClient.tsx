'use client' 
import { Order, User } from "@prisma/client"
import { DataGrid, GridColDef } from "@mui/x-data-grid"; 
import { formatPrice } from "@/utils/formatPrice";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone, MdRemoveRedEye } from "react-icons/md";
import { ActionBtn } from "@/app/components/ActionBtn";
import { useCallback } from "react";
import axios from "axios"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import moment from "moment";
import React from 'react' 

interface ManageOrdersClientProps {
    orders?: ExtendedOrder[]
} 

type ExtendedOrder = Order & {
    user: User
}

const ManageOrdersClient = () => {
  return (
    <div>ManageOrdersClient</div>
  )
}

export default ManageOrdersClient

import Container from "@/app/components/Container";
import NullData from "@/app/components/NullData";
import React from 'react'
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/actions/getProducts"; 
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from '@/libs/prismadb';
import { GetServerSideProps } from "next";
import { Product } from '@prisma/client';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query;

  if (!category || typeof category !== 'string') {
    return {
      notFound: true,
    };
  }

  try {
    // Fetch data based on the category
    const data = await prisma.product.findMany({
      where: {
        category: category,
      },
    });

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      notFound: true,
    };
  }
}; 

interface ManageProductsPageProps {
  data: Product[];
}

const ManageProductsPage: React.FC<ManageProductsPageProps> = ({ data }) => {
  return (
    <div className="pt-8">
      <Container>
        <ManageProductsClient products={data} />
      </Container>
    </div>
  );
};

export default ManageProductsPage;

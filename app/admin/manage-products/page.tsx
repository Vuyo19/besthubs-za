import Container from "@/app/components/Container";
import NullData from "@/app/components/NullData";
import React from 'react'
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/actions/getProducts"; 
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from '@/libs/prismadb';
import { GetServerSideProps } from "next";
import { Product } from '@prisma/client';

interface ManageProductsPageProps {
  data: Product[];
}

async function fetchProducts(category: string): Promise<Product[]> {
  const products = await prisma.product.findMany({
    where: { category },
  });
  return products;
}

const ManageProductsPage = async ({ searchParams }: { searchParams: { category?: string } }) => {
  const category = searchParams.category;

  if (!category) {
    return (
      <div>
        <h1>Category not found</h1>
      </div>
    );
  }

  const data = await fetchProducts(category);

  return (
    <div className="pt-8">
      <Container>
        <ManageProductsClient products={data} />
      </Container>
    </div>
  );
};

export default ManageProductsPage;
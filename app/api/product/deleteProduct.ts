import { NextApiRequest, NextApiResponse } from 'next';
import { getCurrentUser } from '@/actions/getCurrentUser';
import prisma from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { id } = req.query;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Forbidden' });
    }

    try {
        const product = await prisma.product.delete({
            where: { id }
        });
        return res.status(200).json(product);
    } catch (error: any) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

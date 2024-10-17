'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Store } from './store';
import ProductInfo from '@/app/music_store/item/[id]/page';
import { defaultProducts } from '../data';

export default function Main() {
    const [data, setItem] = useState(defaultProducts);
    const router = useRouter();
    const id = router.id;

    return (
        <div>
            {!id ? (
                <Store data={data} setItem={setItem} />
            ) : (
                <ProductInfo data={data} />
            )}
        </div>
    );
};

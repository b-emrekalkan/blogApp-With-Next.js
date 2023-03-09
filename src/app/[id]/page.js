import Image from 'next/image';
import React from 'react';
import styles from "./styles.module.css";
import {notFound} from 'next/navigation';

async function getPost(id) {
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    return response.json();
}

const Page = async ({ params }) => {
    const blogDetail = await getPost(params.id)

    if(!params.title){
        return notFound()
    }
    return (
        <div className={styles.blogContainer}>
            <div className={styles.cardImage}>
                <Image
                    src={`https://picsum.photos/960/400?random=${params.id}`}
                    alt={params.title}
                    fill
                />
            </div>
            <h1 className={styles.title}>{params.title}</h1>
            <p>{params.body}</p>
        </div>
    )
}

export default Page
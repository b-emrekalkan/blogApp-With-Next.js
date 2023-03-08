import React from 'react';
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css"

const BlogCard = () => {
    return (
        <Link href="/">
            <div className={styles.imageWrapper}>aüuiauieaieua
                <Image
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="Blog Card Image"
                    fill />
            </div>
        </Link>
    )
}

export default BlogCard;
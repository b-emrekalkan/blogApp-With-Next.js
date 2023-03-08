import React from 'react';
import Link from "next/link";
import Image from "next/image";

const BlogCard = () => {
    return (
        <Link href="/">
            <div>
                <Image
                    src="https://picsum.photos/200/300"
                    alt="Blog Card Image"
                    width={96}
                    height={96} />
            </div>
        </Link>
    )
}

export default BlogCard;
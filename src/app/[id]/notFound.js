import Image from 'next/image';
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h1>
                <Image src="./404-error-page.jpg"/>
            </h1>
        </div>
    )
}

export default NotFound;
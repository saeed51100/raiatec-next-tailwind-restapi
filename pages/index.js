import React from 'react';
import { Link } from 'next/link';

const IndexPage = () => {
    return (
        <div>
            <Link href="/posts">Posts</Link>
        </div>
    );
};

export default IndexPage;
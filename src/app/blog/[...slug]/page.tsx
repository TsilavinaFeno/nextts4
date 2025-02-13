interface BlogProps {
    params: { slug: string[] };
}

const BlogPage: React.FC<BlogProps> = ({ params }) => {
    return (
        <div>
            <h1>Blog Page</h1>
            <p>Slug: {params.slug ? params.slug.join(" : ") : "No Slug Provided"}</p>
        </div>
    );
}

export default BlogPage;
interface BlogPageProps {
    params: { id: string };
}

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
    return (
        <div>
            Blog ID: {params.id || 'No ID provided'}
        </div>
    );
}

export default BlogPage;

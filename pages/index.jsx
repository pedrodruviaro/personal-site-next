import { api_fetch } from "../src/api";
import ReactMarkdown from "react-markdown";

function Home(props) {
    const { post } = props;

    return (
        <div className="container">
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <h3>{post.description}</h3>
                    <div className="author">
                        <img src={post.author.photo.url} alt="" />
                        <p>{post.author.name}</p>
                    </div>

                    <ReactMarkdown>{post.content.markdown}</ReactMarkdown>
                </>
            )}
        </div>
    );
}

export default Home;

export async function getStaticProps() {
    const res = await api_fetch();

    if (!res) {
        return {
            redirect: {
                destination: "/not-found",
            },
        };
    }

    return {
        props: {
            post: res.posts[0],
        },
        revalidate: 10000,
    };
}

import './article.css';

export const Article = ({ post }) => {

    const { image, title, description } = post;

    return (
        <article>
            <div class="content-imagem">
                <img src={post.image} alt={post.title} />
            </div>
            <div class="content-description">
                <p>{post.description}</p>
            </div>
        </article>
    )
}
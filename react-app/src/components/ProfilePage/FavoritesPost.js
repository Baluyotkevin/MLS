import { useDispatch } from 'react-redux';
import { thunkDeleteFav } from '../../store/post';

const FavoritesPost = ({ post }) => {
    const dispatch = useDispatch()

    const handleFavorite = async (e) => {
            await dispatch(thunkDeleteFav(post))
        }

    return (
        <li className='singlePostCont' key={post.id}>
            <div className='titleFav'>
                {post.title}
            <div className='heart fav'>
                        <i class="fa-solid fa-bookmark" style={{ color: '#ce4257'}} onClick={ handleFavorite }></i>
                    </div>
            </div>
            <div>
                {post.category}
            </div>
            <br />
            <div className='postBodyCont'>
                    {post.body}
            </div>
                <div>
                    {post.anonymous ? 'Anonymous' : post.user.first_name} - {post?.created_at.slice(0, 16)}
                </div>
            <br />
        </li>

    )
}

export default FavoritesPost
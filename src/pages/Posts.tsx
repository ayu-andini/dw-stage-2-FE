import { Link, Outlet } from 'react-router-dom'


const posts = [
    {id: 1, title:"first post"},
    {id: 2, title:"second post"},
    {id: 3, title:"third post"},
]

export default function Posts (){
    return (
        <div className="flex flex-col item-center justify-center h-100">
            <h1 className="text-4xl mb-4 font-bold">POSTS PAGE</h1>
            <ul className="mb-4">
                { posts.map((post)=> (
                    <li key={post.id}>
                        <Link to={post.id.toString()} className='text-blue-500 underline'>
                        { post.title }</Link>
                    </li>
                ))}
            </ul>
            <Outlet>
                
            </Outlet>
        </div>
    )
}
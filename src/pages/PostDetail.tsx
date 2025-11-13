import { useParams } from "react-router-dom"

export default function Home (){
    const { postId } = useParams();

    return (
        <div className="mt-4 border rounded bg-gray-100">
            <h1 className="text-2xl font-semibold mb-2">Post Detail</h1>
            <p>Showing details for post ID: <span className="font-mono">{postId}</span></p>
        </div>
    )
}
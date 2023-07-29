import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"

async function getUser(db) {
    const userCol = collection(db, 'User')
    const userSnapshot = await getDocs(userCol)
    return userSnapshot
}

function showData(user) {
    console.log(user.data().Email)
}

const data = await getUser(db)
data.forEach(User => {
    showData(User)
})
export default function TalkingArea() {

    return (
        <div className="container">
            <h1>Talking Area</h1>
        </div>

    );
}
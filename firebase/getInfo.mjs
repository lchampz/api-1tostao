import { collection, getDocs } from 'firebase/firestore';
import db from './conn.mjs'

function getInfo(res, col) {
    const questsCol = collection(db, col)

    getDocs(questsCol).then((snapshot) => {
        let quest = []
        snapshot.docs.forEach((doc, i) => {
            quest.push({ id: i, ...doc.data() })
        })
        console.log(quest)
        return res.json(quest)
    })
    .catch((err)=> {
        console.log(err)
        return res.json(err)
    })
}

export default getInfo
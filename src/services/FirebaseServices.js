import { database } from './Firebase'

/*

snapshot do BD

users/{}
albuns/{}


*/

export default class FirebaseServices {
    
    //método utilizado para buscar dados de um path
    static getData = (path, callback) => {

        let query = database.ref(path)

        query.on('value', dataSnapshot => {
            let items = []
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val()
                item['key'] = childSnapshot.key
                items.push(item)
            })
            callback(items)
        })
        return query
    }


    static setAlbum = (payload, callback) => {
    }
}
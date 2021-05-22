import {api} from "@/helpers/api"

class PosterService {

    async getAll() {
        try {
            const res = await api.get('/api/posters/')
            return res.data
        } catch (e) {throw e}
    }

    /*async getById(id) {
        try {
            const res = await api.get(`/api/posters/${id}/`)
            return res.data
        } catch (e) {throw e}
    }*/


}

export default new PosterService()

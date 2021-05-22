import PosterService from "@/services/PosterService"

export default {
    namespaced: true,
    state: () => ({
        poster: null,
        posters: []
    }),
    actions: {
        async getAll(ctx) {
            const posters = await PosterService.getAll()
            ctx.commit('setPoster', posters)
        },
        // async getById(ctx, id) {
        //     const poster = await PosterService.getById(id)
        //     ctx.commit('setPoster', poster)
        // }
    },
    mutations: {
        setPosters: (state, payload) => state.posters = payload,
        setPoster: (state, payload) => state.poster = payload,
    },
    getters: {
        getPosters: state => state.posters,
        getPoster: state => state.poster
    }

}

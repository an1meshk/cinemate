export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const { AccessToken } = config
    const moviesUrl = 'https://api.themoviedb.org/3/search/movie'
    const seriesUrl = 'https://api.themoviedb.org/3/search/tv'
    const userQuery = getQuery(event)
    const { searchText } = userQuery

    const movies = await $fetch(moviesUrl, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            query: searchText
        }
    })

    const series = await $fetch(seriesUrl, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            query: searchText
        }
    })

    return { movies, series }
})
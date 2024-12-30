export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const { AccessToken } = config
    const movieUrl = 'https://api.themoviedb.org/3/discover/movie'
    const seriesUrl = 'https://api.themoviedb.org/3/discover/tv'

    const movies = await $fetch(movieUrl, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
            page: 1,
            language: 'en-US'
        }
    })

    const series = await $fetch(seriesUrl, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
            include_null_first_air_dates: false,
            page: 1,
            language: 'en-US'
        }
    })

    return { movies, series }
})
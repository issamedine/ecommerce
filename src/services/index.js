export const fetchApi = async (uri) => {
    const res = await axios.get(uri)
    return res
}
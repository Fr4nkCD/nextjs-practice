export default async function MyFetch() {
    const data = await fetch('https://api.github.com/users/fr4nkcd')
    const result = await data.json()
    console.log("Data: ", result)
    console.log("URL: ", result.avatar_url)

    if (!result) return <>...loading!!</>

    return (<>
        Fetch me your soul

        <hr />
        <img src={result.avatar_url} width={400}/>

        {result.ava}
    </>)
}
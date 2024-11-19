import CC from "@/components/cc"

// import Head from "@/app/components/head"
// import Foot from "@/app/components/foot"

export default function Params(
    { params, searchParams }:
        {
            params: { slug: string },
            searchParams: { [key: string]: string | string[] | undefined }
        }) {

            searchParams.guitar = "Guitar"
    return (<>
        {/* {<Head />} */}
        Params: {params.slug}
        <hr />
        CC: <CC />
        <hr />
        QueryString: <br />
        SearchParams: {JSON.stringify(searchParams)}
        
        <br />
        Guitar: {searchParams.guitar}
        {/* {<Foot />} */}
    </>)
}
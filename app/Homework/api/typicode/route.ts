// http endpoint

export async function GET() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    return Response.json(data)
   }
   
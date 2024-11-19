   // http endpoint

   export async function GET() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // Correct way to return a response in most environments
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    });
}
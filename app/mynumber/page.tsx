export default function ParentComponent() {
    function changeMyNumber{newnumber: number} {

    }
    return (
        <div className="flex flex-col items-center">
            <div>My number in Parent = {mynumber}</div>
            <ShowMyNumber
                mynumber={mynumber}
            />
        </div>
    )
}
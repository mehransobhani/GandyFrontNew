export default function Thead({heads}) {
    return (<>
        <thead
            className="border-b border-neutral-200 font-medium bg-indigo-100 text-center">
        <tr>
            {
                heads.map((head, index) => (
                    <th scope="col" className="px-6 py-4" key={index}>{head.title}</th>
                ))
            }
        </tr>
        </thead>
    </>)
}

interface PostPreview {
    title: string
}

export default function Preview (props: PostPreview) {
    return (
        <div>
            <h1 className="font-title text-3xl">{props.title}</h1>
            <p className="text-gray-500">13 January 2022</p>
            <p className="">Cada letra possui um índice na chamada tabela ASCII. Isso significa que podemos representar letras através de números.
            Logo, a palavra "Man" seria representada pelos valores 77, 97 e 110.</p>
        <div className="py-4"><div className="w-full border-t hr border-gray-300"></div></div>
        </div>
    )
}
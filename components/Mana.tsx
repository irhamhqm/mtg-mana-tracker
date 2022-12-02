import Image from "next/image"

type ManaProps = {
  image: string,
  counter: number,
  handleAdd: () => void,
  handleSub: () => void,
  handleSet: (value: number) => void
}

export default function Mana(props: ManaProps) {
  const { image, counter, handleAdd, handleSub, handleSet } = props;
  return (
    <div className="flex flex-col align-center items-center text-center">
      <Image src={`/${image}.png`} alt="mana" width={150} height={150} />
      <div>
        <button className="p-3 font-bold text-lg" disabled={!counter} onClick={handleSub}>-</button>
        <input className="p-3 w-12 h-12 font-bold text-lg" value={counter} onChange={(e) => handleSet(parseInt(e.target.value, 10))}/>
        <button className="p-3 font-bold text-lg" onClick={handleAdd}>+</button>
      </div>
    </div>
  )
}
import Image from 'next/image';
import svgTalk from '@/lib/assets/talking-chat.svg'

export default function Home() {
  return (
    <div>
      <Image style={{opacity: '.5'}}
        src={svgTalk}
        alt='svg'
        width={500}
        height={500}
      />
    </div>
  )
}

import Image from 'next/image';
import svgTalk from '@/lib/assets/talking-chat.svg';
import './style.css';

export default function Home() {
  return (
    <div className='homeMain flex-grow grid place-items-center'>
      <Image style={{opacity: '.7', width: '70%', marginBottom: '5rem'}}
        src={svgTalk}
        alt='svg'
      />
    </div>
  )
}

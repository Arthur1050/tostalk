import Image from 'next/image';
import svgTalk from '@/lib/assets/talking-chat.svg';
import './style.css';
import MenuToggle from '@/components/atoms/menuToggle/MenuToggle';

export default function Home() {
  return (
    <>
      <div>
        <MenuToggle classes='absolute left-4 top-4' />
      </div>
      <div className='homeMain flex-grow grid place-items-center'>
        <Image style={{opacity: '.7', width: '70%', marginBottom: '5rem'}}
          src={svgTalk}
          alt='svg'
        />
      </div>
    </>
  )
}
